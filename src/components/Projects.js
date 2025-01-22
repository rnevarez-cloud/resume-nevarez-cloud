import React from 'react';
import '../index.css';
import Markdown from 'react-markdown';
import post from './posts/projects/2025-01-22-azure.md'

function Projects() {
  return (
    <>
      <div class="center">
            <h1 class="center">Projects</h1>
            <Markdown>{post}</Markdown>
      </div>
  </>
  ) 
}

export default Projects;