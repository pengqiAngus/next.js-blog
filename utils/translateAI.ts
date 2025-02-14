export default async () => {
     const textNodes = [];
     const walk = document.createTreeWalker(
       document.body,
       NodeFilter.SHOW_TEXT,
       {
         acceptNode: (node) => {
           // Skip script and style contents
           if (
             node.parentElement?.tagName === "SCRIPT" ||
             node.parentElement?.tagName === "STYLE"
           ) {
             return NodeFilter.FILTER_REJECT;
           }
           return node.textContent.trim()
             ? NodeFilter.FILTER_ACCEPT
             : NodeFilter.FILTER_REJECT;
         },
       }
     );

     while (walk.nextNode()) {
       const node = walk.currentNode;
       if (node.textContent.trim()) {
         textNodes.push(node);
       }
     }

     // Translate in batches to avoid overwhelming the API
     const batchSize = 50;
     for (let i = 0; i < textNodes.length; i += batchSize) {
       const batch = textNodes.slice(i, i + batchSize);
       await Promise.all(
         batch.map(async (node) => {
           const originalText = node.textContent.trim();
           if (originalText) {
             try {
               const translatedText = await translateText(originalText);
               node.textContent = translatedText;
             } catch (error) {
               console.error(
                 "Translation failed for text:",
                 originalText,
                 error
               );
             }
           }
         })
       );
     }
}

const translateText = async (text) => {
    try {
      console.log();
      
    // 调用后端 API
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Translation failed");
    }

    return data.translatedText;
  } catch (err) {
    console.error("Translation error:", err);
    throw err;
  }
};

