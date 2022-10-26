import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./scss/app.scss";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart" */ "./pages/Cart")
);
const FullCar = React.lazy(
  () => import(/*webpackChunkName: "FullCar" */ "./pages/FullCar")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="car/:id"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <FullCar />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
export default App;
