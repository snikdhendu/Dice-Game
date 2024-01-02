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
              <li><strong>Set Target:</strong> Choose a target number before rolling the dice.</li>
              <li><strong>Roll Dice:</strong> Click to roll the dice and get a random number (1-6).</li>
              <li><strong>Scoring:</strong>
                <ul>
                  <li>Add 10 points for a matched target.</li>
                  <li>Deduct 2 points for a missed target.</li>
                </ul>
              </li>
              <li><strong>Reset Score:</strong> Reset the score to zero with a button click.</li>
              <li><strong>Back:</strong> Return to the main menu or exit the game.</li>
            </ul>

          </p>
        </div>
      )}
    </div>
  );
};

export default GameComponent;
