import { lazy } from "react";

const Signup = lazy(() => import("../pages/signup"));
const Signin = lazy(() => import("../pages/signin"));

const publicRoutes = [
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/signin",
    component: Signin,
  },
];

export default publicRoutes;
