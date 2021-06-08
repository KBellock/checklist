function ToDo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className={todo.complete ? "todo-container complete-container" : "todo-container"}>
            <label className="todo-label">
                <div className={todo.complete ? "completed" : null}>{todo.task}</div>
                <div>Finished?
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                </div>
                </label>
        </div>
    )
}

export default ToDo
