import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import useStore from "../../store/store";

const TaskList: React.FC= () => {
  const {todo, setTodo} = useStore();

  useEffect(()=> {
    const fetchData = async ()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json();
      setTodo(data.slice(0, 4))
    }
fetchData()
  },[])



  return (
    <ul>
    {todo.map((task) => (
      <TaskItem key={task.id} task={task} />
    ))}
  </ul>
  )
}

export default TaskList