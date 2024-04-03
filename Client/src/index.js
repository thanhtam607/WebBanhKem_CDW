import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/users/HomePage/home';
import "./style/users/css/style.css";
import "./style/users/css/bootstrap.min.css";
import "./assets/users/lib/lightbox/css/lightbox.min.css";
import "./assets/users/lib/owlcarousel/assets/owl.carousel.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

