import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Errorpage from "../page/Error/Errorpage";
import Signup from "../page/Signup/Signup";
import Home from "../page/Home/Home";
import ForgotPass from "../page/ForgotPass/ForgotPass";
import Signin from "../page/Signin/Signin";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { index: true, Component: Home },
       { path: "/registration", Component: Signup },
       { path: "/login", Component: Signin },
      // {
      //   path: "/myprofile",
      //   element: (
      //     <PrivRoutes>
      //       <Profile />
      //     </PrivRoutes>
      //   ),
      // },
       {
         path: "/ProductsDetails/:skillId",
         element: (
           <PrivRoutes>
             <ShowDetails />
           </PrivRoutes>
         ),
       },
       {
         path: "/forgotpass",
         Component: ForgotPass,
       },
    ],
  },
]);
