"use client";
import React from "react";
export default function ExcalidrawPage() {
  return (
    <div style={{ height: "750px" }}>
      {/* <Excalidraw /> */}
      <img
        src="/image/excalidraw.png"
              alt="excalidraw"
        className="object-cover  transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
