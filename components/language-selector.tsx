"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const languageNames = {
  en: 'English',
  zh: '中文',
};

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  // 在组件挂载后再渲染内容，避免客户端和服务器端不一致
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = async (lang: string) => {
    // 切换i18next的语言
    await i18n.changeLanguage(lang);
    
    // 存储用户语言选择到本地存储
    localStorage.setItem('selectedLanguage', lang);
    
    // 使用更温和的方式应用语言变化，不刷新整个页面
    document.documentElement.lang = lang;
  }

  // 组件挂载时从本地存储获取用户语言选择
  React.useEffect(() => {
    if (!mounted) return;
    
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n, mounted]);

  // 如果组件未挂载，不渲染任何内容，避免hydration错误
  if (!mounted) {
    return <Button variant="ghost" size="icon">
      <Globe className="h-[1.2rem] w-[1.2rem]" />
    </Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">切换语言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
          onClick={() => changeLanguage("en")}
          className={i18n.language === "en" ? "bg-accent" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage("zh")}
          className={i18n.language === "zh" ? "bg-accent" : ""}
        >
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
