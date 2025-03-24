function removerAcentos(str) {
  return str
    .replace(/á|à|â|ã|ä|å/g, "a")
    .replace(/é|è|ê|ë/g, "e")
    .replace(/í|ì|î|ï/g, "i")
    .replace(/ó|ò|ô|õ|ö/g, "o")
    .replace(/ú|ù|û|ü/g, "u")
    .replace(/ç/g, "c")
    .replace(/ñ/g, "n");
}

module.exports = removerAcentos;