import ToDo from "./ToDo"

function Checklist({toDoList, toggleTodo}) {
    return (
            toDoList.map(todo => {
               return <ToDo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>
           })
    )
}

export default Checklist
