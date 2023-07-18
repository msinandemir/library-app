import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useSearchParams } from "react-router-dom";

export const Pagination: React.FC<{
  range: number;
  count: number;
}> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { breakpoint } = useBreakpoint();
  let currentPage = Number(searchParams.get("page")) - 1;

  const setCurrentPageParam = (e: any) => {
    const page = String(e.selected + 1);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  return (
    <ReactPaginate
      forcePage={currentPage}
      className='pagination'
      breakLabel='...'
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      onPageChange={setCurrentPageParam}
      pageRangeDisplayed={props.range}
      marginPagesDisplayed={breakpoint === "desktop" ? 2 : 1}
      pageCount={props.count}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      renderOnZeroPageCount={null}
    />
  );
};
