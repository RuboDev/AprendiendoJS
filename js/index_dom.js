import countdown from './ejercicios-dom/countdown.js'
import hamburguesaMenu from './ejercicios-dom/menu_hamburguesa.js'
import relojDigital, { alarma } from './ejercicios-dom/reloj_digital.js'
import { moveBall, shortcuts } from './ejercicios-dom/teclado.js'

const ALARMA_URL =
  'https://nzt6ku-a.akamaihd.net/downloads/ringtones/files/mp3/oldphone-4834.mp3'

hamburguesaMenu('.panel-btn', '.panel', '.menu a') // argumentos son selectores del boton que abre el pabel, del panel, y de todos los links del menú respectivamente.
relojDigital('.reloj', '.init-reloj', '.stop-reloj') // argumentos son selectores del elemento donde irá el reloj, boton que lo inicia, y boton que lo para respectivamente.
alarma(ALARMA_URL, '.init-alarma', '.stop-alarma') // argumentos son url del archivo mp3 de alarma , selector del boton que la inicia, y boton que la para respectivamente.

document.addEventListener('keydown', (e) => {
  shortcuts(e)
  moveBall(e, '.ball', '.stage')
})

countdown(
  '.countdown', // selector del elemento que contendrá la cuenta atrás
  '2023-04-29T22:00:00', // Fecha límite
  'YAYY, terminó la cuenta atrás! Ha llegado el momento.' // Mensaje a mostrar cuando se llegue a esa fecha
)
