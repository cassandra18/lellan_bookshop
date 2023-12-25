import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
const App = () => {
    return (
        <Router>
               <Navbar/>
               <SearchBar/>
        </Router>
    );
};

export default App;