// Pegar os Elementos
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

// Funcao para mostrar as Horas
function novaHora() {
  // Variaveis
  // Data
  const date = new Date();

  // Horas, Minutos e Segundos
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  // Atribuindo o valor da variavel ao elementos
  horasElement.textContent = fixtime(horas);
  minutosElement.textContent = fixtime(minutos);
  segundosElement.textContent = fixtime(segundos);
}

// Funcao para add o zero se o valor for menor que 10
function fixtime(time) {
  return time < 10 ? "0" + time : time;
}

// Chama a Funcao para quando atualizar a pagina não ficar zerando
novaHora();

// funcao de intervalos
setInterval(novaHora, 1000);
