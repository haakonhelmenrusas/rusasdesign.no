/*
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import React from 'react';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);

interface Props {
  className?: string;
  children: React.ReactNode;
}

const CodeBlock = ({ className, children }: Props) => {
  const language = className?.replace('language-', '') || '';

  const codeString = React.Children.toArray(children)
    .map(child =>
      typeof child === 'string'
        ? child
        : React.isValidElement(child)
          // @ts-ignore
          ? String(child.props.children)
          : ''
    )
    .join('');

  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        padding: '1em',
        marginBottom: '2em',
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
*/
'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/button/Button';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const highlightCode = (code: string, lang: string) => {
    // Simple syntax highlighting for common languages
    let highlighted = code;

    if (lang === 'javascript' || lang === 'typescript' || lang === 'tsx') {
      // Keywords
      highlighted = highlighted.replace(
        /\b(const|let|var|function|class|if|else|for|while|return|import|export|from|interface|type|extends|implements)\b/g,
        '<span style="color: var(--code-keyword)">$1</span>',
      );

      // Strings
      highlighted = highlighted.replace(
        /(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: var(--code-string)">$1$2$1</span>',
      );

      // Comments
      highlighted = highlighted.replace(
        /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
        '<span style="color: var(--code-comment)">$1</span>',
      );

      // Numbers
      highlighted = highlighted.replace(
        /\b(\d+\.?\d*)\b/g,
        '<span style="color: var(--code-number)">$1</span>',
      );

      // Functions
      highlighted = highlighted.replace(
        /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
        '<span style="color: var(--code-function)">$1</span>(',
      );
    }

    if (lang === 'css') {
      // CSS properties
      highlighted = highlighted.replace(
        /([a-zA-Z-]+)(\s*:)/g,
        '<span style="color: var(--code-keyword)">$1</span>$2',
      );

      // CSS values
      highlighted = highlighted.replace(
        /(:\s*)([^;{}\n]+)/g,
        '$1<span style="color: var(--code-string)">$2</span>',
      );

      // Selectors
      highlighted = highlighted.replace(
        /^(\s*)([.#]?[a-zA-Z-_][a-zA-Z0-9-_]*)/gm,
        '$1<span style="color: var(--code-function)">$2</span>',
      );
    }

    return highlighted;
  };

  return (
    <div className="relative group content-spacing bg-card border border-border">
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 bg-muted/80 hover:bg-accent"
        >
          {copied ? (
            <Check className="h-4 w-4 text-accent" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div
        className="p-6 rounded-lg overflow-x-auto"
        style={{
          backgroundColor: 'var(--code-bg)',
          color: 'var(--code-text)',
        }}
      >
        <pre className="text-sm">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{
              __html: highlightCode(children, language),
            }}
          />
        </pre>
      </div>
    </div>
  );
};