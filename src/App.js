import React, { useState, useEffect, useCallback } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Scores from './components/Scores';

let didViewCount = false;

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

    const [storedCount, setStoredCount] = useState(() => sessionStorage.getItem("count"));

    const view_count = useCallback(async () => {
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "https://function.nevarez.cloud"
                }
            });

            if (!res.ok) {
                console.error("Failed to fetch view count");
                return;
            }

            const count = ordinal(Number(await res.text()));
            sessionStorage.setItem("count", count);
            setStoredCount(count);
        } catch (error) {
            console.error("Error fetching view count:", error);
        }
    }, []);

    useEffect(() => {
        if (!didViewCount) {
            didViewCount = true;
            view_count();
        }
    }, [view_count]);

    return (
    <>
    <div className="center">
        {storedCount && <h4>You are the {storedCount} visitor!</h4>}
        <h1>Ricardo Nevarez Jr</h1>
        <nav>
            <a href='/'>Resume</a> | <a href='Projects'>Projects</a> | <a href='Scores'>NYT Game Scores</a>
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