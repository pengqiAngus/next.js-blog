"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import processProprietaryTerms from "@/utils/proprietaryTermHandler";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import * as ScrollArea from "@/components/ui/scroll-area";
export function BlogContent({ content }: { content: string }) {
  const [processedContent, setProcessedContent] = useState("");

  const handleTermClick = useCallback(
    async (term: string) => {
      try {
        handleOpenDialog(term);
      } catch (error) {
        console.error("Error handling term click:", error);
      }
    },
    [content]
  );
  const createEventHandlerName = useCallback(() => {
    return `handleTerm_${Math.random().toString(36).substr(2, 9)}`;
  }, [content]);

  const dialogRef = useRef(null);

  const handleOpenDialog = (title: string) => {
    dialogRef.current?.setTitle(title);
    dialogRef.current?.openDialog();
  };

  useEffect(() => {
    const processContent = async () => {
      const processed = await processProprietaryTerms(
        content,
        handleTermClick,
        createEventHandlerName
      );
      setProcessedContent(processed);
    };
    processContent();
  }, [content]);

  return (
    <div>
      <ExplainDialog ref={dialogRef} />
      <div dangerouslySetInnerHTML={{ __html: processedContent || content }} />
    </div>
  );
}

const ExplainDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(true);
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    setTitle: (title: string) => setDialogTitle(title),
  }));
  useEffect(() => {
    startStreaming(dialogTitle, setExplanation, setLoading);
  }, [dialogTitle]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent className="DialogContent bg-white">
          <DialogTitle className="DialogTitle">{dialogTitle}</DialogTitle>
          {loading ? (
            <DialogDescription className="DialogDescription ">
              AI explaining ...
            </DialogDescription>
          ) : null}
          <ScrollArea.ScrollArea className="ScrollAreaRoot max-h-80 ">
            <div
              className="text 1"
              dangerouslySetInnerHTML={{
                __html: explanation.replace(/\*\*/g, ""),
              }}
            />
            <ScrollArea.ScrollBar
              className="ScrollAreaScrollbar"
              orientation="vertical"
            ></ScrollArea.ScrollBar>
          </ScrollArea.ScrollArea>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
});

const startStreaming = async (
  term: string,
  setExplanation: Function,
  setLoading:Function
) => {
  if (!term.trim()) return;
    setLoading(true);
  setExplanation("");

  try {
    const response = await fetch("/api/ai-explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ term }),
    });

    if (!response.ok) throw new Error("Stream request failed");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value);
      // 尝试在完整的行处进行格式化
      if (buffer.includes("\n")) {
        const formattedText = formatText(buffer);
          setExplanation(formattedText);
      }
    }
  } catch (error) {
    console.error("Streaming error:", error);
  } finally {
    setLoading(false);

  }
};

const formatText = (text) => {
  // 移除文本中的双星号
  text = text.replace(/\*\*/g, "");

  // 将文本按行分割
  const lines = text.split("\n");
  let formattedText = [];
  let currentSection = [];

  for (let line of lines) {
    const trimmedLine = line.trim();

    // 检查是否是主标题行（独立的一行，只包含标题和冒号）
    if (/^[^.:\n]+[：:][^a-zA-Z]*$/.test(trimmedLine)) {
      if (currentSection.length > 0) {
        formattedText.push(currentSection.join("\n"));
        currentSection = [];
      }
      currentSection.push(
        `<div class="text-lg font-bold mt-4 mb-2 text-gray-800">${trimmedLine}</div>`
      );
    }
    // 检查是否是数字编号开头的标题（短标题，后面直接跟冒号）
    else if (/^\d+\.\s+[^.:\n]+[：:][^a-zA-Z]*$/.test(trimmedLine)) {
      if (currentSection.length > 0) {
        formattedText.push(currentSection.join("\n"));
        currentSection = [];
      }
      const formattedLine = trimmedLine.replace(
        /^(\d+\.)(.*)$/,
        '<div class="ml-4 mt-2"><span class="font-bold">$1$2</span></div>'
      );
      currentSection.push(formattedLine);
    }
    // 检查是否是普通的数字编号行
    else if (/^\d+\./.test(trimmedLine)) {
      const formattedLine = trimmedLine.replace(
        /^(\d+\.)(.*)$/,
        '<div class="ml-4 mt-2"><span class="text-gray-700">$1</span>$2</div>'
      );
      currentSection.push(formattedLine);
    }
    // 检查是否是以破折号开头的列表项
    else if (/^-/.test(trimmedLine)) {
      const bulletText = trimmedLine.substring(1).trim();
      currentSection.push(
        `<div class="ml-6 mt-1 text-gray-600">• ${bulletText}</div>`
      );
    }
    // 普通文本行
    else if (trimmedLine) {
      currentSection.push(
        `<div class="ml-4 mt-1 text-gray-600">${trimmedLine}</div>`
      );
    }
  }

  if (currentSection.length > 0) {
    formattedText.push(currentSection.join("\n"));
  }

  return formattedText.join("\n");
};
