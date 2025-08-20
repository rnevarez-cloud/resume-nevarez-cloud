import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter/dist/esm';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from 'rehype-raw';

export function MarkdownRenderer({ children: markdown }) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ className, children, ...rest }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              style={dracula}
              {...rest}
            >
              {Array.isArray(children) ? children.join('') : String(children)}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}