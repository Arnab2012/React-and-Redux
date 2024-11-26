function Item2() {
  let todoName = "Go To College";
  let todoDate = "10/4/2023";
  return (
    <div className="container">
      <div className="row myRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger myButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item2;
