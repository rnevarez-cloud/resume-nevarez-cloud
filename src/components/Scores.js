import React from 'react';
import Markdown from 'react-markdown';
import emoji from 'react-easy-emoji';

export function MarkdownRenderer({ children: markdown }) {
  return (
    <Markdown>
      {emoji(markdown)}
    </Markdown>
  );
}