
import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
<div className="flex">
  <ul className="flex justify-between w-full px-4">
    {categories.map((category, index) => (
      <li key={index} onClick={() => onSelectCategory(category)} className="cursor-pointer hover:text-blue-500 text-lg mb-4">
        {category}
      </li>
    ))}
  </ul>
</div>

  );
};

export default CategoryFilter;
