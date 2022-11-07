
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/service",
                element:<Services></Services>
            },
          ]
        },
      ]);
  

export default router;