import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import SearchResultsList from './components/searchResultsList';


const App = () => {

    const [ results, setResults ] = useState([]);
    return (
        <Router>
               <Navbar/>
               <SearchBar setResults={setResults} />
               <SearchResultsList results={results} />
        </Router>
    );
};

export default App;