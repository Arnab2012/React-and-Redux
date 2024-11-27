import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import Content from "./components/Content";
import Form from "./components/Form";

function App() {
  let [Flag, setFlag] = useState(false);
  let emailRef = useRef();
  let passwordRef = useRef();

  let handleButtonClick = (event, email, password) => {
    console.log(`${email} ${password}`);
    emailRef.current = email;
    passwordRef.current = password;
    // preventing default behaviour
    event.preventDefault();
    setFlag(true);
  };
  return (
    <>
      {Flag && <Content email={emailRef.current} password={passwordRef.current}></Content>}
      {!Flag && <Form onButtonClick={handleButtonClick} />}
    </>
  );
}

export default App;
