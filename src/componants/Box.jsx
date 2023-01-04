import React from 'react';

const Box = ({state, onClick}) => {
    return (
        <button onClick={onClick} className='text-3xl font-bold border-2 border-gray-800 h-32 w-32'>
           {state}
        </button>
    );
};

export default Box;