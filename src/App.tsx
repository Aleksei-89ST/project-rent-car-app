import { Route, Routes } from "react-router";
import NotFoundBlock from "./components/NotFoundBlock";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullCar from "./pages/FullCar";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="car/:id" element={<FullCar />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Route>
    </Routes>
  );
}
export default App;
