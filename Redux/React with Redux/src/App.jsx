import "./App.css";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <center className="px-4 py-5 my-5 ">
      <Container>
      <Header></Header>
      <div className="col-lg-6 mx-auto">
        <Content></Content>
        <Buttons></Buttons>
      </div>
      </Container>
    </center>
  );
}

export default App;
