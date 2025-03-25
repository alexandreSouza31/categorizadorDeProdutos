# Categorizador de Produtos 🛒 

Este projeto tem como objetivo agrupar produtos similares de diferentes supermercados, categorizando-os com base na semelhança dos títulos.

## Sumário

- [Visão geral](#visão-geral)
  - [Mídia](#mídia-)
  - [Funcionalidades](#funcionalidades)
  - [Desenvolvido com](#desenvolvido-com-)
  - [Estrutura do projeto](#estrutura-do-projeto-)
- [Como rodar o código?](#como-rodar-o-código-)
  - [Passo a passo - Clone ou baixe o projeto](#passo-a-passo---clone-ou-baixe-o-projeto--)
  - [Uso](#uso-)
- [Autor](#autor-)

## Visão geral

### Mídia 📷
##### GIF da aplicação - Clique no GIF para dar Play/Pause

![Image](https://i.imgur.com/iRnBGmB.gif)
##### Rota Home 
![Image](https://github.com/user-attachments/assets/434fd57d-3990-4c82-a5af-55937e19eff9)
##### Rota Categorizar 
![Image](https://github.com/user-attachments/assets/3f1c6ff2-a63c-436a-a3a1-26a79a41d5e1)


### Funcionalidades✅ 
Carrega uma lista de produtos a partir de um arquivo JSON

Remove acentos e padroniza textos (ex.: "quilo" → "kg", "litros" → "l")

Compara e agrupa produtos similares, mesmo com variações no nome

Exibe os resultados de categorização via API em formato JSON

### Desenvolvido com 🚀

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,git&theme=light)](https://skillicons.dev)


### Estrutura do projeto 📁

├── data
│   └── data01.json
├── routes 
│   └── routes.js
├──utils
│   ├── carregadarProdutosJson.js
│   ├── categorizador.js
│   ├── padronizarTexto.js
│   ├── removerAcentos.js
│   └── verificarProdutosIguais.js
├── .gitignore
├── index.js
├── README.md
└── server.js


### Como rodar o código? 🤖

#### ❗❗Obs: Há a necessidade de ter o Node.js instalado em sua máquina previamente!

#### Passo a passo - Clone ou baixe o projeto  👞👞

1. Abra o terminal do seu editor de código;
2. Navegue até a pasta onde deseja instalar o projeto;
3. Clone o projeto 
ex:``` git clone git@github.com:alexandreSouza31/categorizadorDeProdutos.git```
 ou se preferir, baixe clicando no botão verde chamado "Code" no repositório desse projeto, e depois "Download zip.


#### Uso 💻
1. Instale as dependências:
```
npm start
```
2. Inicie o servidor:
```
node index.js
```
3. Acesse para Home
```
http://localhost:3000/

```
ou diretamente para categorizar
```
http://localhost:3000/categorizar
```

## Autor 😏 

<main>
<div style="display: flex; align-items: center; gap: 20px;padding-bottom: 2em">
  <img src="https://github.com/alexandreSouza31/API_frente_de_caixa_time10/assets/112407769/0c2fb311-8d90-49cd-b1fe-746972cf64f0" width="60" />
  <h4 style="margin: 0;">Alexandre Mariano</h4>
</div>

  <p>
    <a href="https://www.linkedin.com/in/alexandresouza31/">
      <img src="https://skillicons.dev/icons?i=linkedin&theme=dark" width="50"/>
      LinkedIn
    </a> &nbsp;  |  &nbsp;
    <a href="https://github.com/alexandreSouza31">
      <img src="https://skillicons.dev/icons?i=github&theme=dark" width="50"/>
      GitHub
    </a>
  </p>
</main>


<a href="#categorizador-de-produtos-" 
   style="position: fixed; right: 10px; bottom: 20px; background-color:rgba(99, 102, 99, 0.32); color: white; padding: 1px 5px 5px; text-decoration: none; border-radius: 5px; font-size: 16px;">
   🔝Voltar ao topo🔝
</a>
