import { FC } from "react";

export type CategoriesProps = {
  valueCategory: number;
  onChangeCategory: any;
}

const Categories: FC<CategoriesProps> = ({valueCategory,onChangeCategory}) => {
  const categories = ["Все", "спортивные", "седаны", "VIP", "джипы"];
 
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={valueCategory === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
