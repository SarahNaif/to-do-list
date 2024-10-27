import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import useStore from "../../store/store";
import { MdRefresh } from "react-icons/md";

const TaskList: React.FC= () => {
  const {todo, setTodo} = useStore();
  const [filter, setFilter] = useState<string>("all");

  useEffect(()=> {
    const fetchData = async ()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json();
      setTodo(data.slice(0, 3))
      
    }
    const localData:string|null = localStorage.getItem('todo-storage');
    localData ? setTodo(JSON.parse(localData).state.todo) : fetchData()
      
  },[])

   const filterdTask = filter === "completed" ? todo.filter(task => task.completed) 
                         : filter === "pending" ? todo.filter(task => !task.completed) 
                         : todo;

  return (
    <>
    <div className="flex justify-end mt-7 mx-2 gap-2 text-xs">
      <button  onClick={() => setFilter("completed")} 
      className="py-1 px-2 bg-slate-100 text-slate-500 rounded-md ">Done</button>
       <button  onClick={() => setFilter("pending")} 
      className="py-1 px-2 bg-slate-100 text-slate-500 rounded-md ">Pending</button>
       <button  onClick={() => setFilter("all")} 
      className="py-1 px-2 bg-slate-100 text-slate-500 rounded-md ">All</button>
     
    </div>
      <ul>
        {filterdTask.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
  
      
    </>
  )
}

export default TaskList