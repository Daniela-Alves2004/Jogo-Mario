const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const mostraPontuacao = document.querySelector('p');

let pontos = 0;
let gameover = false;
let startClick = false;

function start (){
  document.querySelector('.game-init').style.display = 'none';
  document.querySelector('.game-board').style.display = 'block';
  startClick = true;
}

const jump = () => {
    if(!mario.classList.contains('jump')){
      mario.classList.add('jump');

      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500);
    }
  }


document.addEventListener('keydown', jump);


const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${pipePosition}px`;


    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '60px';

    document.querySelector('.game-over').style.display = 'block';
    gameover = true;
    clearInterval(loop);
  }
  
  }
  
, 10);

const ponto = setInterval(() =>{
  if(!gameover && startClick){
    contarPontos();
  }
 
},2000)


function playAgain() {
  location.reload();
}

function contarPontos() {
  pontos++;
  console.log(pontos);
  mostraPontuacao.textContent = `Pontuação: ${pontos}`;
}
