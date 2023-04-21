import hamburguesaMenu from './ejercicios-dom/menu_hamburguesa.js'
import relojDigital, { alarma } from './ejercicios-dom/reloj_digital.js'
import { shortcuts } from './ejercicios-dom/teclado.js'

const ALARMA_URL =
  'https://nzt6ku-a.akamaihd.net/downloads/ringtones/files/mp3/oldphone-4834.mp3'

hamburguesaMenu('.panel-btn', '.panel', '.menu a') // argumentos son selectores del boton que abre el pabel, del panel, y de todos los links del menú respectivamente.
relojDigital('.reloj', '.init-reloj', '.stop-reloj') // argumentos son selectores del elemento donde irá el reloj, boton que lo inicia, y boton que lo para respectivamente.
alarma(ALARMA_URL, '.init-alarma', '.stop-alarma') // argumentos son selectores del elemento donde irá la alarma, boton que la inicia, y boton que la para respectivamente.

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  shortcuts(e)
})
