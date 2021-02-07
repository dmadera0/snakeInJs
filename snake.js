export const SNAKE_SPEED = 1
const snakeBody =[
    {x: 11, y: 11}]
let newSegments = 0

export function update() {
console.log('update snake')

}

export function draw(gameBoard) {
    console.log('draw snake')
    snakeBody.forEach(segment =>{
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.ysnake
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
    })
}