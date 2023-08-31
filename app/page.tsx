"use client";
import { useEffect, useState } from "react";
import Box from "./components/Box";

const wininngCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("O");
  const [whoWins, setWhoWins] = useState("");
  const [oWins, setOWins] = useState(false);
  const [xWins, setXWins] = useState(false);

  useEffect(() => {
    wininngCombos.forEach((winningCombo) => {
      const Owins = winningCombo.every((cell) => cells[cell] === "O");
      const Xwins = winningCombo.every((cell) => cells[cell] === "X");

      if (Owins) {
        setWhoWins("O wins");
        setOWins(true);
      } else if (Xwins) {
        setWhoWins("X wins");
        setXWins(true);
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "" && !whoWins)) {
      setWhoWins("Draw !!");
    }
  }, [cells, whoWins]);

  return (
    <main className="container">
      {!whoWins && (
        <div className="turn">
          {`It is now `}
          <span className={go === "X" ? "X" : "O"}>{go}</span>
          {`'s turn`}
        </div>
      )}

      <div className="boxes">
        {cells.map((cell, index) => (
          <Box
            go={go}
            setGo={setGo}
            key={index}
            id={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            whoWins={whoWins}
          />
        ))}
      </div>

      <div className="winner" style={{ color: oWins ? "red" : "blue" }}>
        {whoWins}
      </div>
    </main>
  );
}
