import React from 'react'

const Button = ({dato}) => {
    return (
        <>
           <button className='bg-gray-400 text-blue-800 py-1 px-8 rounded-lg border-double border-4 border-indigo-200  hover:bg-blue-500 hover:text-blue-100 transition duration-300  mx-1'  >{dato}</button> 
        </>
    )
}

export default Button
