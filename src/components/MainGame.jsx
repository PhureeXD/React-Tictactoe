import { useState } from "react";
import Table from "./Table";
import Check from "./Check";
import { GrPowerReset } from "react-icons/gr";

export default function MainGame() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);
  const [cnt, setCnt] = useState(0);

  function Reset() {
    setSquares(Array(9).fill(null));
    setCnt(0);
  }

  function handleClick(id) {
    const squares2 = squares;
    if (Check(squares) || squares[id]) {
      return;
    }
    squares2[id] = isX ? "X" : "O";
    setSquares(squares2);
    setX(!isX);
    setCnt(cnt + 1);
  }

  const winner = Check(squares); //! winner = [x,w1-w2-w3]
  let txt;
  if (winner) {
    txt = `Winner: ${winner[0]}`;
  } else {
    cnt === 9 ? (txt = "Draw!") : (txt = `Now : ${isX ? "X" : "O"}`);
  }

  return (
    <main className="flex flex-col items-center mt-8">
      <header className="mb-6 text-4xl font-bold text-center">{txt}</header>

      <Table
        squares={squares}
        handleClick={handleClick}
        isX={isX}
        winner={winner}
      />

      <footer className="flex justify-center">
        <button
          className={`w-full mt-4 font-bold text-white px-4 py-4 ${
            winner || cnt === 9 ? "bg-blue-600" : "bg-blue-500/70"
          } rounded-full hover:bg-blue-700 focus:outline-none`}
          onClick={() => Reset()}
        >
          <GrPowerReset />
        </button>
      </footer>
    </main>
  );
}
