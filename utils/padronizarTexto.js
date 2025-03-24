const removerAcentos = require("./removerAcentos");

function padronizarTexto(texto) {
  return removerAcentos(texto.toLowerCase())
    .replace(/-/g, " ")
    .replace(/\b(quilo|quilos|kilo|kg)\b/g, "kg")
    .replace(/\b(litro|litros|l)\b/g, "l")
    .replace(/\b(tipo)\b/g, "")
    .replace(/(\d+)\s*kg/g, "$1kg")
    .replace(/(\d+)\s*l/g, "$1l")
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = padronizarTexto;