import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = props => {

  return (
    <div>
      <h2>..And here they are!</h2>
      {props.players.map(player => 
        <PlayerCard 
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      )}
    </div>
  )
}

export default PlayerList;