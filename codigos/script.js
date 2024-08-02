

formulario.onsubmit = (event) => {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  const weight = document.getElementById("weight").value
  const height = document.getElementById("height").value
  let imcValue = Math.round(weight * 10 / (height * height))/10
  document.getElementById("imcResult").textContent = `Seu IMC é ${imcValue}`
};

document.getElementById("calcButton").onclick = onsubmit