import styles from "./container.module.css";
function Container(props) {
  return (
    <div className={styles.container}>
      {/* passing children */}
      {props.children}
    </div>
  );
}
export default Container;
