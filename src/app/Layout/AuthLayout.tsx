import { FC, ReactNode } from "react";
import { AuthBlock, AuthContainer } from "./Layout.styled";

type Props = {
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <AuthBlock>
      <AuthContainer>{children}</AuthContainer>
    </AuthBlock>
  );
};
