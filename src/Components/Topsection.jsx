import React from 'react';
import { useState } from 'react';



const Topsection = ({selectedNumber,setSelectedNumber,score,error}) => {

    const arrNumber = [2,3,4,5,6,7,8,9,10,11,12];
   
    console.log(selectedNumber)
    return (
        <div className='w-full md:h-52 sm:h-52 h-64  p-14 flex md:flex-row flex-col items-center justify-between'>
            <div className='md:text-4xl text-3xl text-slate-50'>Total Score : { score}</div>
            <div className='w-full md:w-1/2  h-auto flex justify-between items-center flex-col gap-4'>
                <h1 className=' md:text-xl sm:text-xl text-base mt-4 md:mt-0 sm:mt-0 text-red-600'>{error}</h1>
                <h1 className='md:text-3xl sm:text-3xl text-2xl  text-slate-50'>Choose Any Number : </h1>
                <div className='md:w-full w-80 flex-wrap h-auto flex justify-normal items-center button-con gap-2'>
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
