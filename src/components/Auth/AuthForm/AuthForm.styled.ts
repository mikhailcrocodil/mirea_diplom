import styled from "styled-components";
import { FORM_COLORS } from "../../../shared/utils/colors/colors.constants";
import { NavLink } from "react-router-dom";

export const ComponentStyled = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const AuthFormStyled = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const AuthInput = styled("input")`
  padding: 16px 16px 16px 30px;
  border-radius: 18px;
  background: ${FORM_COLORS.background};
  width: 22em;
  font-size: 16px;
  &::placeholder {
    color: ${FORM_COLORS.input_placeholder};
    font-size: 16px;
  }
`;

export const FormBottomStyled = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CheckboxStyled = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  & input {
    width: 16px;
    height: 16px;
  }
  & span {
    font-size: 16px;
    color: #fff;
  }
`;

export const FormButtonStyled = styled("button")`
  padding: 16px 36px;
  background: ${FORM_COLORS.background};
  color: ${FORM_COLORS.button};
  font-size: 16px;
  font-weight: 700;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LinksStyled = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const LinkStyled = styled(NavLink)`
  font-size: 16px;
  color: #fff;
`;

export const ErrorStyled = styled("span")`
  color: #ffffff;
  margin-top: -32px;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;
