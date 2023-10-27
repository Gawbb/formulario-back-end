const express = require("express");
const cors = require("cors");
const main = () => {
  const { formRouter } = require("./routes/form.router");

  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware para permitir o uso de JSON
  app.use(express.json());
  app.use(cors())

  // Importando as rotas
  app.use(formRouter);

  // Inicie o servidor
  app.listen(port, () => {
    console.log(`Servidor Express está rodando na porta ${port}`);
  });
};

main();
