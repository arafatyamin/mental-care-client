
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import AddService from '../pages/AddService/AddService';
import Blogs from '../pages/Blogs/Blogs';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import Review from '../pages/Review/Review';
import Reviews from '../pages/Reviews/Reviews';
import Services from '../pages/Services/Services'
import SignUp from '../pages/SignUp/SignUp';
import SingleService from '../pages/SingleService/SingleService';
import UpdateReviews from '../pages/UpdateReviews/UpdateReviews';
import PrivateRoute from './PrivateRoute';


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('https://doctor-portal-serrver.vercel.app/servicesHome')
            },
            {
                path: "/services",
                element:<Services></Services>,
                loader: () => fetch('https://doctor-portal-serrver.vercel.app/services')
            },
            {
                path: "/services/:id",
                element:<SingleService/>,
                loader: ({params}) => fetch(`https://doctor-portal-serrver.vercel.app/services/${params.id}`)
            },
            {
                path: "/review",
                element: <PrivateRoute><Review/></PrivateRoute>,
            },
            {
                path: "/reviews",
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <UpdateReviews></UpdateReviews>,
                loader: ({params}) => fetch(`https://doctor-portal-serrver.vercel.app/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
              path: "/login",
              element: <LogIn></LogIn>,
            },
            {
              path: "/blogs",
              element: <Blogs></Blogs>,
            },
          ]
        }
      ])

      export default router;