import { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";


const Search: FC = () => {
  const dispatch = useDispatch();
  // локальный стейт для быстрого отображения в инпуте
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };
  // отложеная функция debounce и useCallback для того чтобы не терялась ссылка 
  const updateSearchValue = useCallback(
    debounce((str:string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );
  const onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
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
