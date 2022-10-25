import { FC, memo } from "react";

const categories = ["Все", "спортивные", "седаны", "VIP", "джипы"];

export type CategoriesProps = {
  valueCategory: number;
  onChangeCategory: (idx: number) => void;
};

const Categories: FC<CategoriesProps> = memo(({
  valueCategory,
  onChangeCategory,
}) => {

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
});

export default Categories;
