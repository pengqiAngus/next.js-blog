"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAtom } from "jotai";
import { themeState, type themeStateType } from "@/utils/jotail";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
      const [, setThemeState] = useAtom(themeState);
 setThemeState(theme as themeStateType);
    const setThemeMode = (mode: themeStateType) => {
        setThemeState(mode);
        setTheme(mode);
    };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setThemeMode("light")}
          className={`cursor-pointer ${theme === 'light' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground' : ''}`}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setThemeMode("dark")}
          className={`cursor-pointer ${theme === 'dark' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground' : ''}`}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

