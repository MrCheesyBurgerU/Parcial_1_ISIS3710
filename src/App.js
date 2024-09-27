import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forms from './components/Forms';  
import List from './components/List'; 
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><Banner/><Forms/><Footer/></div>} />
                <Route path="/list" element={<div><Banner/><List/></div>} />
            </Routes>
        </Router>
    );
}

export default App;
