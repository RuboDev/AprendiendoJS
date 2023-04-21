export default function relojDigital(reloj, initReloj, stopReloj) {
  const d = document
  const funcionIntervalo = () => {
    d.querySelector(reloj).textContent = new Date().toLocaleTimeString()
  }
  let intervalId

  d.addEventListener('click', (e) => {
    if (e.target.matches(initReloj)) {
      e.target.disabled = true
      funcionIntervalo()
      intervalId = setInterval(funcionIntervalo, 1000)
    }

    if (e.target.matches(stopReloj)) {
      clearInterval(intervalId)
      d.querySelector(initReloj).disabled = false
    }
  })
}

export function alarma(alarmaURL, initAlarma, stopAlarma) {
  const d = document
  const $alarma = d.createElement('audio')
  $alarma.src = alarmaURL

  d.addEventListener('click', (e) => {
    if (e.target.matches(initAlarma)) {
      e.target.disabled = true
      $alarma.play()
    }

    if (e.target.matches(stopAlarma)) {
      $alarma.load()
      d.querySelector(initAlarma).disabled = false
    }
  })
}
