import React from 'react';
import './index.css';

function Projects() {
    const url = "https://function.nevarez.cloud/api/views"

    const [count, setCount] = useState(null);
   
    useEffect(() => {
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
            
            setCount(ordinal(await res.text()));
        };

        view_count();

    },[])

  return (
    <>
    <body>
        <div class="center">
            <h1 class="center">Projects</h1>
        </div>
    </body>
  </>
  ) 
}

export default Projects;