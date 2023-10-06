import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Modal from "./components/Modal";
import { moves } from "./constants/index";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [score, setScore] = useState("0");
  const [open, setOpen] = useState("hidden");
  const [moveSelected, setMoveSelected] = useState();
  const [isSelected, setIsSelected] = useState(true);
  const [win, setWin] = useState();
  const [housePick, setHousePick] = useState();

  const arr = [0, 1, 2, 3, 4];
  let moveSel;
  let housePickMove;

  const toogleRules = () => {
    setOpen(open === "hidden" ? "flex" : "hidden");
  };

  function handleScore() {
    setScore(Number(score) + 1);
  }

  const handleSetMove = () => {
    setIsSelected(!isSelected);
  };

  const handleMove = (e) => {
    e.preventDefault();
    handleSetMove();
    moveSel = e.target;
    setMoveSelected(moveSel);
    const filtered = arr.filter((number) => number !== Number(moveSel.id));
    housePickMove = filtered[Math.floor(Math.random() * filtered.length)];
    setHousePick(housePickMove);
    handleWin(moves[moveSel.id].name);
  };

  /* 
  const filtered = arr.filter((number) => number !== Number(moveSelected.id));
  const housePickMove = filtered[Math.floor(Math.random() * filtered.length)]; */

  function handleWin(move) {
    switch (move) {
      case "scissors":
        if (
          moves[housePickMove].name === "paper" ||
          moves[housePickMove].name === "lizard"
        ) {
          setWin(true), handleScore();
        } else {
          setWin(false);
        }
        break;
      case "paper":
        if (
          moves[housePickMove].name === "rock" ||
          moves[housePickMove].name === "spock"
        ) {
          setWin(true), handleScore();
        } else {
          setWin(false);
        }
        break;
      case "rock":
        if (
          moves[housePickMove].name === "scissors" ||
          moves[housePickMove].name === "lizard"
        ) {
          setWin(true), handleScore();
        } else {
          setWin(false);
        }
        break;
      case "lizard":
        if (
          moves[housePickMove].name === "spock" ||
          moves[housePickMove].name === "paper"
        ) {
          setWin(true), handleScore();
        } else {
          setWin(false);
        }
        break;
      case "spock":
        if (
          moves[housePickMove].name === "scissors" ||
          moves[housePickMove].name === "rock"
        ) {
          setWin(true), handleScore();
        } else {
          setWin(false);
        }
        break;
    }
  }

  /* const [savedColor, setSavedColor] = useState(JSON.parse(localStorage.getItem('color')));
  const [color, setColor] = useState('');
    function handleInput(e) {
        e.preventDefault();
        setColor(e.target.value)
        saveAndLoadColor(e.target.value);
    }
    function saveAndLoadColor(color) {
      setSavedColor(color);
      localStorage.setItem('color', JSON.stringify(color));
    } */
  return (
    <BrowserRouter>
      <div className="relative h-full min-h-screen z-0 bg-gradient-to-b from-radial to-radialsoft">
        <Modal open={open} toogleRules={toogleRules} />
        <Header score={score} />
        <Game
          handleMove={handleMove}
          moveSel={moveSelected}
          isSelected={isSelected}
          handleSetMove={handleSetMove}
          housePickMove={housePick}
          win={win}
        />
        <Footer toogleRules={toogleRules} />
      </div>
    </BrowserRouter>
  );
}

export default App;
