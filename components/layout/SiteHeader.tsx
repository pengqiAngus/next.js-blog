"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ToolDropMenu } from "@/components/common/toolsDropMenu";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/components/ui/navbar-menu";

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b text-foreground dark:text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
          <div className="fixed  inset-x-0 max-w-2xl mx-auto z-50 top-2">
            <Menu setActive={setActive}>
              <HoveredLink href="/">Home</HoveredLink>
              <MenuItem setActive={setActive} active={active} item="Posts">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="All"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="React"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Ai"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Tools"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Tools">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/tool/excalidraw">Excalidraw</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex-1 flex justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}
