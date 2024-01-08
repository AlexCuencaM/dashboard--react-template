// third-party
import { FC } from 'react';
import {Prism, SyntaxHighlighterProps} from 'react-syntax-highlighter';
const SyntaxHighlighter = (Prism as any) as FC<SyntaxHighlighterProps>;
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
  children: string | string[];
}
