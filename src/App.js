import { useState } from 'react';
import './App.css';
import HabitInput from './Components/HabitInput';
import HabitList from './Components/HabitList';
import Header from './Components/Header';

function App() {
const [inputs,setInputs] =useState(()=>{
const save = localStorage.getItem('habits')
return save ? JSON.parse(save) : []
});


  const getData=(argu)=>{
    setInputs([...inputs,argu]);
  }
  return (
    <div className='bg-slate-700 pb-80'>
    <>
    <Header></Header>
    <HabitInput onSubmit={getData}></HabitInput>
    <HabitList data={inputs}></HabitList>
    </>
    </div>
  );

}

export default App;
