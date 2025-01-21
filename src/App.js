import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {
  return (
    <>
    <nav>
        <a href='Resume'>Resume</a> | 
        <a href='Projects'>Projects</a>
    </nav>  
    <Routes>
        <Route path="/" element={<Resume />} />
        <Route path='Resume' element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
    </Routes>
    </>
  ) 
}

export default App;