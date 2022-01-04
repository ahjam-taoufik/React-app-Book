import React,{ useContext } from "react";
import { BookContext } from "../context/BookContext";


const BookDetails = ({book}) => {
      let book1=''
       const { removeBook } = useContext(BookContext);
       
    if (typeof(book) !== "undefined") {book1=book}

    return ( 
            <div onClick={() => removeBook(book.id)} >
                 <div className="title">{ book1.title }</div>
                 <div className="author">{ book1.author }</div>
            </div>
     );
}
export default BookDetails;