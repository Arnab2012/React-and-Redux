import { useState } from 'react';
import styles from './App.module.css'
import Buttons from './components/Buttons'
import Display from './components/Display'

function App() {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  // for adding the values in display
  let [value,setValue]=useState();

  let onButtonClick=(button)=>{
    if(button==='='){
      setValue(eval(value));
    }
    else if(button==='C'){
      setValue('');
    }
    else{
      setValue((prevValue) => prevValue + button);
    }
  }
  return (
    <center className={styles.calculator}>
      <Display value={value}></Display>
      <Buttons buttons={buttons} onButtonClick={onButtonClick}></Buttons>
    </center>
  )
}

export default App