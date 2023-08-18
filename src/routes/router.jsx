import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import SignUp from '../pages/SignUp/SignUp';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Landing /> } />
                <Route path="/cadastro" element={ <SignUp /> } />
            </Routes>
        </BrowserRouter>
  );
}

export default Router;