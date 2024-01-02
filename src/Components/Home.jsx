import React from 'react';
import GameComponent from './GameComponent';
const Home = ({toggle}) => {
    
    return (
        <div class="bg-gradient-to-bl from-blue-900 to-black min-h-screen flex items-center justify-center overflow-hidden">
            <div className='flex flex-col h-4/5 justify-between w-1/2 items-center relative left-10 md:left-0'>
           
            <img src="./images/dice1.png" className=' md:max-w-full home-img' alt="" />
             <h1 class="game-heading text-6xl font-bold font-rubik-doodle-shadow">
                DICE GAME
            </h1>
            <button onClick={toggle} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10 mt-7 w-32">Play Now</button>
            <img src="./images/dice2.png" className=' md:max-w-full home-img' alt="" />
            </div>


            <GameComponent/>
        </div>
    );
}

export default Home;
