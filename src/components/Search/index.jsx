import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  // локальный стейт для быстрого отображения в инпуте
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const onClickInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  // отложеная функция debounce и useCallback для того чтобы не терялась ссылка 
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    setSearchValue("");
  };
  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск авто..."
      />
      {value && <GrClose onClick={onClickInput} className={styles.clearIcon} />}
    </div>
  );
};

export default Search;
