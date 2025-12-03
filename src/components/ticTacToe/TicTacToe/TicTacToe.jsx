import "./TicTacToe.css";
import ResetButton from "../ResetButton/ResetButton";
import TicTacToeBoard from "../SketchBoard/TicTacToeBoard";
import WhosTearn from "../WhosTearn/WhosTearn";
import React, { useEffect, useState } from "react";
import Winner from "../Winner/Winner";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components";
import {Search} from "lucide-react";

const TicTacToe = () => {
  const [tearn, setTurn] = useState("x");
  const [winner, setWinner] = useState("");
  const [isDraw, setDraw] = useState(false);
  const [isResetRequested, setResetRequested] = useState(false);

  const handleTurnChange = (currentTurn) => {
    setTurn(currentTurn === "x" ? "o" : "x");
  };

  useEffect(() => {
    if (isResetRequested) {
      setWinner("");
      setTurn("x");
      setResetRequested(false);
    }
  }, [isResetRequested]);

  return (
      <>
          <div id="window-header">
          <WindowControls target="ticTacToe"/>
              <h2 className="title">Tic Tac Toe</h2>
          </div>
          <div className="bg-black flex h-full rounded-bl-2xl rounded-br-2xl">
              <div className="toc-tac-toe-container">
                  <strong className="subHeading text-amber-50">Welcome to</strong>
                  <div>
                      <strong className="heading text-amber-50">TicTacToe</strong>
                  </div>
                  <div className="board">
                      <TicTacToeBoard
                          onTurnChange={handleTurnChange}
                          setWinner={setWinner}
                          isResetRequested={isResetRequested}
                          currentTurn={tearn}
                          setDraw={setDraw}
                      />
                  </div>
                  {isDraw ? (
                      "It's a Draw!"
                  ) : winner === "" ? (
                      <WhosTearn playar={tearn} />
                  ) : (
                      <Winner playar={winner} />
                  )}
                  <ResetButton onClick={() => setResetRequested(true)} />
              </div>
          </div>
      </>

  );
};

const TocTacToeWindow = WindowWrapper(TicTacToe, 'ticTacToe')
export default TocTacToeWindow;
