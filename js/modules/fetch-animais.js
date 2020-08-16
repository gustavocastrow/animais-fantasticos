import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informacoes com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);

  // Anima os numeros de cada animal
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {}
  // Puxa os animais atraves de um arquivo JSON e cria cada animal utilizando create animal
  async function criarAnimais() {
    try {
      // Fetch espera a resposta e transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Apos a transformacao de json ativa as funcoes para preencher e animais os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
