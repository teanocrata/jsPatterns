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

class ShapeDecorator extends Shape {
  constructor (decoratedShape) {
    super()
    console.log('ShapeDecorator constructor')
    this.decoratedShape = decoratedShape
  }

  draw () {
    this.decoratedShape.draw()
  }

  doSomethingElse () {}
}

class ColorRedShapeDecorator extends ShapeDecorator {
  constructor (decoratedShape) {
    super(decoratedShape)
    console.log('ColorRedShapeDecorator constructor')
  }
  draw () {
    this.decoratedShape.draw()
    this.doSomethingElse()
  }

  doSomethingElse () {
    console.log('Coloring red')
  }
}

const circle = new Circle()
const rectangle = new Rectangle()

const redCircle = new ColorRedShapeDecorator(new Circle())

circle.draw()
console.log('#########')
rectangle.draw()
console.log('#########')
redCircle.draw()
