function ErrorMessage(props) {
  return <>{props.fooditems.length == 0 && <h3>There is no Food Items</h3>}</>;
}
export default ErrorMessage;
