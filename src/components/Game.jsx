import React from "react";
import { moves } from "../constants";
import { triangle, pentagon } from "../assets/icons";
import Token from "./Token";
import Button from "./Button";
import Result from "./Result";

function Game({
  handleMove,
  moveSel,
  isSelected,
  handleSetMove,
  housePickMove,
  win,
}) {
  return isSelected ? (
    <>
      <img
        className="absolute w-60 left-2/4 -translate-x-2/4 mt-24"
        src={pentagon}
        alt="triangle"
      />

      {moves.map((move) => (
        <Token
          isSelected={isSelected}
          move={move}
          handleMove={handleMove}
          key={move.id}
        />
      ))}
    </>
  ) : (
    <>
      <Result moveSel={moveSel} housePickMove={housePickMove} moves={moves} />
      <Button win={win} handleSetMove={handleSetMove} />
    </>
  );
}

export default Game;
