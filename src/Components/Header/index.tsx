import logo from "../../Assets/logo.svg";
import { Container, Context } from "./style";

export const Header = () => (
  <Container>
    <Context>
      <img src={logo} alt="dtmoney" />
      <button>Nova Transação</button>
    </Context>
  </Container>
);
