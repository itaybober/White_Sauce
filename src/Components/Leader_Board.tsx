import React from "react";
import { Player } from "./Classes";

interface LeaderBoardProps {
  players: Player[];
}

const Leader_Board: React.FC<LeaderBoardProps> = ({ players }) => {
  // Sort the players array based on the _points field in descending order
  const sortedPlayers = [...players].sort((a, b) => b._points - a._points);

  return (
    <div>
      <ol>
        {sortedPlayers.map((player) => (
          <li key={player._playerID}>
            Player ID: {player._playerID}, Points: {player._points}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leader_Board;
