import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
    return (
        <Router>
               <Navbar/>
        </Router>
    );
};

export default App;