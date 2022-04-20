import { FormEvent, useState } from "react";

import Modal from "react-modal";
import { Botao, Container, TypeContainer } from "./style";
// import { Container } from './styles';
import closeIcon from "../../Assets/close.svg";
import income from "../../Assets/income.svg";
import outcome from "../../Assets/outcome.svg";
import { api } from "../../Service/api";

interface PropsModal {
  isModal: boolean;
  handCloseModal: () => void;
}

export const ModalTransacao = ({ isModal, handCloseModal }: PropsModal) => {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [type, setType] = useState("Deposit");

  function handCreateTransation(event: FormEvent) {
    event.preventDefault();

    const data = {
      titulo,
      valor,
      categoria,
      type,
    };

    api.post("/transacoes", data);
  }

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={handCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handCloseModal}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handCreateTransation}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <input
          type="number"
          placeholder=" Valor"
          value={valor}
          onChange={(event) => setValor(+event.target.value)}
        />
        <TypeContainer>
          <Botao
            type="button"
            onClick={() => setType("Deposit")}
            isActive={type === "Deposit"}
            activeColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </Botao>

          <Botao
            type="button"
            onClick={() => setType("Withdraw")}
            isActive={type === "Withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </Botao>
        </TypeContainer>
        <input
          placeholder="Categoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
