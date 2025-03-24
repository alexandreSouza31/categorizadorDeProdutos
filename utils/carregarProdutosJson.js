const fs = require("fs");
const path = require("path");

const carregarProdutos = () => {
  const dataPath = path.join(__dirname, ".././data/data01.json");
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

module.exports = carregarProdutos;