import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export type PaginatinProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: FC<PaginatinProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
