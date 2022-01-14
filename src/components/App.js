import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"

function App() {
  const [filteredCategory, setFilteredCategory] = useState('All')
  const [tasks, setTasks] = useState(TASKS)
  
  function handleTaskDelete(taskName) {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks]
      newTasks.splice( newTasks.findIndex((task) => task.text === taskName), 1 )
      return newTasks
    })
  }

  function handleCategoryChange(e, category) {
    if ( document.querySelector('.selected') ) {
      document.querySelector('.selected').classList.remove('selected')
    }
    e.target.classList.add('selected')
    setFilteredCategory(category)
  }

  function onTaskFormSubmit(newItem) {
    setTasks([...tasks, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleTaskDelete={handleTaskDelete} filteredCategory={filteredCategory}/>
    </div>
  );
}

export default App;
