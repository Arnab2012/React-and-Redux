import { useRef } from "react";

const Form = () => {
  const idElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = idElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;

    console.log(`User Id: ${id}, Title: ${title}, Body: ${body}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id:
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={idElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body:
          </label>
          <input
            type="text"
            className="form-control"
            id="body"
            ref={bodyElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
