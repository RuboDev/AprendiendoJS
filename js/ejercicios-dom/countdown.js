const d = document
let intervalId

export default function countdown(countdownEl, limitDate, message) {
  const fechaLimite = new Date(limitDate).getTime()

  intervalId = setInterval(() => {
    const { dias, horas, minutos, segundos, complete } = getNewTime(fechaLimite)
    if (!complete) {
      d.querySelector(
        countdownEl
      ).textContent = `Faltan: ${dias}dias ${horas}h ${minutos}min. y ${segundos}seg.`
    } else {
      d.querySelector(countdownEl).textContent = message
    }
  }, 1000)
}

function getNewTime(fechaLimite) {
  const tiempoRestante = fechaLimite - new Date().getTime()
  let calcTiempo = 0
  let complete = false

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
  calcTiempo = tiempoRestante - dias * 1000 * 60 * 60 * 24
  const horas = ('0' + Math.floor(calcTiempo / (1000 * 60 * 60))).slice(-2)
  calcTiempo = calcTiempo - horas * 1000 * 60 * 60
  const minutos = ('0' + Math.floor(calcTiempo / (1000 * 60))).slice(-2)
  calcTiempo = calcTiempo - minutos * 1000 * 60
  const segundos = ('0' + Math.floor(calcTiempo / 1000)).slice(-2)
  if (tiempoRestante <= 0) {
    clearInterval(intervalId)
    complete = true
    return { dias, horas, minutos, segundos, complete }
  }
  return { dias, horas, minutos, segundos, complete }
}
