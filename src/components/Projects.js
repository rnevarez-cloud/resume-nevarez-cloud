import React from 'react';
import '../index.css';
import Markdown from 'react-markdown';
import post from './posts/projects/2025-01-22-azure.md'

function Projects() {
  const text = fetch(post)
  .then(response => response.text())
  
  return (
    <>
      <div class="center">
            <h1 class="center">Projects</h1>
            <Markdown>{text}</Markdown>
      </div>
  </>
  ) 
}

export default Projects;