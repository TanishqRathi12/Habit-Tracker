import { useEffect, useState } from 'react';
import './App.css';
import HabitInput from './Components/HabitInput';
import HabitList from './Components/HabitList';
import Header from './Components/Header';

function App() {
const [inputs,setInputs] =useState(()=>{
const save = localStorage.getItem('inputs')
return save ? JSON.parse(save) : []
});

  const getData=(argu)=>{
    setInputs([...inputs,argu]);
  }
  useEffect(()=>{
    localStorage.setItem('inputs',JSON.stringify(inputs))
  },[inputs])
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
