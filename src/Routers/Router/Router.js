import { createBrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Main from "../../Main/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'footer',
                element: <Footer></Footer>
            }
        ]
    }
])