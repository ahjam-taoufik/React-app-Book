import { useContext } from "react";
import { BookContext } from "../context/BookContext";





const BookList = () => {
    const {books}= useContext(BookContext)
   
    return books.length ?(
        <div className="book-list">
        <ul>
          {books.map((book)=><li key={book.id}>{book.title}</li> )}
        </ul>
      </div>
    ):(
       <div className="empty"> your Database is Empty..... No Book to Read</div>
    )
}

export default BookList;