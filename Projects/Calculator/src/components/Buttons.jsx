import styles from "./Buttons.module.css";

function Buttons({buttons}) {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <button className={styles.myButton}>{button}</button>
      ))}
    </div>
  );
}
export default Buttons;
