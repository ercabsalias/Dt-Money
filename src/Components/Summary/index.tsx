import image from "../../Assets/income.svg";
import image1 from "../../Assets/outcome.svg";
import image2 from "../../Assets/total.svg";

import { Container } from "./style";

export const Summary = () => (
  <Container>
    <div>
      <header>
        <p>Entrada</p>
        <img src={image} alt="income" />
      </header>
      <strong>R$1080,03</strong>
    </div>
    <div>
      <header>
        <p>Saída</p>
        <img src={image1} alt="outcome" />
      </header>
      <strong>R$5000,03</strong>
    </div>
    <div className="Fundo">
      <header>
        <p>Total</p>
        <img src={image2} alt="total" />
      </header>
      <strong>R$1780,03</strong>
    </div>
  </Container>
);
