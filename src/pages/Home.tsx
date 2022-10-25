import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import CarBlock from "../components/CarBlock";
import Skeleton from "../components/CarBlock/Skeleton";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";
import { CarsSelectData, fetchCars } from "../redux/slices/carSlice";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import "../scss/app.scss";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(CarsSelectData);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getCars = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    // функция которая отвечает за логику данных которые находятся в асинхронном экшене редакса
    dispatch(
      fetchCars({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
    window.scrollTo(0, 0);
  };

  // // Если изменились параметры и был первый рендер то делаю это
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // // Если был первый рендер,то проверяю параметры и сохраняю в редуксе
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchCarParams;
  //     const sort = sortList.find(
  //       (obj) => obj.sortProperty === params.sortBy
  //     );

  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId:Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort: sort || sortList[0]
  //     }));
  //     // isSearch.current = true;
  //   }
  //   isMounted.current = true;
  // }, []);

  // Если был первый рендер то запрашиваю автомобили
  useEffect(() => {
    getCars();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const cars = items.map((obj: any) => <CarBlock {...obj} key={obj.id} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          valueCategory={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все автомобили</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению , не удалось получить автомобили.Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : cars}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
