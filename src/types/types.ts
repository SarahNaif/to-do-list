export type Todo = {
    id: number;
    title: string;
    completed: boolean;
  }

  export type  TodoStore = {
    todo: Todo[];
    setTodo: (todo: Todo[]) => void;
    updateTask: (id: number)=> void;
    deleteTask: (id: number)=> void;
  }

