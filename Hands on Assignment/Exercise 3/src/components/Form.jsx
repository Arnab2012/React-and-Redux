import { useRef } from "react";

const Form = () => {
  const nameElement = useRef();
  const ageElement = useRef();
  const technologyElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameElement.current.value;
    const age = ageElement.current.value;
    const technology = technologyElement.current.value;

    // check conditions
    if (!name.trim()) {
      alert("Please enter user name");
      return;
    }
    if (!age.trim()) {
      alert("Please enter age");
      return;
    }
    if (isNaN(age)) {
      alert("Your age must be a number");
      return;
    }
    alert(`${name} ${age} ${technology}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter your name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Test"
          ref={nameElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Enter your age:
        </label>
        <input
          type="text"
          className="form-control"
          id="age"
          ref={ageElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="technology" className="form-label">
          Enter your Technology:
        </label>
        <select
          id="technology"
          className="form-select"
          required
          ref={technologyElement}
        >
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
