"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";
import { useState } from "react";
import NavbarMenu from "@/components/ui/navbar-menu";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b text-foreground dark:text-white">
        <div className="container mx-auto  h-16 flex items-center justify-between relative z-10">
          <div className="fixed  inset-x-0 max-w-2xl mx-auto z-50 ">
            <NavbarMenu.Menu setActive={setActive}>
              <NavbarMenu.HoveredLink href="/">{t('header.home')}</NavbarMenu.HoveredLink>
              <NavbarMenu.MenuItem
                setActive={setActive}
                active={active}
                item={t('header.posts')}
              >
                <div className="  text-sm grid grid-cols-2  p-4">
                  <NavbarMenu.ProductItem
                    title={t('header.all')}
                    href="/categories/all"
                    src="/image/frontend_online.jpg"
                    description={t('header.allDescription')}
                  />
                  <NavbarMenu.ProductItem
                    title={t('header.react')}
                    href="/categories/react"
                    src="/image/react.jpg"
                    description={t('header.reactDescription')}
                  />
                  <NavbarMenu.ProductItem
                    title={t('header.ai')}
                    href="/categories/ai"
                    src="/image/ai.jpg"
                    description={t('header.aiDescription')}
                  />
                  <NavbarMenu.ProductItem
                    title={t('header.more')}
                    href="/"
                    src="/image/cms.jpg"
                    description={t('header.moreDescription')}
                  />
                </div>
              </NavbarMenu.MenuItem>
              <NavbarMenu.MenuItem
                setActive={setActive}
                active={active}
                item={t('header.tools')}
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <NavbarMenu.HoveredLink href="/tool/excalidraw">
                    {t('header.excalidraw')}
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
