import React, { useState } from 'react';
import './index.css';
import Link from 'next/link';

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

    const [storedCount, setStoredCount] = useState(() => {
        let count = sessionStorage.getItem("count");
        if (!count && !didViewCount) {
            didViewCount = true;
            (async () => {
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

                    const fetchedCount = ordinal(Number(await res.text()));
                    sessionStorage.setItem("count", fetchedCount);
                    setStoredCount(fetchedCount);
                } catch (error) {
                    console.error("Error fetching view count:", error);
                }
            })();
        }
        return count;
    });

    return (
    <>
    <div className="center">
        {storedCount && <h4>You are the {storedCount} visitor!</h4>}
        <h1>Ricardo Nevarez Jr</h1>
        <nav>
            <Link href='/resume'>Resume</Link> | <Link href='/projects'>Projects</Link> | <Link href='/scores'>NYT Game Scores</Link>
        </nav> 
    </div> 
    </>
  ) 
}

export default App;