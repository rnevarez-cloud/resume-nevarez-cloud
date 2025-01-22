import React, { useEffect } from 'react';
import '../index.css';
import Markdown from 'react-markdown';
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
      <div class="center">
            <h1 class="center">Projects</h1>
            <Markdown>{text}</Markdown>
      </div>
  </>
  ) 
}

export default Projects;