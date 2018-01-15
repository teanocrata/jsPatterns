class Shape {
  draw () {
    console.log('I\'m a shape')
  }
}

class Circle extends Shape {
  draw () {
    console.log('I\'m a circle')
  }
}

class Rectangle extends Shape {
  draw () {
    console.log('I\'m a rectangle')
  }
}

const circle = new Circle()
const rectangle = new Rectangle()

const redCircle = new Circle()

redCircle.draw = () => {
  Circle.prototype.draw.call(this)
  console.log('Coloring red')
}

circle.draw()
console.log('#########')
rectangle.draw()
console.log('#########')
redCircle.draw()
