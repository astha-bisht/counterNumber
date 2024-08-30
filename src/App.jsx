import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[count,setcount]=useState(15);



  const addValue=()=>{
    
    if(count==20)
    setcount(count=20);
  else setcount(count+1)
  
  }
  const deleteValue=()=>{
    if(count==0)
      setcount(count=0);
    else setcount(count-1)
    
  
  }
  const batchValue=()=>{
    setcount(count+1);
    setcount(count+1);
    setcount(count+1);
   
  }
  const nobatchValue=()=>{
    setcount(coun=>coun+1);
    setcount(coun=>coun+1);
    setcount(coun=>coun+1);
   
  }

  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={addValue}>Add Values</button>
      <br/>
      <button onClick={deleteValue}>Remove Values</button>
      <br/>
      <button onClick={batchValue}>batch Values</button>
      <br/>
      <button onClick={nobatchValue}>withoutbatch Values</button>
    </>
  )
}

export default App
