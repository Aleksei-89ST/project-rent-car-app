import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const FullCar = () => {
  const [car, setCar] = useState();
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
    return "Загрузка...";
  }
  return (
    <div className="container">
      <img className="container" src={car.imageUrl} />
      <h2>{car.title}</h2>
      <h4>{car.price} $</h4>
    </div>
  );
};

export default FullCar;
