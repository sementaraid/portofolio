'use client';

import { ReactNode, useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import plaintext from 'highlight.js/lib/languages/plaintext'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/night-owl.css';

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)

interface HighlightProps {
  children: ReactNode
  language?: string
}
export const Highlight = ({ children, language = 'plaintext' }: HighlightProps) => {
  const highlightLanguage = language === 'html' ? 'xml' : language
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [])

  return (
    <pre>
      <code ref={codeRef} className={`hljs language-${highlightLanguage}`}>
        {children}
      </code>
    </pre>
  )
}
