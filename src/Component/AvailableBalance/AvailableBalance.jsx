import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailableBalance = ({ fetchPlayers }) => {
  let players = use(fetchPlayers);

  return (
    <div className="container mx-auto mt-4 justify-items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player}></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableBalance;
