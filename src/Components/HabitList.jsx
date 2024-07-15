import React, { useState } from 'react';
import ProgressSummary from './ProgressSummary';
import { motion } from "framer-motion"

function HabitList({ data }) {
  const [complete, setComplete] = useState(Array(data.length).fill(false));

  const handleDone = (idx) => {
    const Com = [...complete];
    Com[idx] = !Com[idx];
    setComplete(Com);
  };
  
  const handleDelete = (idx) => {
    setComplete(complete.filter(complete => complete.idx !== idx));
  }
  const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

  return (
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <div className='text-center bg-slate-400 p-10 rounded-lg ml-40 mr-40'>
      {data.map((habit, idx) => (
        <motion.div className='flex justify-evenly' key={idx} variants={item}>
          <ul>
            <li className={complete[idx] ? 'line-through' : ''}>
              <b>{habit}</b>
            </li>
          </ul>
          <div>
          <button
            onClick={() => handleDone(idx)}
            className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Mark Done
          </button>
          <button onClick={()=>handleDelete(idx)} className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Delete</button>
          </div>
        </motion.div>
      ))}
      <ProgressSummary complete={complete} />
    </div> 
    </motion.ul>
  );
}

export default HabitList;