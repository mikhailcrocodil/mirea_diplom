import React, { useState } from "react";
import {
  AuthInput,
  AuthFormStyled,
  FormButtonStyled,
  FormBottomStyled,
  CheckboxStyled,
  ComponentStyled,
  LinkStyled,
} from "./AuthForm.styled";
import { RoutePath } from "../../../app/routing/libs/route.paths";

export const AuthForm = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(login, password);
  };

  return (
    <ComponentStyled>
      <AuthFormStyled onSubmit={handleSubmit}>
        <AuthInput
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
        />
        <AuthInput
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <FormBottomStyled>
          <CheckboxStyled>
            <input type={"checkbox"} />
            <span>Запомнить меня</span>
          </CheckboxStyled>
          <FormButtonStyled type={"submit"}>Войти</FormButtonStyled>
        </FormBottomStyled>
      </AuthFormStyled>
      <FormBottomStyled>
        <LinkStyled to={RoutePath.registration}>Забыли пароль?</LinkStyled>
        <LinkStyled to={RoutePath.registration}>Регистрация</LinkStyled>
      </FormBottomStyled>
    </ComponentStyled>
  );
};
