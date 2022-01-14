import React from "react";

function CategoryFilter({categories, handleCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button key={category} onClick={e => handleCategoryChange(e, category)}>{category}</button>
      })}
    </div>
  )
}

export default CategoryFilter
