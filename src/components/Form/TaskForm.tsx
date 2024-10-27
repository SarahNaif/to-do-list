import React, { FormEvent, useState } from 'react'
import useStore from '../../store/store'

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const addTask = useStore((state) => state.addTask)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title)
    setTitle('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none placeholder:italic"
        placeholder="Add Your Task..."
      />
    </form>
  )
}

export default TaskForm