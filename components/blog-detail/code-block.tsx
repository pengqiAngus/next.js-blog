import { useState } from 'react'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-6">
      {filename && (
        <div className="absolute top-0 left-4 -translate-y-1/2 bg-gray-200 dark:bg-zinc-800 px-3 py-1 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
          {filename}
        </div>
      )}
      
      <pre className="relative rounded-lg bg-gray-100 dark:bg-zinc-900 p-4 pt-6 overflow-x-auto text-sm font-mono border border-gray-200 dark:border-zinc-800 shadow-sm">
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-3 p-1.5 rounded-md bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ClipboardIcon className="h-4 w-4" />
          )}
        </button>
        <code className={`language-${language} tracking-wide leading-relaxed text-gray-800 dark:text-gray-200`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

