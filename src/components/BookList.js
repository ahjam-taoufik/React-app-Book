import React,{ useContext } from 'react';
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";





const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ?(
        
        <div className="book-list">
          <ul>
               {books.map(book => {
                    return ( <li key={book.id}>< BookDetails book={book}  /></li>);
                })}
          </ul>
        </div>

    ) : (
       <div className="empty"> your Database is Empty..... No Book to Read</div>
    )
}

export default BookList;
