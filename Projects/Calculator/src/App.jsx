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
  return (
    <center className={styles.calculator}>
      <Display></Display>
      <Buttons buttons={buttons}></Buttons>
    </center>
  )
}

export default App
