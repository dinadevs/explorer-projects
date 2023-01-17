import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.soundOn')
const buttonSoundOff = document.querySelector('.soundOff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut 

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimeOut, 
    resetControls: controls.reset
  })

buttonPlay.addEventListener('click', function() {
    controls.play
    timer.countdown()
})

buttonPause.addEventListener('click' , function() {
    controls.pause
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})

buttonSoundOff.addEventListener('click' , function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click' , function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
   let newMinutes = controls.getMinutes()

    if (!newMinutes) {
       timer.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
})

