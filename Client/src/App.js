import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/users/HomePage/home";
import Shop from "./pages/users/Shop/shop";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <HomePage />,

        },
        { path: "shop", element: <Shop /> },
    ]);

    return element;
}
export default App;