class Car {
  constructor () {
    this.name = null
    this.maxSpeed = null
  }

  toString () {
    return `name is ${this.name}, max speed is ${this.maxSpeed}`
  }
}

class SportsCar extends Car {
  constructor () {
    super()
    this.name = 'Sport'
    this.maxSpeed = '250 km/h'
  }
}

class FamilyCar extends Car {
  constructor () {
    super()
    this.name = 'Family'
    this.maxSpeed = '150 km/h'
  }
}

class MyFactory {
  createCar (carType) {
    this.car = null
    switch (carType) {
      case 'sports':
        this.car = new SportsCar()
        break
      case 'family':
        this.car = new FamilyCar()
        break
      default:
        this.car = new Car()
    }
    return this.car
  }
}

const myFactory = new MyFactory()
console.log(`${myFactory.createCar('sports')}`)
console.log(`${myFactory.createCar('family')}`)
console.log(`${myFactory.createCar()}`)
