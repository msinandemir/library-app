import React from 'react'
import BookModel from '../../../../models/BookModel'
import { SearchBookItem } from '../../../../components/SearchBookItem'

export const SearchedBooks:React.FC<{books:BookModel[]}> =(props) =>{
  return (
    <section className='grid grid-cols-3 gap-5 mt-10'>{props.books.map((item,index) => (
      <SearchBookItem book={item} key={index} />
    ))}</section>
  )
}
