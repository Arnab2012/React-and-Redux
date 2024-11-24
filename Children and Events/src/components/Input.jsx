import styles from "./Input.module.css";
function Input() {
  let changeOnInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.display}
      onChange={(e) => changeOnInput(e)}
    />
  );
}
export default Input;
