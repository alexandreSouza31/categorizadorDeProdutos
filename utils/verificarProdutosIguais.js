const padronizarTexto = require("./padronizarTexto");


function verificarProdutosIguais(titulo1, titulo2) {
  const palavras1 = padronizarTexto(titulo1).split(" ").sort().join(" ");
  const palavras2 = padronizarTexto(titulo2).split(" ").sort().join(" ");
  return palavras1 === palavras2
}

module.exports = verificarProdutosIguais;