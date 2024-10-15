import React, { useState } from "react";
import TodoList from "./TodoList"; // Assuming TodoList is imported or defined elsewhere

export interface TodoI {
    title: string;
    id: number;
}

export default function TodoApp() {
    const [todo, setTodo] = useState<TodoI>({ title: "", id: 0 });
    const [todos, setTodos] = useState<TodoI[]>([]); // Fixed variable name

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ title: e.target.value, id: 0 });
    };

    const onEnter = () => {
        const id = Math.floor(Math.random() * 100);
        setTodos([...todos, { title: todo.title, id }]); // Add the new todo to the list
        setTodo({ title: "", id: 0 }); // Reset the input field
    };
     const deleteTodo=(id: number) => {
      const nonDeletedTodos= todos.filter((todo) => todo.id !==id)
      setTodos(nonDeletedTodos)
     }
    return (
        <div className="d-flex align-items-center mt-5 flex-column"> 
            {/* <div className="flex-column shadow-sm d-flex justify-content-between" style={{ width: "500px" }}>
                <div className="d-flex justify-content-center">
                    <label className="text-muted">Please Enter Your Todo</label> <br />
                    <input
                        onChange={onChange} // Corrected to onChange
                        value={todo.title} // Bind input value to state
                        placeholder="Todo"
                        className="rounded p-1"
                    /> <br />
                    <button onClick={onEnter} className="btn btn-primary">Enter</button>
                </div>
            </div> */}
            <h1> TodoList</h1>
            <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md">
          <div className="flex">
            <input
              type="text"
              value={todo.title}
              onChange={(onChange)}
              className="flex-grow p-2 border border-grey-400 rounded-lg"
              placeholder="Add a new task..."
            />
            <button onClick={onEnter}  className="m1-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add</button>
          </div>
        </div>
      </main>
    


            <TodoList todos={todos} deleteTodo={deleteTodo}  /> {/* Pass the full todos array */}
        </div>
    );
}