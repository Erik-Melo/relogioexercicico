// Pegar os Elementos
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

const diaElement = document.getElementById("dia");
const mesElement = document.getElementById("mes");
const anoElement = document.getElementById("ano");

// Funcao para mostrar as Horas
function novaHora() {
  // Variaveis
  const date = new Date(); //DATA

  const horas = date.getHours(); //Horas
  const minutos = date.getMinutes(); //Minutos
  const segundos = date.getSeconds(); // Segundos

  const dia = date.getDate(); //Dia
  const mes = date.getMonth() + 1; //Mes. (Mais 1, pois é comeco do 0).
  const ano = date.getUTCFullYear(); //Ano

  // console.log(mes);

  // Atribuindo o valor da variavel ao elementos
  horasElement.textContent = fixtime(horas);
  minutosElement.textContent = fixtime(minutos);
  segundosElement.textContent = fixtime(segundos);

  diaElement.textContent = fixtime(dia);
  mesElement.textContent = fixtime(mes);
  anoElement.textContent = ano;
}

// Funcao para add o zero se o valor for menor que 10
function fixtime(time) {
  return time < 10 ? "0" + time : time;
}

// Chama a Funcao para quando atualizar a pagina não ficar zerando
novaHora();

// funcao de intervalos
setInterval(novaHora, 1000);
