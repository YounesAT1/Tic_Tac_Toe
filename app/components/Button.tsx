import { Dispatch, SetStateAction } from "react";

type resetGameProps = {
  setGo: Dispatch<SetStateAction<string>>;
  setCells: Dispatch<SetStateAction<string[]>>;
  setWhoWins: Dispatch<SetStateAction<string>>;
  setOWins: Dispatch<SetStateAction<boolean>>;
  setXWins: Dispatch<SetStateAction<boolean>>;
};

const Button = ({
  setCells,
  setGo,
  setWhoWins,
  setOWins,
  setXWins,
}: resetGameProps) => {
  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("O");
    setWhoWins("");
    setOWins(false);
    setXWins(false);
  };

  return (
    <button className="restart" onClick={resetGame}>
      Restart
    </button>
  );
};

export default Button;
