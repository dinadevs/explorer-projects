const buttonTheme = document.querySelector('.toggleTheme')
const svgSun = document.querySelector('.svgSun')
const svgMoon = document.querySelector('.svgMoon')
const root = document.querySelector(':root')
const buttonForest = document.querySelector('.buttonForest')
const buttonRain = document.querySelector('.buttonRain')
const buttonCoffee = document.querySelector('.buttonCoffee')
const buttonFireplace = document.querySelector('.buttonFireplace')
const soundButtonsList = document.querySelectorAll('#soundButtons button')
const sliderForest = buttonForest.querySelector('input');
const sliderRain = buttonRain.querySelector('input');
const sliderCoffee = buttonCoffee.querySelector('input');
const sliderFireplace = buttonFireplace.querySelector('input');
const displayMinutes = document.querySelector('.minutes')
const buttonPlus = document.querySelector('.plusButton')
const buttonMinus = document.querySelector('.minusButton')
const buttonPlay = document.querySelector('.playButton')
const displaySeconds = document.querySelector('.seconds')
const buttonStop = document.querySelector('.stopButton')

export {
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
}