import React, { useEffect, useState } from 'react'
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import "../scss/app.scss";
import CarBlock from "../components/CarBlock";
import Skeleton from "../components/CarBlock/Skeleton";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cars, setCars] = useState([]);
    useEffect(() => {
      fetch("https://6345b8b7745bd0dbd36fe0af.mockapi.io/item")
        .then((res) => res.json())
        .then((data) => setCars(data));
        setIsLoading(false);
    }, []);
  return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все автомобили</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
              : cars.map((obj) => <CarBlock key={obj.id} {...obj} />)}
          </div>
    </>
  )
}

export default Home