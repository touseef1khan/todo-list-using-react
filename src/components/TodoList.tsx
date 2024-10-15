import  React from "react"
import { TodoI } from "./TodoApp"
import TodoItem from "./Todoitem"
interface TodoListprops{
    todos:TodoI[]
    deleteTodo:(id: number) => void
}
export default function TodoApp({todos, deleteTodo}:TodoListprops) {
    return <div>
        {todos.map(((todo) => (
         <TodoItem  todo={todo} deleteTodo={deleteTodo} />   
        )

        ))}
    </div>
}