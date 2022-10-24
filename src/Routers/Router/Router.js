import { createBrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import TermsCondition from "../../components/TermsAndCondition/TermsCondition";
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
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'terms',
                element: <TermsCondition></TermsCondition>
            }
        ]
    }
])