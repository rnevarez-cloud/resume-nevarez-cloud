import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import emoji from 'react-easy-emoji';

const url = "https://scores.nevarez.cloud/api/scores"

function Scores() {
  const [scores, setScores] = useState([]);

  const scoresReq = useCallback(async () => {
    const res = await fetch(url);
    setScores(await res.json());
  }, []);

  useEffect(() => {
    scoresReq()
  },[scoresReq])

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
              {emoji(data.score)}
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