import React, { useState } from "react";
import {
  AuthInput,
  AuthFormStyled,
  FormButtonStyled,
  FormBottomStyled,
  CheckboxStyled,
  ComponentStyled,
  LinkStyled,
  LinksStyled,
  ErrorStyled,
} from "./AuthForm.styled";
import { RoutePath } from "../../../app/routing/libs/route.paths";

export const AuthForm = ({ isRegistration }: { isRegistration: boolean }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmitAuth = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(login, password);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Пароль не может быть меньше 8 символов!");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Введенные пароли должны совпадать");
      return;
    }
    setError("");
    console.log(login, password);
  };

  return (
    <ComponentStyled>
      <AuthFormStyled
        onSubmit={isRegistration ? handleSubmitRegistration : handleSubmitAuth}
      >
        {error.length ? <ErrorStyled>{error}</ErrorStyled> : null}
        <AuthInput
          value={login}
          required
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
        />
        <AuthInput
          value={password}
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        {isRegistration && (
          <AuthInput
            value={passwordConfirm}
            required
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Подтвердите пароль"
          />
        )}
        <FormBottomStyled>
          <CheckboxStyled>
            <input type={"checkbox"} />
            <span>Запомнить меня</span>
          </CheckboxStyled>
          <FormButtonStyled type={"submit"}>Войти</FormButtonStyled>
        </FormBottomStyled>
      </AuthFormStyled>
      {isRegistration ? (
        <LinksStyled>
          <LinkStyled to={RoutePath.auth}>Авторизация</LinkStyled>
        </LinksStyled>
      ) : (
        <FormBottomStyled>
          <LinkStyled to={RoutePath.registration}>Забыли пароль?</LinkStyled>
          <LinkStyled to={RoutePath.registration}>Регистрация</LinkStyled>
        </FormBottomStyled>
      )}
    </ComponentStyled>
  );
};
