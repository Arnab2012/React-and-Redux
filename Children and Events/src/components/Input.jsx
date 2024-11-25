import styles from "./Input.module.css";
function Input({ changeOnInput, changeOnKeyDown }) {
  //   let changeOnInput = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.display}
      onChange={(e) => changeOnInput(e)}
      onKeyDown={(e) => changeOnKeyDown(e)}
    />
  );
}
export default Input;
