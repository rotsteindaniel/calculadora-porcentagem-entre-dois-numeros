const btn = document.querySelector('#button');

function calcular() {
  var numero1 = document.querySelector("#numero1").value;
  var numero2 = document.querySelector("#numero2").value;
  var resultado = document.querySelector("#resultado");

  var porcentagem = (numero1 / numero2) * 100;

  porcentagem = porcentagem.toFixed(2);

  return (resultado.innerHTML = `${numero1} é ${porcentagem}% de ${numero2}`);
}

btn.addEventListener('click', calcular);
