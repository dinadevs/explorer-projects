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

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

function updateTimeDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
}

function resetTimer() {
    updateTimeDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function() {
         let seconds = Number(secondsDisplay.textContent)
         let minutes = Number(minutesDisplay.textContent)

         updateTimeDisplay(minutes, 0)

         if (minutes <= 0) {
            resetControls()
            return
         }

         if( seconds <= 0) {
            seconds = 60
            --minutes

            updateTimeDisplay(String(minutes - 1), seconds)
         }

         countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countdown()
})

buttonPause.addEventListener('click' , function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
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
    newMinutes = prompt('Quantos minutos?') 
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimeDisplay(minutes, 0)
})

