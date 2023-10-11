const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev")); //printa as requisições no console durante desenvolvimento
app.use(cors()); //libera requisições com cross origin
app.use(express.json()); //configura a api para receber e envia json

//Rota verifica se o servidor está disponível
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Api ok!" });
});

app.listen(3000, () => console.log("Service is live!"));
