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
    }, 650);
    // window.location.href = "page_vitoria.html";
  }
  if (acerto == false) {
    var desenho = document.getElementById("desenho");
    erros = erros + 1;
    switch (erros) {
      case 1:
        desenho.innerHTML = "<img class='img-fluid'src='img/cabeca.png'>";
        break;
      case 2:
        desenho.innerHTML = "<img class='img-fluid'src='img/tronco.png'>";
        break;
      case 3:
        desenho.innerHTML =
          "<img class='img-fluid'src='img/bracoesquerdo.png'>";
        break;
      case 4:
        desenho.innerHTML = "<img class='img-fluid'src='img/bracodireito.png'>";
        break;
      case 5:
        desenho.innerHTML =
          "<img class='img-fluid'src='img/pernaesquerda.png'>";
        break;
      case 6:
        desenho.innerHTML = "<img class='img-fluid'src='img/pernadireita.png'>";
        erros = 0;
        // window.alert("vc perdeu :(");
        // desenho.innerHTML = "<img class='img-fluid'src='forca.png'>";
        setTimeout(function () {
          window.location.href = "page_derrota.html";
        }, 650);

        // window.location.href = "page_derrota.html";

        // document.location.reload(true);

        break;
    }
  }
}
