import React from 'react'
import { FaRegTrashAlt, FaPencilAlt  } from "react-icons/fa";
import { Todo } from '../../types/types';
import useStore from "../../store/store";

const TaskItem: React.FC <{task:Todo}>= ({task}) => {
const {updateTask, deleteTask} = useStore()

  return (
    <li>
    <div className="mt-7 ml-3 flex justify-between">
      <div className="inline-flex items-center gap-2">
        <div>
        <input
          type="checkbox"
          className="h-6 w-5  accent-violet-200  hover:accent-violet-200  border-0 rounded-md focus:ring-0"
          checked={task.completed}
          onChange={()=> updateTask(task.id)}
          
        />
        </div>
        
        <span className={`text-base leading-normal ${task.completed ? "line-through italic text-slate-400" : ""} max-w-xs text-ellipsis `}>{task.title}</span> 
      </div>

      <div className="flex gap-2">
        <button onClick={()=> deleteTask(task.id)} className="max-w-8 max-h-6 flex justify-center text-purple-700 hover:text-white hover:bg-purple-600 p-1 px-1 rounded">
        <FaRegTrashAlt/>
        </button>
        
      </div>
    </div>
  </li>
  )
}

export default TaskItem