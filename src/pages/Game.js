 import React, { useState } from 'react';

function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundResult, setRoundResult] = useState(null);

  const getComputerChoice = () => {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const startGame = () => {
    setIsPlaying(true);
    setPlayerScore(0);
    setComputerScore(0);
    setRoundResult(null);
  };

  const handleChoice = (choice) => {
    const computerChoice = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    // Lógica para determinar el resultado
    if (choice === computerChoice) {
      setRoundResult('Empate');
    } else if (
      (choice === 'piedra' && computerChoice === 'tijera') ||
      (choice === 'papel' && computerChoice === 'piedra') ||
      (choice === 'tijera' && computerChoice === 'papel')
    ) {
      setRoundResult('Ganaste!');
      setPlayerScore(playerScore + 1);
    } else {
      setRoundResult('Perdiste!');
      setComputerScore(computerScore + 1);
    }
  };

  const exitGame = () => {
    setIsPlaying(false);
    setPlayerChoice(null);
    setComputerChoice(null);
    setRoundResult(null);
  };

  return (
    <div>
      <h1>Piedra, Papel o Tijera</h1>
      {!isPlaying ? (
        <button onClick={startGame}>Start</button>
      ) : (
        <>
          <div>
            <h2>Puntaje</h2>
            <p>Jugador: {playerScore}</p>
            <p>Computadora: {computerScore}</p>
          </div>
          <div>
            <button onClick={() => handleChoice('piedra')}>Piedra</button>
            <button onClick={() => handleChoice('papel')}>Papel</button>
            <button onClick={() => handleChoice('tijera')}>Tijera</button>
          </div>
          <div>
            <h2>Resultado: {roundResult}</h2>
          </div>
          <button onClick={exitGame}>Salir</button>
        </>
      )}
    </div>
  );
}

export default Game;
