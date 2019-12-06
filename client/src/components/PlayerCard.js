import React from 'react';

const PlayerCard = props => {

  return (
    <div>
      <h3>Player Name: {props.name}</h3>
      <p>Country: {props.country}</p>
  <p>No. of Searches: {props.searches}</p>
    </div>
  )
}

export default PlayerCard;