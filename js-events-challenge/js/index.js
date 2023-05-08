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

buttonTheme.addEventListener('click', function() {

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

  function handleForestButtonClick () {

    this.classList.toggle('selected')
    if(audioForest.paused == true) {
      audioCoffee.pause()
      audioFireplace.pause()
      audioRain.pause()
      audioForest.play()
    } else {
      audioForest.pause()
    }

    soundButtonsList.forEach(button => {
      if(button != this) {
        button.classList.remove('selected')
      }
    });
  }

  function handleRainButtonClick() {

    this.classList.toggle('selected')
    if(audioRain.paused == true) {
      audioCoffee.pause()
      audioFireplace.pause()
      audioForest.pause()
      audioRain.play()
    } else {
      audioRain.pause()
    }
    soundButtonsList.forEach(button => {
      if(button != this) {
        button.classList.remove('selected')
      }
    });
  }

  function handleCoffeeButtonClick() {

    this.classList.toggle('selected')
    
    if(audioCoffee.paused == true) {
      audioRain.pause()
      audioFireplace.pause()
      audioForest.pause()
      audioCoffee.play()
    } else {
      audioCoffee.pause()
    }
    soundButtonsList.forEach(button => {
      if(button != this) {
        button.classList.remove('selected')
      }
    });
  }
  
  function handleFireplaceButtonClick() {

    this.classList.toggle('selected')

    if(audioFireplace.paused == true) {
      audioCoffee.pause()
      audioRain.pause()
      audioForest.pause()
      audioFireplace.play()
    } else {
      audioFireplace.pause()
    }
    soundButtonsList.forEach(button => {
      if(button != this) {
        button.classList.remove('selected')
      }
    });
  }

   

