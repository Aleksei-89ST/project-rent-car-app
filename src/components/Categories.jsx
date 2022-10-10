import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["Все", "новые", "б / у", "в кредит %", "электро"];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
