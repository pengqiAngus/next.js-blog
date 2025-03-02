"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useAtom } from "jotai";
import { themeState } from "@/utils/jotail";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw"))?.Excalidraw,
  {
    ssr: false,
  }
);
export default function ExcalidrawPage() {
  const themeStateText = useAtom(themeState);
  return (
    <div style={{ height: "500px" }}>
      <Excalidraw />
    </div>
  );
}
