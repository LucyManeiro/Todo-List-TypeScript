import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField"
import {Todo} from "./model"
import TodoList from "./components/TodoList"
import {DragDropContext, onDragEnd} from "react-beautiful-dnd"
const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <DragDropContext onDragEnd={()=> {}}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo}/>
      <TodoList todos={todos} setTodos={setTodos}
        completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
