import React, { useState, useEffect } from 'react';

const Rolldice = ({currentDice,roleDice,isRolling}) => {
  
 

  return (
    <div className='w-full h-96 flex items-center justify-center gap-5 flex-col'>
      <div onClick={roleDice} className='h-64 w-64 cursor-pointer'>
        {isRolling ? (
          // Display your rolling GIF or animation here
          <img src="/images/dice-roll.gif" alt="Rolling Dice" />
        ) : (
          // Display the dice image based on the currentDice state
          <img src={`/images/dice-${currentDice}.png`} alt={`Dice ${currentDice}`} />
        )}
      </div>
      <div><h1 className=' text-2xl text-stone-50'>Click on the dice to Roll</h1></div>
    </div>
  );
};

export default Rolldice;
