// third-party
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, ...others }: SyntaxHighlightProps) {
  return (
    <SyntaxHighlighter showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
}

interface SyntaxHighlightProps {
  children: React.ReactNode//string | string[]
}
