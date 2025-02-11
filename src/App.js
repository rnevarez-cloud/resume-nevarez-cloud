import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Scores from './components/Scores';

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

function App() {

    const [storedCount, setStoredCount] = useState(sessionStorage.getItem("count"));
        
    const view_count = useCallback(async () => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
            "Content-type": "*/*; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://function.nevarez.cloud"
            }
        });
        
        const count = ordinal(await res.text());
        sessionStorage.setItem("count", count);
        setStoredCount(count);
    }, []);

    useEffect(() => {
        if (!storedCount) {
            view_count();
        }
    }, [storedCount, view_count]);

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
        <Route path="Scores" element={<Scores />} />
    </Routes>
    </>
  ) 
}

export default App;