import { useState } from "react";
import logo from "../../Assets/logo.svg";

import { Container, Context } from "./style";

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <Container>
      <Context>
        <img src={logo} alt="dtmoney" />
        <button type="button" onClick={onOpenModal}>
          Nova Transação
        </button>
      </Context>
    </Container>
  );
};
