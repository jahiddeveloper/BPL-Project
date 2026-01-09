import React, { useState } from "react";
import me from "../../assets/me.png";
import flag from "../../assets/flag.png";

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {

  let [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl hover:transition duration-300">
      <figure>
        <img
          className="h-60 w-full object-cover"
          src={player.img}
          alt="Player image"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <img className="h-6 w-6" src={me} alt="Me image" />
          <h2 className="card-title ml-2">{player.name}</h2>
        </div>
        <div className="border-b-2 border-gray-200">
          <div className="mt-3 flex justify-between items-center pb-3">
            <div className="flex items-center">
              <img src={flag} alt="flag image" />
              <p className="text-[#1313138f] ml-3">{player.country}</p>
            </div>
            <div>
              <h4 className="px-5 py-3 bg-gray-100 font-semibold rounded-sm">
                {player.role}
              </h4>
            </div>
          </div>
        </div>
        <h3 className="mt-3 font-bold">Rating : {player.rating}</h3>
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Bat : {player.bat}</h3>
          <h3 className="font-semibold text-gray-500">Ball : {player.ball}</h3>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="font-bold">Price : {player.price}</h3>
          <button disabled={isSelected} onClick={() => {
            setIsSelected(true)
            setAvailableBalance(availableBalance - player.price)
          }} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
