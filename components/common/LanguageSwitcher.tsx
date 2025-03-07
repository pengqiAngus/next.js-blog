"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useEffect, useState } from 'react';

const languageNames = {
  en: 'English',
  zh: '中文',
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

    const switchLanguage = (newLocale: string) => {
    const currentPath = pathname || '/';
    localStorage.setItem('i18nextLng', newLocale);
    setCurrentLanguage(newLocale);
    router.push(currentPath);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Languages className="h-5 w-5" />
        <span className="sr-only">切换语言</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">切换语言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLanguage('en')}
          className={`cursor-pointer ${currentLanguage === 'en' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground' : ''}`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage('zh')}
          className={`cursor-pointer ${currentLanguage === 'zh' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground' : ''}`}
        >
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}