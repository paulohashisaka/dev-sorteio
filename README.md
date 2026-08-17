# Dev Sorteio

<p align="center">
  <img src="./assets/gamedielogo.png" alt="Logo do Dev Sorteio" width="360">
</p>

<p align="center">
  Um sorteador de números simples, rápido e responsivo, desenvolvido para praticar JavaScript e o uso de <code>Math.random()</code>.
</p>

<p align="center">
  <a href="https://paulohashisaka.github.io/dev-sorteio/">🔗 Acesse a demonstração online</a>
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> ·
  <a href="#-tecnologias">Tecnologias</a> ·
  <a href="#-como-usar">Como usar</a>
</p>

## ✨ Sobre o projeto

O **Dev Sorteio** permite gerar um número aleatório dentro de um intervalo definido pelo usuário. Basta informar o valor mínimo, o valor máximo e clicar em **Sortear**.

O resultado pode ser útil em jogos, rifas, dinâmicas, testes ou qualquer situação que precise de um número aleatório.

## 🚀 Funcionalidades

- Sorteia números inteiros entre os limites informados.
- Inclui os dois limites no sorteio: mínimo e máximo podem ser resultados válidos.
- Exibe o número sorteado diretamente na tela.
- Impede intervalos inválidos, exigindo que o mínimo seja menor que o máximo.
- Interface responsiva para computadores, tablets e celulares.

## 🛠 Tecnologias

- **HTML5** — estrutura da página.
- **CSS3** — estilização e responsividade.
- **JavaScript** — lógica do sorteio e validação do intervalo.

## 🎲 Como usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o menor número desejado no primeiro campo.
3. Digite o maior número desejado no segundo campo.
4. Clique em **Sortear**.
5. Veja o resultado na tela.

> Exemplo: ao informar `1` e `10`, o resultado será um número inteiro de `1` a `10`.

## 🧠 Como o sorteio funciona

O projeto utiliza a fórmula abaixo para gerar um inteiro aleatório dentro do intervalo, incluindo os limites:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

Antes de sortear, a aplicação verifica se o valor mínimo é menor que o máximo. Caso contrário, mostra uma mensagem orientando o preenchimento correto.

## 📁 Estrutura do projeto

```text
JS Desafio 2 Math Random/
├── assets/
│   └── gamedielogo.png
├── index.html
├── scripts.js
├── style.css
└── README.md
```

## 📱 Responsividade

A interface se adapta a diferentes larguras de tela. Em dispositivos menores, os campos de número passam a ser exibidos em coluna para melhorar a leitura e o uso.

## 👤 Autor

Desenvolvido por [Paulo Hashisaka](https://github.com/paulohashisaka) durante os estudos de JavaScript.

---

Feito com dedicação para praticar lógica de programação e manipulação do DOM. 🚀
