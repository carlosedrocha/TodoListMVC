import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/todos.js";
import Todo from "../Todo/Todo.js";

const Main = () => {
    const [todosState, dispatch] = useContext(TodosContext);
    const [editingId, setEditingId] = useState(null);
    const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";
    const getVisibileTodos = () => {
        if (todosState.filter === "active") {
            return todosState.todos.filter((todo) => !todo.isCompleted)
        } else if (todosState.filter === "completed") {
            return todosState.todos.filter((todo) => todo.isCompleted)
        }
    return todosState.todos;
    }

    const isAllTodosSelected = todosState.todos.every((todo) => todo.isCompleted);

    const onToggleAllTodos = (event) => {
        dispatch({ type: 'toggleAll', payload: event.target.checked})
        console.log("onToggleAllTodos");
    }
    
    const visibleTodos = getVisibileTodos();

    return (
        <section className={`main ${noTodosClass}`}>
            <input 
                id="toggle-all" 
                className="toggle-all" 
                type="checkbox" 
                checked={isAllTodosSelected}
                onChange={onToggleAllTodos}
            />
            <label htmlFor="toggle-all">Mark all as completed</label>
            <ul className="todo-list">
                {visibleTodos.map(todo => (
                    <Todo 
                    key={todo.id} 
                    todo ={todo}
                    isEditing={editingId === todo.id}
                    setEditingId={setEditingId}
                    />
                ))}
            </ul>
        </section>
    )
    
}

export default Main;