import React from 'react'

const JokeCard = ({joke}) => {
  return (
    <div className='w-1/2 h-20 m-3 p-3 justify-items-center bg-blue-100 shadow-lg'>{joke.description}</div>
  )
}

export default JokeCard;