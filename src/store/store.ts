import { create } from 'zustand'
import {  TodoStore } from '../types/types';
import { persist } from 'zustand/middleware';


const useStore = create<TodoStore>()(
    persist(
      (set) => ({
        todo: [],
        setTodo: (todo) => set({ todo }),
        addTask: (title:string)=>set((state)=>({
            todo:[{
                id: Date.now(),
                title,
                completed: false
            },
                ...state.todo
            ],
        })),
        updateTask: (id: number) =>
          set((state) => ({
            todo: state.todo.map((item) =>
              item.id === id ? { ...item, completed: !item.completed } : item
            ),
          })),
        deleteTask: (id: number) =>
          set((state) => ({
            todo: state.todo.filter((todo) => todo.id !== id),
          })),
      }),
      {
        name: 'todo-storage', 
       
      }
    )
  );
export default useStore;