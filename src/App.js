import React from 'react';
import './index.css';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path='home' element={<Resume />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </>
      );
}

export default App;