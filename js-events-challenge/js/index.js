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


// TRAZER BOTÃO PARA O JS

// queremos trazer o botão para cá, pela DOM
// criar um variavel para cada botão
// a variavel vai receber um querySelector('.classe')

const buttonForest = document.querySelector('.buttonForest')
const buttonRain = document.querySelector('.buttonRain')
const buttonCoffee = document.querySelector('.buttonCoffee')
const buttonFireplace = document.querySelector('.buttonFireplace')
const soundButtonsList = document.querySelectorAll('#soundButtons button')


// ADICIONAR EVENTO

// adicionar um eventListener em cada um dos botoes
// vigiar o evento click

  // QUANDO ACONTECER O CLIQUE

  // tem que selecionar o que eu cliquei
  // começar o som do que foi clicado
  // e "desselecionar" todos os outros
  // parar o som dos outros

  buttonForest.addEventListener('click', handleSoundButtonsClick)
  buttonRain.addEventListener('click', handleSoundButtonsClick)
  buttonCoffee.addEventListener('click', handleSoundButtonsClick)
  buttonFireplace.addEventListener('click', handleSoundButtonsClick)

  function handleSoundButtonsClick() {

    this.classList.toggle('selected')

    soundButtonsList.forEach(button => {
      if(button != this) {
        button.classList.remove('selected')
      }
    });
  }
  

