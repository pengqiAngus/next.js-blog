"use client";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { themeState } from "@/utils/jotail";
import Image from "next/image";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";

export default function ExcalidrawPage() {
  const themeStateText = useAtom(themeState);
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
