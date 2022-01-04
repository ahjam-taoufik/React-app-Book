import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext=createContext()


const BookContextProvider = (props) => {
  const [books, seTbooks] = useState([
      {title:'title1',author:'author1',id:1},
      {title:'title2',author:'author2',id:2},
      {title:'title2',author:'author2',id:2}
  ]) ;
  
  const addBook=(title,author)=>{
         seTbooks([...books , {title:title , author:author , id :uuidv4()}])
  }

  const removeBook=(id)=>{
      seTbooks(books.filter((book)=>book.id !==id ))
  }


    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
             {props.children}
        </BookContext.Provider>

     );
}
 
export default BookContextProvider;