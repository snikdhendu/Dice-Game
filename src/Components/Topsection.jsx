import React from 'react';
import { useState } from 'react';



const Topsection = ({selectedNumber,setSelectedNumber,score,error}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
   
    console.log(selectedNumber)
    return (
        <div className='w-full h-52  p-14 flex items-center justify-between'>
            <div className='text-4xl text-slate-50'>Total Score : { score}</div>
            <div className='w-96 h-auto flex justify-between items-center flex-col gap-4'>
                <h1 className=' text-xl text-red-600'>{error}</h1>
                <h1 className='text-3xl text-slate-50'>Choose Any Number : </h1>
                <div className='w-96 h-auto flex justify-between items-center'>
                    {arrNumber.map((value, i) => (
                        <button
                            key={i}
                            onClick={() => {

                                setSelectedNumber(value);
                            }
                            }
                            className={`${value === selectedNumber
                                ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-slate-50'
                                : 'bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80'
                                }`}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topsection;
