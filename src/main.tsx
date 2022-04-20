import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transacao: Model,
  },

  seeds(server) {
    server.db.loadData({
      transacaos: [
        {
          id: 1,
          title: "Freelance de WebSite",
          type: "Deposit",
          categoria: "Dev",
          amount: 6000,
          createdAt: new Date("2022-02-12 18:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "Withdraw",
          categoria: "Casa",
          amount: 1000,
          createdAt: new Date("2022-02-12 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transacoes", () => {
      return this.schema.all("transacao");
    });

    this.post("/transacoes", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transacao", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
