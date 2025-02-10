import '../index.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Scores() {
      const [storedScores, setStoredScores] = useState(sessionStorage.getItem("scores"));
  
      useEffect(() => {
          const url = "https://scores.nevarez.cloud/api/scores"
          
          const scores = async () => {
              await fetch(url, {
                  method: "GET",
                  headers: {
                  "Content-type": "*/*; charset=UTF-8",
                  "Access-Control-Allow-Origin": "https://scores.nevarez.cloud"
                  }
              });
              
              sessionStorage.setItem("scores",scores);
          };
  
          if (!storedscores) {
              view_scores().then(() => {
                setStoredScores(sessionStorage.getItem("scores"));
              });
          }
      }, [storedScores]);
  
  return (
    <>
      <div class="scores">
      {scores.map((data) => {
         return(
          <div class="score">
            <p>{data.score}</p>
          </div>
         )   
      })}
      </div>
  </>
  ) 
}

export default Scores;