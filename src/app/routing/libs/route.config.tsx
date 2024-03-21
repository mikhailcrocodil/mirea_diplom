import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { RoutePath } from "./route.paths";

const AuthPage = lazy(() => import("../../../pages/AuthPage"));
const RegistrationPage = lazy(() => import("../../../pages/RegistrationPage"));
const MainPage = lazy(() => import("../../../pages/MainPage"));

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

export const privateRoutes: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
];
