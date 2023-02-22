import React, { useState } from 'react';
import JokeCard from './JokeCard';
const JOKES_LIST  = [
  {
    id: "m1",
    description: "Finest fish and veggies",
    
  },
  {
    id: "m2",
    description: "A german specialty!",
  },
  {
    id: "m3",
    description: "American, raw, meaty",
  },
  {
    id: "m4",
    description: "Healthy...and green...",
  },
];
const Jokes = () => {
  
  return (
    <div >
      <div className='font-bold text-lg '>Here Are some jokes for you!</div>
     
      {
        JOKES_LIST.map(joke=>(
          <JokeCard joke={joke} key={joke.id}/>
        ))
      }
         
        
      
    </div>
  )
}

export default Jokes;