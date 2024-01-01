import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import SearchResultsList from './components/searchResultsList';
import BooksCategory from './components/booksCategory';

const App = () => {

    const [ results, setResults ] = useState([]);
    return (
        <Router>
               <Navbar/>
               <SearchBar setResults={setResults} />
               <SearchResultsList results={results} />
               <BooksCategory />
        </Router>
    );
};

export default App;