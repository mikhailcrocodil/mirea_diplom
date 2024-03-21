import React from "react";
import { HeaderStyled } from "./Header.styled";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderRight } from "./HeaderRight";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderRight />
    </HeaderStyled>
  );
};
