import React from "react";
import { HeaderRightStyled, NameStyled } from "./HeaderRight.styled";
import notification from "../../../utils/images/notif.svg";
import ava from "../../../utils/images/ava.svg";
export const HeaderRight = () => {
  return (
    <HeaderRightStyled>
      <div>
        <img src={notification} alt={"notif"} />
      </div>
      <NameStyled>Мартынов М.В.</NameStyled>
      <div>
        <img src={ava} alt={"ava"} />
      </div>
    </HeaderRightStyled>
  );
};
