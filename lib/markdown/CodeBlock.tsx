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