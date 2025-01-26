interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <pre className="relative rounded-lg bg-zinc-900 p-4">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}

