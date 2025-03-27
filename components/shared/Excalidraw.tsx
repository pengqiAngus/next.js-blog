"use client";
import React from "react";
import dynamic from "next/dynamic";
import { themeState } from "@/utils/jotail";
import { useAtom } from "jotai";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);

export default function ExcalidrawPage() {
  const [state, setThemeState] = useAtom(themeState);
  console.log("state", state);
  return (
    <div style={{ height: "750px" }}>
      <Excalidraw theme={state} />
      {/* <img
        src="/image/excalidraw.png"
              alt="excalidraw"
        className="object-cover  transition-transform duration-300 group-hover:scale-105"
      /> */}
    </div>
  );
}
