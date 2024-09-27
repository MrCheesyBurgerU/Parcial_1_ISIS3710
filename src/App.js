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
                <Route path="/" element={<div><Banner/><Forms/><Footer message = {'Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers'}/></div>} />
                <Route path="/list" element={<div><Banner/><List/><Footer message = {'Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers'}/></div>} />
            </Routes>
        </Router>
    );
}

export default App;
