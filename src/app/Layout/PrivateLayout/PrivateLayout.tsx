import React, { ReactNode } from "react";
import { AppContainer } from "./PrivateLayout.styled";
import { Header } from "../../../shared/ui/Header";

type Props = {
  children: ReactNode;
};

export const PrivateLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <Header />
      {children}
    </AppContainer>
  );
};
