const d = document
let x = 0
let y = 0

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball)
  const $stage = d.querySelector(stage)
  const limitsBall = $ball.getBoundingClientRect()
  const limitsStage = $stage.getBoundingClientRect()

  console.log(e.keyCode)
  console.log(limitsBall)
  console.log(limitsStage)

  switch (e.keyCode) {
    case 65: // izquierda
      // move('left')
      e.preventDefault()
      if (limitsBall.left > limitsStage.left) x--
      break
    case 87: // Arriba
      // move('up')
      e.preventDefault()
      if (limitsBall.top > limitsStage.top) y--
      break
    case 68: // Derecha
      // move('right')
      e.preventDefault()
      if (limitsBall.right < limitsStage.right) x++
      break
    case 83: // Abajo
      // move('down')
      e.preventDefault()
      if (limitsBall.bottom < limitsStage.bottom) y++
      break

    default:
      break
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

export function shortcuts(e) {
  /* console.log(e)
  console.log(e.type)
  console.log(e.key)
  console.log(e.keyCode)
  console.log(`ctrl:${e.ctrlKey}`)
  console.log(`alt:${e.altKey}`)
  console.log(`shift:${e.shiftKey}`) */

  if (e.key === 'a' && e.altKey) {
    alert('Haz lanzado una alerta con el teclado')
  }

  if (e.key === 'c' && e.altKey) {
    confirm('Haz lanzado una confirmación con el teclado')
  }

  if (e.key === 'p' && e.altKey) {
    prompt('Haz lanzado un aviso con el teclado')
  }
}
