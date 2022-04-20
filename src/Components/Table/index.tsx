import { useEffect, useState } from "react";
import { api } from "../../Service/api";

import { Container } from "./style";

interface Transacoes {
  id: number;
  title: string;
  amount: number;
  type: string;
  categoria: string;
  createdAt: string;
}

export const Table = () => {
  const [transacoes, setTransacao] = useState<Transacoes[]>([]);

  useEffect(() => {
    api
      .get("/transacoes")
      .then((response) => setTransacao(response.data.transacaos));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacoes) => (
            <tr key={transacoes.id}>
              <td>{transacoes.title}</td>
              <td className={transacoes.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transacoes.amount)}
              </td>
              <td>{transacoes.categoria}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transacoes.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
