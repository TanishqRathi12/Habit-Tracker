import React, { useState } from 'react'

function HabitInput(props) {
    const [habit,setHabit] = useState('')
    let handleChange=(e)=>{
        setHabit(e.target.value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit(habit);
        setHabit('')
    }
  return (
    <div className=' bg-white rounded-lg m-10' >
        <div className='p-10'>
        <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-10'>
        <input required type="text" onChange={handleChange} value={habit} className=' col-start-4 c col-end-8 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6'  name='Add' placeholder='Enter your habit..' />
        <input type="submit" value="Add"  className='grid col-start-8 col-end-10 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  text-center align-middle'/>
        </form>
        </div>
    </div>
  )
}

export default HabitInput
