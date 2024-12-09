import { useSelector } from "react-redux";
import "./App.css";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import Privacy from "./components/Privacy";

function App() {
  // getting privacy value from store
  const privacy=useSelector((store)=>store.privacy)
  return (
    <center className="px-4 py-5 my-5 ">
      <Container>
      <Header></Header>
      <div className="col-lg-6 mx-auto">
        {!privacy ? <Content/>:<Privacy/>}
        <Buttons></Buttons>
      </div>
      </Container>
    </center>
  );
}

export default App;
