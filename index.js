import { SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0


function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

   
    console.log('Render')
    lastRenderTime = currentTime

     

}
window.requestAnimationFrame(main)