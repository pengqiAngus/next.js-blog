"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ToolDropMenu } from "@/components/common/toolsDropMenu";
import { useState } from "react";
import NavbarMenu from "@/components/ui/navbar-menu";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b text-foreground dark:text-white">
        <div className="container mx-auto  h-16 flex items-center justify-between relative z-10">
          <div className="fixed  inset-x-0 max-w-2xl mx-auto z-50 ">
            <NavbarMenu.Menu setActive={setActive}>
              <NavbarMenu.HoveredLink href="/">Home</NavbarMenu.HoveredLink>
              <NavbarMenu.MenuItem
                setActive={setActive}
                active={active}
                item="Posts"
              >
                <div className="  text-sm grid grid-cols-2  p-4">
                  <NavbarMenu.ProductItem
                    title="All"
                    href="/categories/all"
                    src="/image/frontend_online.jpg"
                    description="Browse all articles and content categories"
                  />
                  <NavbarMenu.ProductItem
                    title="React"
                    href="/categories/react"
                    src="/image/react.jpg"
                    description="Technical articles and best practices about React"
                  />
                  <NavbarMenu.ProductItem
                    title="Ai"
                    href="/categories/ai"
                    src="/image/ai.jpg"
                    description="Articles about artificial intelligence and machine learning"
                  />
                  <NavbarMenu.ProductItem
                    title="More"
                    href="/"
                    src="/image/cms.jpg"
                    description="find out more"
                  />
                </div>
              </NavbarMenu.MenuItem>
              <NavbarMenu.MenuItem
                setActive={setActive}
                active={active}
                item="Tools"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <NavbarMenu.HoveredLink href="/tool/excalidraw">
                    Excalidraw
                  </NavbarMenu.HoveredLink>
                </div>
              </NavbarMenu.MenuItem>
            </NavbarMenu.Menu>
          </div>
          <div className="flex-1 flex justify-end gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}
