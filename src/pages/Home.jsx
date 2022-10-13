import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import "../scss/app.scss";
import CarBlock from "../components/CarBlock";
import Skeleton from "../components/CarBlock/Skeleton";

const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    fetch(
      `https://6345b8b7745bd0dbd36fe0af.mockapi.io/item?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          valueCategory={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort valueSort={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все автомобили</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : cars.map((obj) => <CarBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
