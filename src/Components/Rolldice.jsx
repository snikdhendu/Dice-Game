import React, { useState, useEffect } from 'react';

const Rolldice = ({ currentDice, currentDice2, roleDice, isRolling }) => {



  return (
    <div className='w-full h-96 flex items-center justify-center md:gap-5 sm:gap-5 gap-3 flex-col '>
      <div  className='md:h-64 md:w-1/3 w-11/12 cursor-pointer flex items-center  justify-center'>
        {isRolling ? (
          // Display your rolling GIF or animation here
          <div className=' md:w-full w-11/12 md:justify-between justify-around flex items-center '>
          <img className=' md:w-52 md:h-52 w-36 h-36' src="/images/dice-roll.gif" alt="Rolling Dice" />
          <img className='md:w-52 md:h-52 w-36 h-36' src="/images/dice-roll.gif" alt="Rolling Dice" />
          </div>

        ) : (
          // Display the dice image based on the currentDice state
          <div className=' md:w-full w-11/12 md:justify-between justify-around flex items-center '>
          <img className=' md:w-52 md:h-52 w-36 h-36' src={`/images/dice-${currentDice}.png`} alt={`Dice ${currentDice}`} />
          <img  className=' md:w-52 md:h-52 w-36 h-36'src={`/images/dice-${currentDice2}.png`} alt={`Dice ${currentDice2}`} />
          </div>

        )}





      </div>
      <div><button class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32" onClick={roleDice} >click</button></div>
    </div>
  );
};

export default Rolldice;
