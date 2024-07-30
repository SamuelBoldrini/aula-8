const botao = document.querySelector("button");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

botao.onclick = () => {
  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

  const imc = calculoImc(altura, peso);
  resultadoTexto.textContent = `Seu IMC é ${imc.toFixed(2)}`;
};
