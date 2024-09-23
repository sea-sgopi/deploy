import React from 'react';
import './App.css'
import Task from "./Task";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskApp from "./TaskApp";

function App() {
  return (
    <div className="App">
      <TaskApp />
       <TaskList tasks={[]}/>
    </div>
  );
}

export default App
