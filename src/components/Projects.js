import '../index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import post from './posts/projects/2025-01-22-azure.md'
import CodeBlock from "./CodeBlock";

function Projects() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    fetch(post)
      .then((response) => response.text())
      .then(text => setText(text));
  },[]);
  
  return (
    <>
      <div>
            <h1 class="center">Projects</h1>
            <Markdown renderers={{ code: CodeBlock }}>
              {text}
            </Markdown>
      </div>
  </>
  ) 
}

export default Projects;