let numero = 0;

function aumentar() {
  numero = numero + 1;
  document.getElementById("numero").innerText = numero;
}

function diminuir() {
  numero = numero - 1;
  document.getElementById("numero").innerText = numero;
}

function zerar() {
  numero = 0;
  document.getElementById("numero").innerText = numero;
}
