const express = require("express");
const { categorizarProdutos } = require("../utils/categorizador");
const carregarProdutos = require("../utils/carregarProdutosJson");

const nomeApp = "Categorizador de Produtos";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <body style = "text-align: center; font-family: Arial, sans-serif; margin-top: 50px;background-color:#1c1e1f;color:whitesmoke" >
      <header>
        <h1>Bem-vindo(a) ao ${nomeApp}!</h1>
      </header>
      <br>
      <h3>Acesse a rota:</h3>
      <br>
      <a style="color:yellow" href="http://localhost:3000/categorizar" style="font-size: 24px; color: blue; text-decoration: none;">
        http://localhost:3000/categorizar
      </a>
    </body>`);
});


router.get("/categorizar", (req, res) => {
  const produtos = carregarProdutos();
  const categorias = categorizarProdutos(produtos);
  res.json(categorias);
});

module.exports = router;
