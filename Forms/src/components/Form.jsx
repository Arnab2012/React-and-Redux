import { useRef } from "react";

function Form({ onButtonClick }) {
  // using useRef() hook
  let email = useRef();
  let password = useRef();

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" ref={email} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" ref={password} />
      </div>
      <button
        className="btn btn-primary"
        onClick={(event) =>
          onButtonClick(event,email.current.value, password.current.value)
        }
      >
        Submit
      </button>
    </form>
  );
}
export default Form;
