function Item1() {
  let todoName = "Buy Milk";
  let todoDate = "10/4/2023";
  return (
    <div class="container">
      <div class="row myRow">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger myButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item1;
