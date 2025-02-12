import '../index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {MarkdownRenderer as Markdown} from './Markdown.js';
import post from './posts/projects/2025-01-22-azure.md'

function Projects() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    fetch(post)
      .then((response) => response.text())
      .then(text => setText(text));
  },[]);
  
  return (
    <>
      <div className="blog">
            <h1 className="center">Projects</h1>
            <Markdown>
              {text}
            </Markdown>
      </div>
  </>
  ) 
}

export default Projects;