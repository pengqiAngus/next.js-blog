"use client";
import React, { useEffect, useState, useCallback } from "react";
import processProprietaryTerms from "@/utils/proprietaryTermHandler";
export function BlogContent({ content }: { content: string }) {
  const [processedContent, setProcessedContent] = useState("");
  const handleTermClick = useCallback(async (term: string,) => {
    try {
      console.log(`Processing term`, term);
    } catch (error) {
      console.error("Error handling term click:", error);
    }
  }, []);
  const createEventHandlerName = useCallback(() => {
    return `handleTerm_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

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
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />
    </div>
  );
}
