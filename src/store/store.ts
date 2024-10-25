import { create } from 'zustand'
import { TodoStore } from '../types/types';

const useStore = create<TodoStore>((set) => ({
    todo: [],
    setTodo: (todo) => set({ todo }),
    updateTask: (id: number) => set((state)=>({
        todo:state.todo.map((item)=>
        item.id === id ? {...item, completed: !item.completed}: item)
    }))
  }))

export default useStore;