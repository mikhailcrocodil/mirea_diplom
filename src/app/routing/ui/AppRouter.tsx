import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../libs/route.config";
import { Loading } from "../../../shared/ui/Loading";
import { AuthLayout } from "../../Layout/AuthLayout";
import { PrivateLayout } from "../../Layout/PrivateLayout";

function RoutesPublicFunction() {
  return useRoutes(publicRoutes);
}

function RoutesPrivateFunction() {
  return useRoutes(privateRoutes);
}

export const AppRouter = () => {
  const token = localStorage.getItem("token");
  return (
    <Suspense fallback={<Loading />}>
      {!token ? (
        <AuthLayout>
          <RoutesPublicFunction />
        </AuthLayout>
      ) : (
        <PrivateLayout>
          <RoutesPrivateFunction />
        </PrivateLayout>
      )}
    </Suspense>
  );
};
