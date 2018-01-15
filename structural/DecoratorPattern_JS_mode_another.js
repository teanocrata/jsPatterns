class Shape {
  draw () {
    console.log('I\'m a shape')
  }
}

class Circle extends Shape {
  constructor () {
    super()
    this.shapeType = 'circle'
    this.size = 33
  }
}

const circle = new Circle()

const colorizeRed = (circle) => {
  circle.color = 'Red'
}

const duplicateSize = (circle) => {
  circle.size = circle.size * 2
}

console.log(circle)
circle.draw()

colorizeRed(circle)
console.log(circle)

duplicateSize(circle)
console.log(circle)
