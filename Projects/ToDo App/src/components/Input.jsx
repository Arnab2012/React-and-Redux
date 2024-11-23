import styles from "./Input.module.css"

function Input() {
  return (
    <div class="container text-center">
      <div class="row myRow">
        <div class="col-6">
          <input type="text" className={styles["inputBox"]} placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" className={styles["inputBox"]}/>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success myButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
