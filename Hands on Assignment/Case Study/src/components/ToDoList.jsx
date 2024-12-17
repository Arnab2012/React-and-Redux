import { useEffect } from "react";
import ToDoItems from "./ToDoItems";
import { useState } from "react";

const ToDoList = () => {
  //   const { postList, addPosts } = useContext(PostListContext);
  //   const [fetching, setFetching] = useState(false);
  const [tasks,setTasks]=useState([])

  useEffect(() => {
    // setFetching(true);
    // console.log("Fetching Start");

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/todos", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
    // console.log("Fetching Ended");
    return () => {
    
    };
  }, []);

  return tasks.map((task) => (
    <ToDoItems key={task.userId} id={task.id} title={task.title} completed={task.completed} />
  ))
  
};
export default ToDoList;
