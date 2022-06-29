import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function Pages() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/recipe-application/" element={<Home />} />
                <Route path="/recipe-application/cuisine/:type" element={<Cuisine />} />
                <Route path="/recipe-application/searched/:search" element={<Searched />} />
                <Route path="/recipe-application/recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;