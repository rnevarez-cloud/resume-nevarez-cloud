import '../index.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    scoresReq()
  },[])

  const url = "https://scores.nevarez.cloud/api/scores"
      
  const scoresReq = async () => {
    const res = await fetch(url);  
    setScores(await res.json());
  }  
  
  return (
    <>
      <div class="scores">
      {scores.map((data) => {
         return(
          <>
          <br />
          <div class="center">
            <p>{data.puzzle}</p>
            <div class="score">
              {data.score}
            </div>
          </div>
          </>
         )   
      })}
      </div>
  </>
  ) 
}

export default Scores;