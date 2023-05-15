// *****    BOTÃO DE TEMA   ******



// TRAZER BOTÃO PARA O JS

// queremos trazer o botão para cá, pela DOM
// criar um variavel para o botão
// a variavel vai receber um querySelector('.toggleTheme')
// trazer também o svg sol e svg lua
// trazer também o root

const buttonTheme = document.querySelector('.toggleTheme')
const svgSun = document.querySelector('.svgSun')
const svgMoon = document.querySelector('.svgMoon')
const root = document.querySelector(':root')


// ADICIONAR EVENTO

// adicionar um eventListener no botao de toggleTheme
// vigiar o evento click

buttonTheme.addEventListener('click', function () {

  // QUANDO ACONTECER O CLIQUE

  // função de onclick
  // remove o sol
  // adiciona a lua 
  // muda o tema

  svgSun.classList.toggle('hide')
  svgMoon.classList.toggle('hide')
  root.classList.toggle('lightTheme')
})

// *****    BOTÕES DE SOM   ******


// TRAZER BOTÃO PARA O JS & DECLARAR ÁUDIOS

// queremos trazer o botão para cá, pela DOM
// criar um variavel para cada botão
// a variavel vai receber um querySelector('.classe')
// criar constantes que recebem os áudios

const buttonForest = document.querySelector('.buttonForest')
const buttonRain = document.querySelector('.buttonRain')
const buttonCoffee = document.querySelector('.buttonCoffee')
const buttonFireplace = document.querySelector('.buttonFireplace')
const soundButtonsList = document.querySelectorAll('#soundButtons button')
const audioForest = new Audio('../assets/Floresta.wav');
const audioRain = new Audio('../assets/Chuva.wav');
const audioCoffee = new Audio('../assets/Cafeteria.wav');
const audioFireplace = new Audio('../assets/Lareira.wav');
const sliderForest = buttonForest.querySelector('input');
const sliderRain = buttonRain.querySelector('input');
const sliderCoffee = buttonCoffee.querySelector('input');
const sliderFireplace = buttonFireplace.querySelector('input');

audioForest.loop = true;
audioCoffee.loop = true;
audioFireplace.loop = true;
audioRain.loop = true;

// ADICIONAR EVENTO

// adicionar um eventListener em cada um dos botoes
// vigiar o evento click

// QUANDO ACONTECER O CLIQUE

// tem que selecionar o que eu cliquei
// começar ou parar o som do que foi clicado
// e "desselecionar" todos os outros
// parar o som dos outros

buttonForest.addEventListener('click', handleForestButtonClick)
buttonRain.addEventListener('click', handleRainButtonClick)
buttonCoffee.addEventListener('click', handleCoffeeButtonClick)
buttonFireplace.addEventListener('click', handleFireplaceButtonClick)

function handleForestButtonClick(e) {

  if (e.target != sliderForest) {

    this.classList.toggle('selected')
    if (audioForest.paused == true) {
      audioCoffee.pause()
      audioFireplace.pause()
      audioRain.pause()
      audioForest.play()
    } else {
      audioForest.pause()
    }

    soundButtonsList.forEach(button => {
      if (button != this) {
        button.classList.remove('selected')
      }
    });
  }
}

function handleRainButtonClick(e) {

  if (e.target != sliderRain) {
    this.classList.toggle('selected')
    if (audioRain.paused == true) {
      audioCoffee.pause()
      audioFireplace.pause()
      audioForest.pause()
      audioRain.play()
    } else {
      audioRain.pause()
    }
    soundButtonsList.forEach(button => {
      if (button != this) {
        button.classList.remove('selected')
      }
    });
  }
}

function handleCoffeeButtonClick(e) {

  if (e.target != sliderCoffee) {
    this.classList.toggle('selected')

    if (audioCoffee.paused == true) {
      audioRain.pause()
      audioFireplace.pause()
      audioForest.pause()
      audioCoffee.play()
    } else {
      audioCoffee.pause()
    }
    soundButtonsList.forEach(button => {
      if (button != this) {
        button.classList.remove('selected')
      }
    });
  }
}

function handleFireplaceButtonClick(e) {

  if (e.target != sliderFireplace) {
    this.classList.toggle('selected')

    if (audioFireplace.paused == true) {
      audioCoffee.pause()
      audioRain.pause()
      audioForest.pause()
      audioFireplace.play()
    } else {
      audioFireplace.pause()
    }
    soundButtonsList.forEach(button => {
      if (button != this) {
        button.classList.remove('selected')
      }
    });
  }
}
sliderForest.addEventListener('change', handleForestSliderChange);
sliderRain.addEventListener('change', handleRainSliderChange);
sliderCoffee.addEventListener('change', handleCoffeeSliderChange);
sliderFireplace.addEventListener('change', handleFireplaceSliderChange);

function handleForestSliderChange(e) {
  audioForest.volume = e.currentTarget.value / 100;
}

function handleRainSliderChange(e) {
  audioRain.volume = e.currentTarget.value / 100;
}

function handleCoffeeSliderChange(e) {
  audioCoffee.volume = e.currentTarget.value / 100;
}

function handleFireplaceSliderChange(e) {
  audioFireplace.volume = e.currentTarget.value / 100;
}


// *****    CONTROLE MAIS E MENOS DOS MINUTOS  ******

const displayMinutes = document.querySelector('.minutes')
let minutes

const buttonPlus = document.querySelector('.plusButton')
const buttonMinus = document.querySelector('.minusButton')

buttonMinus.addEventListener('click', handleButtonMinusClick)
buttonPlus.addEventListener('click', handleButtonPlusClick)

function handleButtonMinusClick() {
  minutes = Number(displayMinutes.textContent)
  
  if(minutes > 0) {
    displayMinutes.textContent = String(minutes - 5).padStart(2, '0')
  }
}

function handleButtonPlusClick() {
  minutes = Number(displayMinutes.textContent)
  
  displayMinutes.textContent = String(minutes + 5).padStart(2, '0')
}


// *****    CONTROLE PLAY E STOP / CONTAGEM  ******

// fazer o botão play funcionar

const buttonPlay = document.querySelector('.playButton')

buttonPlay.addEventListener('click', handleButtonPlayClick)

function handleButtonPlayClick() {
  countdown()
}

// fazer uma função de timeout que diminui os segundos
  // pegar os segundos da tela
  // diminuir 1
  // atualizar o segundo da tela
  // faz de novo

  let timerTimeOut
  const displaySeconds = document.querySelector('.seconds')
  let seconds
   
function countdown() {
  timerTimeOut = setTimeout(function() {
    seconds = Number(displaySeconds.textContent)
    if(seconds == 0) {
      seconds = 60
    }

    displaySeconds.textContent = String(seconds - 1).padStart(2, '0')

    countdown()

  }, 1000)

  
}

// fazer diminuir também os minutos
// fazer a função parar quando o tempo acaba
// fazer o botão stop funcionar
// consertar problemas
// colocar áudio do fim