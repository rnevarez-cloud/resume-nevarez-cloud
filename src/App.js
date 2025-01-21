import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Resume />} />
        <Route path='Resume' element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
    </Routes>
    <nav><a href='/Resume/'>Resume</a> | <a href='/Projects/'>Projects</a></nav>
  </>
  ) 
}

export default App;