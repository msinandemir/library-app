import React from "react";
import { Link } from "react-router-dom";
import cs from "classnames";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import BookModel from "../../models/BookModel";


export const  BookItem:React.FC<{book: BookModel}> = (props) =>{

  const { breakpoint } = useBreakpoint();

  return (
    <>
      <Link
        to={`/book/${props.book.id}`}
        className='flex flex-col justify-center items-center gap-1.5 '
      >
        <img
          className={cs("border-black border", {
            "w-40": breakpoint === "desktop",
            "w-32": breakpoint === "mobile",
          })}
          src={'data:image/jpeg;base64,' +props.book.image}
          alt={props.book.title}
        />
        <span className='font-semibold text-xl'>{props.book.title}</span>
        <span className='font-semibold text-xl text-black/40'>
          {props.book.author}
        </span>
      </Link>
    </>
  );
}
