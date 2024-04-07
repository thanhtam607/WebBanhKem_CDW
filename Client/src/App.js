import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/users/HomePage/home";
import Shop from "./pages/users/Shop/shop";
import Error from "./pages/404er";
import About from "./pages/users/About/about";
import Contact from "./pages/users/Contact/contact";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <HomePage />,
        },
        { path: "shop", element: <Shop /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "error", element: <Error /> },
    ]);

    return element;
}
export default App;