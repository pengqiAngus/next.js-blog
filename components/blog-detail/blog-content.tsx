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
  DialogContent,
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

  // 添加代码块样式覆盖，确保它们显示正确的背景色
  useEffect(() => {
    // 在内容加载后应用额外的样式
    const applyCodeBlockStyles = () => {
      const codeBlocks = document.querySelectorAll('.highlight pre, .js-code-highlight pre');
      codeBlocks.forEach(pre => {
        // 确保背景色应用到所有代码块
        (pre as HTMLElement).style.backgroundColor = '#f8f8f8';
        (pre as HTMLElement).style.borderRadius = '0.5rem';
        (pre as HTMLElement).style.padding = '1rem';
        (pre as HTMLElement).style.overflow = 'auto';
        (pre as HTMLElement).style.border = '1px solid #e0e0e0';
        
        // 暗模式检测
        if (document.documentElement.classList.contains('dark')) {
          (pre as HTMLElement).style.backgroundColor = '#1e1e1e';
          (pre as HTMLElement).style.borderColor = '#333';
        }
        
        // 为代码添加样式
        const code = pre.querySelector('code');
        if (code) {
          (code as HTMLElement).style.fontFamily = 'Consolas, Monaco, Courier New, monospace';
          (code as HTMLElement).style.letterSpacing = '0.05em';
          (code as HTMLElement).style.lineHeight = '1.6';
          (code as HTMLElement).style.display = 'block';
        }
      });
    };
    
    // 内容加载后应用样式
    if (processedContent) {
      setTimeout(applyCodeBlockStyles, 0);
    }
  }, [processedContent]);

  return (
    <div className="blog-content">
      <ExplainDialog ref={dialogRef} />
      <style jsx global>{`
        .blog-content {
          line-height: 1.8;
        }
        
        .blog-content > div > * {
          margin-bottom: 1.5rem;
        }
        
        .blog-content p {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .blog-content h1, 
        .blog-content h2, 
        .blog-content h3, 
        .blog-content h4 {
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .blog-content ul, 
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        
        .blog-content li {
          margin: 0.75rem 0;
        }
        
        .blog-content li + li {
          margin-top: 0.75rem;
        }
        
        .highlight pre, .js-code-highlight pre {
          background-color: #f8f8f8 !important;
          border-radius: 0.5rem !important;
          padding: 1.25rem !important;
          margin: 1.5rem 0 !important;
          overflow-x: auto !important;
          border: 1px solid #e0e0e0 !important;
        }
        
        :global(.dark) .highlight pre, 
        :global(.dark) .js-code-highlight pre {
          background-color: #1e1e1e !important;
          border-color: #333 !important;
        }
        
        .highlight code, .js-code-highlight code {
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
          letter-spacing: 0.05em !important;
          line-height: 1.8 !important;
          display: block !important;
        }
        
        /* 适应术语提示的样式调整 */
        .proprietary-term {
          padding: 0 2px;
        }
        
        .proprietary-term-tooltip {
          margin-top: 8px !important;
        }
      `}</style>
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
        `<div class="text-lg font-bold mt-6 mb-3 text-gray-800">${trimmedLine}</div>`
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
        '<div class="ml-4 mt-4 mb-2"><span class="font-bold">$1$2</span></div>'
      );
      currentSection.push(formattedLine);
    }
    // 检查是否是普通的数字编号行
    else if (/^\d+\./.test(trimmedLine)) {
      const formattedLine = trimmedLine.replace(
        /^(\d+\.)(.*)$/,
        '<div class="ml-4 mt-3 mb-1"><span class="text-gray-700">$1</span>$2</div>'
      );
      currentSection.push(formattedLine);
    }
    // 检查是否是以破折号开头的列表项
    else if (/^-/.test(trimmedLine)) {
      const bulletText = trimmedLine.substring(1).trim();
      currentSection.push(
        `<div class="ml-6 mt-2 mb-2 text-gray-600">• ${bulletText}</div>`
      );
    }
    // 普通文本行
    else if (trimmedLine) {
      currentSection.push(
        `<div class="ml-4 mt-3 mb-3 text-gray-600 leading-relaxed">${trimmedLine}</div>`
      );
    }
  }

  if (currentSection.length > 0) {
    formattedText.push(currentSection.join("\n"));
  }

  return formattedText.join("\n");
};
