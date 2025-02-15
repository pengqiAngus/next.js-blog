const processProprietaryTerms = async (
  content: string,
  handleTermClick: Function,
  createEventHandlerName:Function) => {
  try {
    const response = await fetch("/api/proprietary-termHandler-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    const terms = JSON.parse(data.data);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // 为每个术语创建一个唯一的处理函数名称
    const handlerName = createEventHandlerName();

    // 将处理函数添加到 window 对象
    (window as any)[handlerName] = (term: string) => {
      handleTermClick(term);
    };

    const processTextNode = (textNode: Text) => {
      let content = textNode.textContent;
      let hasChanges = false;

      // 按长度排序术语，避免部分替换
      const sortedTerms = terms.sort((a, b) => b.length - a.length);

      for (const term of sortedTerms) {
        // 使用更精确的正则表达式，确保是完整的词
        const regex = new RegExp(`\\b${term.replace(/\./g, "\\.")}\\b`, "g");
        if (regex.test(content)) {
          content = content.replace(
            regex,
            `<span class="proprietary-term" style="position:relative;color: #2563eb; cursor: pointer; text-decoration: underline;" >${term}
                <span data-term="${term}" onclick="window.${handlerName}('${term}')" class="proprietary-term-tooltip" style="position: absolute; z-index:99 ;right: -70px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 4px; padding: 4px 10px; background-color: rgba(255, 255, 255, 0.95); border: 1px solid #e5e7eb; border-radius: 9999px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); font-size: 12px; color: #4b5563; transition: all 0.2s ease; opacity: 0; pointer-events: none;" onmouseover="this.style.backgroundColor='white'; this.style.color='#1f2937';" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.95)'; this.style.color='#4b5563';">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    explain
                </span>
              </span>
                <style>
    .proprietary-term:hover .proprietary-term-tooltip {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
  </style>
              `
          );
          hasChanges = true;
        }
      }

      if (hasChanges) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = content;

        // 替换原始节点
        const fragment = document.createDocumentFragment();
        while (wrapper.firstChild) {
          fragment.appendChild(wrapper.firstChild);
        }
        textNode.parentNode.replaceChild(fragment, textNode);
      }
    };

    // 递归处理所有文本节点
    const processNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        processTextNode(node as Text);
      } else {
        // 如果是元素节点，检查是否应该跳过
        const shouldSkip =
          node.nodeName === "SCRIPT" ||
          node.nodeName === "STYLE" ||
          node.nodeName === "CODE" ||
          (node as Element).classList?.contains("proprietary-term");

        if (!shouldSkip) {
          // 创建一个数组来存储子节点，因为在处理过程中节点列表会变化
          const childNodes = Array.from(node.childNodes);
          childNodes.forEach((childNode) => {
            processNode(childNode);
          });
        }
      }
    };

    processNode(tempDiv);
    return tempDiv.innerHTML;
  } catch (error) {
    console.error("Error processing content:", error);
    return content;
  }
};



export default processProprietaryTerms;
