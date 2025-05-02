import React, { useState, useEffect } from 'react';
import '../index.css';
import emoji from 'react-easy-emoji';
import {MarkdownRenderer as Markdown} from './Markdown.js';
import ScoreFile from './scores/2025-05-02.md'

function Scores() {
  const [score, setScore] = useState('');
  
  useEffect(() => {
    fetch(ScoreFile)
      .then((response) => response.text())
      .then(score => setScore(score));
  },[]);

  return (
    <>
      <div className="scores">
            <Markdown>
              {emoji(score)}
            </Markdown>
      </div>
  </>
  ) 
}

export default Scores;