var imagens = [
  "img/cabeca.png",
  "img/tronco.png",
  "img/bracoesquerdo.png",
  "img/bracodireito.png",
  "img/pernaesquerda.png",
  "img/pernadireita.png",
];
var erros = 0;
var palavras = [
  "gato",
  "raposa",
  "coruja",
  "cavalo",
  "vaca",
  "amarelo",
  "amigo",
  "amizade",
  "Amor",
  "Ave",
  "Bolo",
  "Branco",
  "Cama",
  "Caneca",
  "Celular",
  "Clube",
  "Copo",
  "Doce",
  "Elefante",
  "Escola",
  "Estojo",
  "Faca",
  "Foto",
  "Garfo",
  "Geleia",
  "Girafa",
  "Janela",
  "Limonada",
  "Meia",
  "Noite",
  "Ovo",
  "Pai",
  "Parque",
  "Passarinho",
  "Peixe",
  "Pijama",
  "Rato",
  "Umbigo",
  "computador",
  "dvd",
  "carro",
  "bicicleta",
  "torta",
  "gelo",
  "suco",
  "fio",
  "sucata",
  "semana",
  "carga",
];
var palavra = palavras[getRandomInt(0, 45)];
var tabua = "-".split("");

for (var i = 1; i < palavra.length; i++) {
  tabua[i] = "-";
}

var tabuleiro = document.getElementById("tabuleiro");
tabuleiro.innerHTML = tabua.join("");

var palavraTabua = [palavra, tabua];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function letraEscolhida(palpite) {
  palpite = palpite.toUpperCase();
  var acerto = false;
  for (var i = 0; i < palavra.length; i++) {
    if (palpite == palavra[i].toUpperCase()) {
      tabua[i] = palpite;
      acerto = true;
    }
  }
  tabuleiro.innerHTML = tabua.join("");
  if (tabua.join("") == palavra.toUpperCase()) {
    setTimeout(function () {
      window.location.href = "page_vitoria.html";
    }, 800);
    // window.location.href = "page_vitoria.html";
  }
  if (acerto == false) {
    erros = erros + 1;
    switch (erros) {
      case 1:
        document.getElementById("figura").src = imagens[0];
        break;
      case 2:
        document.getElementById("figura").src = imagens[1];
        break;
      case 3:
        document.getElementById("figura").src = imagens[2];
        break;
      case 4:
        document.getElementById("figura").src = imagens[3];

        break;
      case 5:
        document.getElementById("figura").src = imagens[4];
        break;
      case 6:
        document.getElementById("figura").src = imagens[5];
        erros = 0;
        setTimeout(function () {
          window.location.href = "page_derrota.html";
        }, 800);

        break;
    }
  }
}
