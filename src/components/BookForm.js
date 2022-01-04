import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";


const BookForm = () => {
    const {addBook} = useContext(BookContext)
 
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');

    const HandlerForm=(e)=>{
          e.preventDefault();
          addBook(title,author);
          settitle('');
          setauthor('');
    }

    return (
        <form onSubmit={HandlerForm}>
           <input type='text'  placeholder="enter title"  value={title} onChange={(e)=>settitle(e.target.value)} required />
           <input type='text' placeholder="enter author"  value={author} onChange={(e)=>setauthor(e.target.value)} required />
           <input type='submit' value='Add Book' />

        </form> 

     );
}
 
export default BookForm;