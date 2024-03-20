import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { RoutePath } from "./route.paths";

const AuthPage = lazy(() => import("../../../pages/AuthPage"));
const RegistrationPage = lazy(() => import("../../../pages/RegistrationPage"));

export const publicRoutes: RouteObject[] = [
  {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  {
    path: RoutePath.registration,
    element: <RegistrationPage />,
  },
  {
    path: "*",
    element: <Navigate to={RoutePath.auth} />,
  },
];
