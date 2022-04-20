import { useState } from "react";
import { AppRoutes } from "../Routes";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import GlobalStyles from "./Style/global";
import Modal from "react-modal";
import { ModalTransacao } from "./Components/Modal";

Modal.setAppElement("#root");

export const App = () => {
  const [isModal, setisModal] = useState(false);

  function handOpenModal() {
    setisModal(true);
  }

  function handCloseModal() {
    setisModal(false);
  }
  return (
    <>
      <Header onOpenModal={handOpenModal} />
      <Dashboard />
      <ModalTransacao isModal={isModal} handCloseModal={handCloseModal} />
      <GlobalStyles />
    </>
  );
};
