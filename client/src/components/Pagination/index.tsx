import React from "react";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export const Pagination: React.FC<{ range: number; count: number }> = (props) => {
  const { breakpoint } = useBreakpoint();

  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={props.range}
      marginPagesDisplayed={breakpoint === "desktop" ? 2 : 1}
      pageCount={props.count}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      renderOnZeroPageCount={null}
    />
  );
};
