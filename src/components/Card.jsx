import React from 'react'

const Cards = ({num, title, desc}) => {
  return (
    <div className='shadow-2xl w-[350px] text-center p-[30px]'>
        <h1 className='text-[40px] font-[700] text-blue-700'>{num}</h1>
        <h3 className='text-[20px] font-[600] my-[20px]'>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Cards