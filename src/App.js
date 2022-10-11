import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import CarBlock from "./components/CarBlock";
import cars from "./assets/car.json";

function App() {
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
            {cars.map((obj, i) => (
              <CarBlock key={i} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
