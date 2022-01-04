import React from 'react';
import BookContextProvider from "./context/BookContext";
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
        <BookContextProvider>
           <Navbar />
           <BookList />
           <BookDetails />
        </BookContextProvider>
    </div>
  );
}
export default App;
