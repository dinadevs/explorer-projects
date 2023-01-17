export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
   reset,
   play,
   pause,
   getMinutes
  }
}

