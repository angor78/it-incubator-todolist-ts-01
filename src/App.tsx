import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";


function App() {
  const task1 = [
    {id: 1, title: 'HTML/CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false}
  ]
  const task2 = [
    {id: 1, title: 'Read', isDone: true},
    {id: 2, title: 'Write', isDone: false},
    {id: 3, title: 'Delete', isDone: true}
  ]
  return (
    <div className="App">
      <TodoList title='Whats to learn' tasks={task1}/>
      <TodoList title='Whats to do' tasks={task2}/>
      <TodoList title='Done' tasks={task1}/>

    </div>
  );
}

export default App;