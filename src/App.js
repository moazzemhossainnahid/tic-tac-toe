import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Box from './componants/Box';
const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let string = Array.from(gameState);
    string[index] = isXChance ? "X" : "O";
    setGameState(string);
    setIsXChance(!isXChance);
  }

  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      alert(`${winner} won the game!`);
    }

  }, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <h1 className='text-center text-3xl font-bold uppercase mt-10'>Welcome to Tic Tac Game - 2022</h1>
      <div className="board p-5 bg-slate-200 w-1/4 mx-auto mt-20">

        <div className=" mx-auto flex justify-between mb-6">
          <Box state={gameState[0]} onClick={() => onSquareClicked(0)} />
          <Box state={gameState[1]} onClick={() => onSquareClicked(1)} />
          <Box state={gameState[2]} onClick={() => onSquareClicked(2)} />
        </div>
        <div className=" mx-auto flex justify-between mb-6">
          <Box state={gameState[3]} onClick={() => onSquareClicked(3)} />
          <Box state={gameState[4]} onClick={() => onSquareClicked(4)} />
          <Box state={gameState[5]} onClick={() => onSquareClicked(5)} />
        </div>
        <div className="mx-auto flex justify-between">
          <Box state={gameState[6]} onClick={() => onSquareClicked(6)} />
          <Box state={gameState[7]} onClick={() => onSquareClicked(7)} />
          <Box state={gameState[8]} onClick={() => onSquareClicked(8)} />
        </div>

        <button className='px-3 py-3 bg-blue-600 rounded-lg text-white font-bold mt-5' onClick={() => setGameState(initialState)}>Reset Game</button>

      </div>

    </div>
  );
}

export default App;
