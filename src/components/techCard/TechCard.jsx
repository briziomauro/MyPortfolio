import React from 'react'

const TechCard = ({ Icon, label }) => (
    <div className='flex justify-between items-center w-44 md:w-60 border-solid border-b-4 border border-white p-3 filter grayscale transition duration-300 ease-in-out hover:filter-none hover:bg-white hover:bg-opacity-15 hover:scale-105'>
        <Icon />
        <p className='text-white'>{label}</p>
    </div>
);

export default TechCard