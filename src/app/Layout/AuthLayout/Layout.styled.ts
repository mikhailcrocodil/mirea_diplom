import styled from "styled-components";
import { AUTH_COLORS } from "../../../shared/utils/colors/colors.constants";

export const AuthBlock = styled("main")`
  background: ${AUTH_COLORS.background};
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const AuthContainer = styled("main")`
  max-width: 50em;
  margin-top: 100px;
`;
