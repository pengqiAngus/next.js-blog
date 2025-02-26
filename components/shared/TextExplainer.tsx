"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TextExplainerProps {
  children: React.ReactNode;
}

export function TextExplainer({ children }: TextExplainerProps) {
  const [selectedText, setSelectedText] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [explanation, setExplanation] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const handleMouseUp = (e: MouseEvent) => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    
    if (text && text.length > 0) {
      setSelectedText(text);
      
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      
      // 使用鼠标位置计算弹出层位置
      const popoverWidth = 500;
      const popoverHeight = 400;
      const margin = 8;

      // 水平位置：以鼠标位置为中心，但不超出视窗边界
      let x = e.clientX - (popoverWidth / 2);
      x = Math.max(margin, Math.min(x, viewportWidth - popoverWidth - margin));

      // 垂直位置：优先显示在鼠标位置下方
      let y = e.clientY + margin;
      
      // 检查下方空间是否足够，如果不够则显示在上方
      if (y + popoverHeight > viewportHeight) {
        y = e.clientY - popoverHeight - margin;
      }

      // 如果上方空间也不够，则显示在视窗中间
      if (y < 0) {
        y = Math.max(margin, Math.min(e.clientY, viewportHeight - popoverHeight - margin));
      }
      console.log();
      
      setPosition({
        x: x ,
        y: y 
      });
      setIsOpen(true);
    }
  };

  const handleExplain = async () => {
    setIsLoading(true);
    setExplanation("");

    try {
      const response = await fetch("/api/ai-explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ term: selectedText }),
      });

      if (!response.ok) throw new Error("Failed to get explanation");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader available");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        const lines = text.split("\n");

        let buffer = "";
        for (const line of lines) {
          if (line.trim() === "") continue;
          buffer += line;
          setExplanation((prev) => prev + buffer);
        }
      }
    } catch (error) {
      console.error("Error getting explanation:", error);
      setExplanation("Sorry, failed to get explanation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="relative">
      {children}
      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            "fixed z-50 w-[500px] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
            "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium">
                Would you like an explanation for this:
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Button>
            </div>
            <p className="text-sm italic bg-muted/50 p-2 rounded">{selectedText}</p>

            <div className="flex justify-end space-x-2">
              <Button size="sm" onClick={handleExplain} disabled={isLoading}>
                {isLoading ? "Explaining..." : "Explain"}
              </Button>
            </div>

            {explanation && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Explanation:</p>
                <ScrollArea className="h-[300px] border rounded-md bg-muted/30 p-4">
                  <div className="text-sm prose-sm max-w-none prose-p:my-2 prose-p:leading-relaxed prose-headings:font-semibold prose-headings:text-foreground/90 prose-strong:font-semibold prose-strong:text-foreground/90 prose-code:text-foreground/70 prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:my-2 prose-pre:bg-muted/50 prose-pre:p-3 prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground">
                    {explanation}
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
