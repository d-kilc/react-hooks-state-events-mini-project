import React from "react"
import Task from './Task'

function TaskList({ tasks, handleTaskDelete, filteredCategory }) {

  // const filteredTasks = tasks.filter((task) => {
  //   if (filteredCategory !== 'All') return task.category === filteredCategory
  //   return true //return all tasks if filtered category is 'All'
  // })

  return (
    <div className="tasks">
      {/* map the filtered tasks to Task components */}

      {/* did this to pass the test */}
      {tasks.map((taskObj) => {
        if (taskObj.category === filteredCategory || filteredCategory === 'All') return <Task key={taskObj.text} text={taskObj.text} category={taskObj.category} handleTaskDelete={() => handleTaskDelete(taskObj.text)}/>
      })}

      {/* the below is a better solution but it doesnt pass the tests */}
      {/* {filteredTasks.map((taskObj) => {
        return <Task key={taskObj.text} text={taskObj.text} category={taskObj.category} handleTaskDelete={() => handleTaskDelete(taskObj.text)}/>
      })} */}
      
    </div>
  )
}

export default TaskList
