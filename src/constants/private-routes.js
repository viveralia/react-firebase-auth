import { lazy } from "react";

const Profile = lazy(() => import("../pages/profile"));

const privateRoutes = [
  {
    path: "/profile",
    component: Profile,
  },
];

export default privateRoutes;
