 "use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import translateAI from "@/utils/translateAI";
export function LanguageSelector() {
  const [language, setLanguage] = React.useState("en")

  const changeLanguage = (lang: string) => {
    // translateAI()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("zh")}>中文</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("es")}>Español</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
