import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import CarBlock from "./components/CarBlock";

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
          <div className="content__items"></div>
          <CarBlock title="BMW" price={150.000}/>
          <CarBlock title="AUDI" price={125.000}/>
        </div>
      </div>
    </div>
  );
}

export default App;