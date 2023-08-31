import { Dispatch, SetStateAction } from "react";

type boxProps = {
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  id: number;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  whoWins: string;
};

const Box = ({ go, setGo, id, cells, setCells, cell, whoWins }: boxProps) => {
  const handleClick = () => {
    if (whoWins) {
      return;
    }
    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "O") {
        handleCellChange("O");
        setGo("X");
      } else if (go === "X") {
        handleCellChange("X");
        setGo("O");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let cellsCopy = [...cells];
    cellsCopy[id] = cellToChange;
    setCells(cellsCopy);
  };
  return (
    <div className="box" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "O" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Box;
