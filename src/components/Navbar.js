import React,{ useContext } from 'react';
import { BookContext } from "../context/BookContext";

const Navbar = () => {
     const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Aljiwar List Book</h1>
            <p>Currently you have {books.length} Books ..... </p>
        </div>

     );
}
 
export default Navbar;