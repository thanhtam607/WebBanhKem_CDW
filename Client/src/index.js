import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/users/HomePage/home';
import Shop from "./pages/users/Shop/shop";
import "./style/users/css/style.css";
import "./style/users/css/bootstrap.min.css";
import "./assets/users/lib/lightbox/css/lightbox.min.css";
import "./assets/users/lib/owlcarousel/assets/owl.carousel.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<Routes>*/}
        {/*    <Route path="/" element={<HomePage/>}/>*/}
        {/*    */}
        {/*</Routes>*/}
        <App/>
    </BrowserRouter>
);


