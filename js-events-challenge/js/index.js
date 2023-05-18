import {
  buttonCoffee,
  buttonFireplace,
  buttonForest,
  buttonMinus,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop,
  buttonTheme,
  displayMinutes,
  displaySeconds,
  root,
  sliderCoffee,
  sliderFireplace,
  sliderForest,
  sliderRain,
  soundButtonsList,
  svgMoon,
  svgSun,
} from "./elements.js"

// *****    BOTÃO DE TEMA   ******



// TRAZER BOTÃO PARA O JS

// queremos trazer o botão para cá, pela DOM
// criar um variavel para o botão
// a variavel vai receber um querySelector('.toggleTheme')
// trazer também o svg sol e svg lua
// trazer também o root




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


const audioForest = new Audio('../assets/Floresta.wav');
const audioRain = new Audio('../assets/Chuva.wav');
const audioCoffee = new Audio('../assets/Cafeteria.wav');
const audioFireplace = new Audio('../assets/Lareira.wav');
const audioAlert = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

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

let minutes

buttonMinus.addEventListener('click', handleButtonMinusClick)
buttonPlus.addEventListener('click', handleButtonPlusClick)

function handleButtonMinusClick() {
  minutes = getDisplayMinutes()
  
  if(minutes > 0) {
    updateDisplayMinutes(minutes - 5)
  }
}

function handleButtonPlusClick() {
  minutes = getDisplayMinutes()
  updateDisplayMinutes(minutes + 5)
}

function getDisplayMinutes() {
  
  return Number(displayMinutes.textContent)
}

function updateDisplayMinutes(minutes) {

  displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function getDisplaySeconds() {
  
  return Number(displaySeconds.textContent)
}

function updateDisplaySeconds(seconds) {

  displaySeconds.textContent = String(seconds).padStart(2, '0')
}


// *****    CONTROLE PLAY E STOP / CONTAGEM  ******

// fazer o botão play funcionar


buttonPlay.addEventListener('click', countdown)

// fazer uma função de timeout que diminui os segundos
// pegar os segundos da tela
// diminuir 1
// atualizar o segundo da tela
// faz de novo

// fazer diminuir também os minutos
// trazer os minutos da tela pra cá
// é preciso diminuir 1 dos minutos quando os segundos for pra 60
// atualiza na tela

// fazer a função parar quando o tempo acaba

// consertar problemas

  
  let timerTimeOut
  let seconds
   
function countdown() {
  timerTimeOut = setTimeout(() => {
    seconds = getDisplaySeconds()
    minutes = getDisplayMinutes()

    // colocar áudio do fim
    if(minutes == 0 && seconds == 0) {
      resetTimer()
      audioAlert.play()
      return
    }

    if(seconds == 0) {
      seconds = 60
      updateDisplayMinutes(minutes - 1)
    }
    
    updateDisplaySeconds(seconds - 1)

    countdown()

  }, 1000)

}


// fazer o botão stop funcionar


buttonStop.addEventListener('click', resetTimer)

function resetTimer() {
  clearTimeout(timerTimeOut)
  updateDisplayMinutes(25)
  updateDisplaySeconds(0)
}

// 283