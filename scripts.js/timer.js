import { displayMinutes, displaySeconds } from "./elements.js"

export function Timer() {

  let timerTO
  
  const countdown = () => {
    timerTO = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)

      if(minutes <= 0) {
        if(seconds <= 0) {
          return
        }
      }
      
      if(seconds <= 0) {
        seconds = 60
        minutes--
      }
      
      seconds--
      
      displayMinutes.textContent = String(minutes).padStart(2, '0')
      displaySeconds.textContent = String(seconds).padStart(2, '0')
      
      countdown()
    }, 1000)
  }

  const stopCountdown = () => {
    displayMinutes.textContent = '25'
    displaySeconds.textContent = '00'
    clearTimeout(timerTO)
  }

  const addTime = () => {
    displayMinutes.textContent = String(Number(displayMinutes.textContent) + 5).padStart(2, '0')
  }

  const removeTime = () => {
    displayMinutes.textContent = String(Number(displayMinutes.textContent) - 5).padStart(2, '0')
  }

  return {
    countdown,
    stopCountdown,
    addTime,
    removeTime
  }
}