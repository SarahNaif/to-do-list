import React, { FormEvent, useState } from 'react'
import useStore from '../../store/store'
import {z} from 'zod'
import { MdError } from "react-icons/md";



const TaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [error , setError] = useState<string>("")
  const addTask = useStore((state) => state.addTask)

  const todoSchema = z.object({
    task: z.string().min(1, { message: 'Task can not be empty. Please add a task.' }), 
  });
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      todoSchema.parse({task: title.trim()})
      addTask(title.trim())
      setTitle('')
      setError('')
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
   

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=" rounded-md ">
      <input
        type="text"
        value={title}
        onChange={(e)=> {setTitle(e.target.value); setError(error ? '' : error)}}
         className={`p-3 mt-2 mb-0.5 w-full rounded border-2 ${error ? 'border-red-500 bg-red-100/50 focus:border-red-500 ' : 'border-slate-100 bg-slate-100 focus:border-slate-400'}   focus:outline-none placeholder:italic`}
        placeholder="Add Your Task..."
        />
        {error &&
          <div className="flex items-center gap-1 text-red-500 text-sm font-semibold px-1"><MdError className="mt-0.5" />{error}
          </div>
        }
      </div>
     
    </form>
  )
}

export default TaskForm