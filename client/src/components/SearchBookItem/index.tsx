import React from "react";
import BookModel from "../../models/BookModel";
import Button from "../Button";
import { Link } from "react-router-dom";

export const SearchBookItem: React.FC<{ book: BookModel }> = ({ book }) => {
  return (
    <div className='shadow-lg w-[300px] h-[400px] flex flex-col items-center justify-center p-1.5 font-semibold gap-1 bg-primary/10 '>
      <img
        className='w-[150px]'
        src={"data:image/jpeg;base64," + book.image}
        alt={book.title}
      />
      <div className='flex flex-col items-center gap-1'>
        <span>{book.title}</span>
        <span>{book.author}</span>
        <Button
          as={Link}
          variant='outline'
          size='normal'
          to={`/book/${book.id}`}
        >
          Kitaba&nbsp;Git
        </Button>
      </div>
    </div>
  );
};
