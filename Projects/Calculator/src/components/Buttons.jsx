import styles from "./Buttons.module.css";

function Buttons({buttons,onButtonClick}) {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <button key={button} className={styles.myButton} onClick={()=>onButtonClick(button)}>{button}</button>
      ))}
    </div>
  );
}
export default Buttons;
