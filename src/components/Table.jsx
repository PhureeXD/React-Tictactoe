import { useState } from "react";

export default function Table({ squares, handleClick, isX, winner }) {
  const [hoverID, setHover] = useState(null);
  const [w, a, b, c] = winner || [];

  return (
    <div className="grid grid-cols-3">
      {squares.map((square, index) => (
        <button
          key={index}
          className="w-20 h-20 p-4 text-4xl font-bold border border-gray-300 bg-slate-100 hover:bg-gray-300 focus:outline-none"
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
        >
          {hoverID === index && !square && !winner && (
            <span className="opacity-40">{isX ? "X" : "O"}</span>
          )}
          {
            <span
              className={`${
                w &&
                (index === a || index === b || index === c) &&
                "text-red-500"
              }`}
            >
              {square}
            </span>
          }
        </button>
      ))}
    </div>
  );
}
