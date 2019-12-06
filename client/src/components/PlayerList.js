import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = props => {

  return (
    <div>
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