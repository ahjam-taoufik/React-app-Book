import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
     const {books} = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Aljiwar List Tasks</h1>
            <p>Currently you have {books.length} Tasks to do ..... </p>
        </div>

     );
}
 
export default Navbar;