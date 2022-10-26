import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../components/Courses/Checkout/Checkout";
import CourseDetails from "../../components/Courses/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import TermsCondition from "../../components/TermsAndCondition/TermsCondition";
import Main from "../../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/terms',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails> ,
                loader: ({params}) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
            }
        ]
    }
])