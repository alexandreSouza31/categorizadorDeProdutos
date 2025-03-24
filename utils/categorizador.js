
const verificarProdutosIguais= require("./verificarProdutosIguais");

function categorizarProdutos(produtos) {
  const categorias = [];

  produtos.forEach((produto) => {
    let categoriaEncontrada = false;

    for (const categoria of categorias) {
      if (categoria.products.some((p) => verificarProdutosIguais(p.title, produto.title))) {
        categoria.products.push(produto);
        categoria.count++;
        categoriaEncontrada = true;
        break;
      }
    }

    if (!categoriaEncontrada) {
      categorias.push({
        category: produto.title,
        count: 1,
        products: [produto],
      });
    }
  });

  return categorias;
}

module.exports = {
  categorizarProdutos,
};
