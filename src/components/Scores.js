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
  },[scores])

  return (
    <>
      <div className="scores">
      {scores.map((data) => (
          <div key={data.game}>
            <br />
            <div className="center">
              <p>{data.puzzle}</p>
              <div id={data.game} className="score">
                {emoji(data.score)}
              </div>
            </div>
          </div>
      ))}
      </div>
  </>
  ) 
}

export default Scores;