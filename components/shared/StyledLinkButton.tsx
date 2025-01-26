import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface StyledLinkButtonProps {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function StyledLinkButton({ href, children, icon }: StyledLinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-150 ease-in-out mb-6"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  )
}

