// 1. Criar calculadora de média
// 2. Permitir ler cada uma das notas (ex: 5, 6, 10)
// 3. Calcular a média das notas -> 5+6+10 = 21 -> 21/3 = 7
// 4. Se a média for > 6 = estudante aprovado
// 5. Se a média for < 6 = estudante reprovado

// funcionalidade = FUNCTION calcularMedia
// SE = IF - ELSE
// LOOP = FOR = PARA

let notas = [];

function adicionarNota() {
  let nota = document.getElementById('nota').value;
  if (nota) {
      notas.push(parseFloat(nota));
      atualizarListaNotas();
  }
  document.getElementById('nota').value = '';
}

function atualizarListaNotas() {
  let lista = document.getElementById('notas');
  lista.innerHTML = '';
  for (let i = 0; i < notas.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Nota ${i + 1}: ${notas[i]}`;
      lista.appendChild(li);
  }
}

function calcularMedia () {
  let somatorioNotas = 0;
  let media = 0;

  for (let index = 0; index < notas.length; index += 1) {
    somatorioNotas = somatorioNotas + notas[index];
  }
} // Esse fechamento de função deveria estar no final da estrutura condicional abaixo...

media = somatorioNotas / notas.length;

if (media > 6) {
  document.getElementById('resultado').textContent = `Estudante APROVADO. Média: ${media.toFixed(2)}`;
  console.log('Aprovado');
} else {
  document.getElementById('resultado').textContent = `Estudante REPROVADO. Média: ${media.toFixed(2)}`;
  console.log('Reprovado');
}



window.onload = () => {
  const btnAdicionarNota = document.querySelector('#adicionarNota');
  const btnCalcularMedia = document.querySelector('#calcularMedia');

  btnAdicionarNota.addEventListener('click', adicionarNota);
  btnCalcularMedia.addEventListener('click', calcularMedia);
}