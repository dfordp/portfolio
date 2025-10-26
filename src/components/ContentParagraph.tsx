'use client'

interface ContentParagraphProps {
  children: React.ReactNode
  className?: string
}

export default function ContentParagraph({ children, className = '' }: ContentParagraphProps) {
  return (
    <p 
      className={`text-base sm:text-lg dark:text-white/70 text-black/70 leading-relaxed ${className}`}
      style={{ letterSpacing: '-0.02em' }}
    >
      {children}
    </p>
  )
}
