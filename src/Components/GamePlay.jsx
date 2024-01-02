import React, { useState,useEffect } from 'react';
import Topsection from './Topsection';
import Rolldice from './Rolldice';


const GamePlay = ({toggle}) => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [error,setError]=useState("")

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    setError("");
    if (!isRolling && selectedNumber) {
      setIsRolling(true);

      const rollTime = 1000; // Adjust this time based on your GIF or animation duration
      const randomNumber = generateRandom(1, 7);

      // Play dice roll sound
      const audio = new Audio('/sounds/dice-roll.mp3');
      const win_audio=new Audio('/sounds/correct.mp3');
      const loose_audio=new Audio('/sounds/wrong.mp3');
      audio.play();

      setTimeout(() => {
        setCurrentDice(randomNumber);
        setIsRolling(false);

        if (selectedNumber === randomNumber) {
          setScore((prev) => prev + 10);
          win_audio.play();

        } else {
          setScore((prev) => prev - 2);
          loose_audio.play();
        }
        setSelectedNumber(undefined);
      }, rollTime);
      
    }
    else{
      setError("Give an input before Roll the Dice");
      return ;
    }
  };


  return (
    <div className='bg-gradient-to-bl from-blue-900 to-black min-h-screen flex items-center flex-col overflow-hidden'>
    <Topsection selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} error={error} setError={setError}/>
    <Rolldice currentDice={currentDice} roleDice={roleDice} isRolling={isRolling} />
    <div className=' w-fit '>
      <div className=' w-96 h-auto flex gap-5 items-center justify-center'>
      <button onClick={()=>setScore(0)} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10 w-32">Reset Score</button>
      <button onClick={toggle}class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10  w-32">Back</button>
      </div>
    </div>
    </div>
  );
};

export default GamePlay;
