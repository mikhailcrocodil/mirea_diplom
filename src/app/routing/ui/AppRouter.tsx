import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "../libs/route.config";
import { Loading } from "../../../shared/ui/Loading";
import { AuthLayout } from "../../Layout/AuthLayout";

function RoutesPublicFunction() {
  return useRoutes(publicRoutes);
}

export const AppRouter = () => {
  const token = localStorage.getItem("token");
  return (
    <Suspense fallback={<Loading />}>
      {!token && (
        <AuthLayout>
          <RoutesPublicFunction />
        </AuthLayout>
      )}
    </Suspense>
  );
};
