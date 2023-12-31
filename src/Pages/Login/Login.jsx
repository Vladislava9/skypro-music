import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ButtonEnter,
  ButtonLinkEnter,
  ButtonLinkSignup,
  ButtonSignup,
  ContainerEnter,
  FormLogin,
  Input,
  Logo,
  LogoImg,
  ModalBlock,
  WrapperLogin,
} from "./StyledLogin";

const LoginPage = ({handleSignIn}) => {
  const navigate = useNavigate();
  return (
    <WrapperLogin>
      <ContainerEnter>
        <ModalBlock>
          <FormLogin action="#">
            <NavLink to="/">
              <Logo>
                <LogoImg src="../img/logo_modal.png" alt="logo" />
              </Logo>
            </NavLink>
            <Input type="text" name="login" placeholder="Почта" />
            <Input type="password" name="password" placeholder="Пароль" />
            <ButtonEnter>
              <ButtonLinkEnter
                onClick={() => {
                  handleSignIn();
                  navigate("/", { replace: false });
                }}
              >
                Войти
              </ButtonLinkEnter>
            </ButtonEnter>
            <ButtonSignup>
              <ButtonLinkSignup to="/register">
                Зарегистрироваться
              </ButtonLinkSignup>
            </ButtonSignup>
          </FormLogin>
        </ModalBlock>
      </ContainerEnter>
    </WrapperLogin>
  );
};

export default LoginPage;
