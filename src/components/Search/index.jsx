import React, { useCallback, useContext, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  // локальный стейт для быстрого отображения в инпуте
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const { setSearchValue } = useContext(SearchContext);
  const onClickInput = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  // отложеная функция debounce и useCallback для того чтобы не терялась ссылка 
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
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
