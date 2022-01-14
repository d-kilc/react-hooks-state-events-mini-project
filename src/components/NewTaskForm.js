import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Code')

  function handleDetailsChange(e) {
    setDetails(e.target.value)
  }

  function handleSelectedCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  //remove 'All' from list of categories
  const categoryNames = categories.filter((category) => category !== 'All')

  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault()
      onTaskFormSubmit({ text: details, category: selectedCategory })
    }}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectedCategoryChange} value={selectedCategory}>
          {/* render <option> elements for each category here */}
          {categoryNames.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
