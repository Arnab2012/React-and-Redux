import "./App.css";
import Container from "./components/Container";
import ToDoItems from "./components/ToDoItems";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <div>Case Study</div>
      <ToDoList></ToDoList>
      <Container>
        <ToDoItems></ToDoItems>
      </Container>
    </>
  );
}

export default App;
