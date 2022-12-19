import { Pagination } from "react-bootstrap";

interface Props<T> {
  filtredItems: T[];
  itemPerPage: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

function TablePagination<T>({
  filtredItems,
  itemPerPage,
  currentPage,
  handlePageChange,
}: Props<T>) {
  return (
    <Pagination className="my-3">
      {Array.from(
        { length: Math.ceil(filtredItems.length / itemPerPage) },
        (_, i) => i + 1
      ).map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default TablePagination;
