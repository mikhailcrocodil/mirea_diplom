import styled from "styled-components";
import { APP_COLORS } from "../../utils/colors/colors.constants";

export const HeaderStyled = styled("header")`
  padding: 32px 90px 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 6px solid ${APP_COLORS.mainColor};
`;
