import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const FullCar: FC = () => {
  const [car, setCar] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  // создал асинхоронную ф-ю и внизу её вызвал
  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await axios.get(
          "https://63492c050b382d796c7f6bf1.mockapi.io/items/" + id
        );
        setCar(data);
      } catch (error) {
        alert("Ошибка при получении авто");
        navigate("/");
      }
    }
    fetchCars();
  }, []);
  if (!car) {
    return <>"Загрузка..."</>;
  }
  return (
    <div className="container">
      <img className="container" src={car.imageUrl} alt="fullcar"/>
      <h2>{car.title}</h2>
      <h3>1-day: {car.price} $ </h3>
    </div>
  );
};

export default FullCar;
