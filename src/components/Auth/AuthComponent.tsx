import React from "react";
import { AuthStyled } from "./Auth.styled";
import { AuthLogo } from "./AuthLogo";
import { AuthForm } from "./AuthForm";

export const AuthComponent = () => {
  return (
    <AuthStyled>
      <AuthLogo />
      <AuthForm />
    </AuthStyled>
  );
};
