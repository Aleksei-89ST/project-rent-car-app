import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import CarBlock from "./components/CarBlock";
import { useEffect, useState } from "react";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://6345b8b7745bd0dbd36fe0af.mockapi.io/item")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все автомобили</h2>
          <div className="content__items">
            {cars.map((obj) => (
              <CarBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
