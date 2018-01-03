const testBuilderPattern = () => {
  const shop = new Director()
  const carBuilder = new CarBuilder()
  const car = shop.construct(carBuilder)

  car.doSomething()
}

class Director {
  construct (builder) {
    builder.step1()
    builder.step2()
    return builder.getResult()
  }
}

class CarBuilder {
  constructor () {
    this.car = null
  }

  step1 () {
    this.car = new Car()
  }

  step2 () {
    this.car.addParts()
  }

  getResult () {
    return this.car
  }
}

class Car {
  constructor () {
    this.doors = 0
  }

  addParts () {
    this.doors = 4
  }

  doSomething () {
    console.log(`I have ${this.doors} doors`)
  }
}

testBuilderPattern()
