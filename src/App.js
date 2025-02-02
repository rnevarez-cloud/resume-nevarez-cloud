import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {

    const [storedCount, setStoredCount] = useState(sessionStorage.getItem("count"));

    useEffect(() => {
        const url = "https://function.nevarez.cloud/api/views"

        const english_ordinal_rules = new Intl.PluralRules("en", {type: "ordinal"});
        const suffixes = {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th"
        };
        
        function ordinal(number) {
            const category = english_ordinal_rules.select(number);
            const suffix = suffixes[category];
            return (number + suffix);
        }
        
        const view_count = async () => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-type": "*/*; charset=UTF-8",
                "Access-Control-Allow-Origin": "https://function.nevarez.cloud"
                }
            });
            
            sessionStorage.setItem("count",ordinal(await res.text()));
        };

        if (!storedCount) {
            view_count().then(() => {
                setStoredCount(sessionStorage.getItem("count"));
            });
        }
    }, [storedCount]);

    return (
    <>
    <div class="center">
        {storedCount && <h4>You are the {storedCount} visitor!</h4>}
        <h1>Ricardo Nevarez Jr</h1>
        <nav>
            <a href='/'>Resume</a> | <a href='Projects'>Projects</a>
        </nav> 
    </div> 
    <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
    </Routes>
    </>
  ) 
}

export default App;