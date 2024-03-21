import React from "react";
import { AuthStyled } from "./Auth.styled";
import { AuthLogo } from "./AuthLogo";
import { AuthForm } from "./AuthForm";

export const AuthComponent = ({
  isRegistration = false,
}: {
  isRegistration: boolean;
}) => {
  return (
    <AuthStyled>
      <AuthLogo />
      <AuthForm isRegistration={isRegistration} />
    </AuthStyled>
  );
};
