import { Container } from "./style";

export const Table = () => (
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
        <tr>
          <td>Sesenvolvimento de WebSite</td>
          <td className="alta">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>15/07/2004</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="baixa">- R$5.000</td>
          <td>Desenvolvimento</td>
          <td>15/07/2004</td>
        </tr>
      </tbody>
    </table>
  </Container>
);
