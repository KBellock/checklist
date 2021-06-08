import { useState, useRef, useEffect } from 'react'
import Checklist from './components/Checklist';
import './App.css';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'checklistApp.todos'

function App() {
  const [toDoList, setToDoList] = useState([{
    id: 1,
    task: "Go to Surf",
    complete: false
  }]);

  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      setToDoList(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList))
  }, [toDoList])

  function toggleTodo(id) {
    const newTodos = [...toDoList]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setToDoList(newTodos);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const task = todoNameRef.current.value
    if (task === '') return
    setToDoList([...toDoList,
       {
         id: uuidv4(),
         task: task,
         complete: false
       }])
    todoNameRef.current.value = null;
  }

  function handleClearTodos(){
    const newTodos = toDoList.filter(todo => !todo.complete)
    setToDoList(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Checklist</h1>
      </header>
      <body>
        <div className="user-input-container">
            <div className="form-container">
                <input ref={todoNameRef} type="text" className="user-input" placeholder="Enter New Task"/>
                <button onClick={handleAddTodo} className="btn">Add Task</button>
                <button onClick={handleClearTodos}className="btn">Clear Finished</button>
            </div>
            <div className="tasks-remaining">{toDoList.filter(todo => !todo.complete).length} More Task(s)</div>
        </div>
        <div className="checklist-container">
        <Checklist toDoList={toDoList} toggleTodo={toggleTodo}/>
        </div>
      </body>
    </div>
  );
}

export default App;
