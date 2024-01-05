import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const GameComponent = () => {
  const [isInstructionsVisible, setInstructionsVisible] = useState(false);

  const toggleInstructions = () => {
    setInstructionsVisible(!isInstructionsVisible);
  };

  return (
    <div className='relative bottom-72 md:left-40 left-10 z-10 border-3 w-20'>
      <div className="flex items-center justify-center">
        <button type="button" onClick={toggleInstructions} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">

          <FaQuestion />
        </button>
      </div>

      {isInstructionsVisible && (
        <div className="absolute top-full right-1 mt-2 bg-gray-200 p-2 rounded border border-gray-300 w-64">
          <h2 className="text-2xl font-bold mb-2">Rule</h2>
          <p className="text-gray-600">
            {/* Add your game instructions here */}
            <ul>
              <li><strong className=' font-bold'>Set Target:</strong> Choose a target number before rolling the dice.</li>
              <li><strong className=' font-bold'>Roll Dice:</strong> Click to roll two dice and get random numbers (1-6) each.</li>
              <li><strong className=' font-bold'>Scoring:</strong>
                <ul>
                  <li>Add 10 points for any other matched total.</li>
                  <li>Deduct 2 points for a missed total.</li>
                </ul>
              </li>
              <li><strong className=' font-bold'>Special Scoring:</strong>
                <ol>
                  <li>If the two dice have the same number and the total is 2 or 12, you will be given 20 points instead of 10. </li>
                  <li>If the two dice have the same number(eg:4+4=8), you will be given 15 points instead of 10.</li>
                </ol>
              </li>
              <li><strong className=' font-bold'>Reset Score:</strong> Reset the score to zero with a button click.</li>
              <li><strong className=' font-bold'>Back:</strong> Return to the main menu or exit the game.</li>
            </ul>

          </p>
        </div>
      )}
    </div>
  );
};

export default GameComponent;
