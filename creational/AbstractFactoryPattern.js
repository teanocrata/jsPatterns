class Car {
  constructor (options) {
    this.doors = options.doors || 4
    this.state = options.state || 'brand new'
    this.color = options.color || 'silver'
  }
  drive () {
    console.log('Drive feature enabled!')
  }

  breakDown () {
    console.log('Break down feature enabled!')
  }
}

class Truck {
  constructor (options) {
    this.state = options.state || 'used'
    this.wheelSize = options.wheelSize || 'large'
    this.color = options.color || 'blue'
  }

  drive () {
    console.log('Drive feature enabled!')
  }

  breakDown () {
    console.log('Break down feature enabled!')
  }
}

class AbstractVehicleFactory {
  constructor () {
    this.types = {}
  }

  getVehicle (type, customizations) {
    const Vehicle = this.types[type]
    return new Vehicle(customizations)
  }

  registerVehicle (type, Vehicle) {
    if (Vehicle.prototype.drive && Vehicle.prototype.breakDown) {
      this.types[type] = Vehicle
    }
  }
}

const abstractVehicleFactory = new AbstractVehicleFactory()

abstractVehicleFactory.registerVehicle('car', Car)
abstractVehicleFactory.registerVehicle('truck', Truck)

console.log(abstractVehicleFactory.getVehicle('car', {color: 'lime green', state: 'like new'}))
console.log(abstractVehicleFactory.getVehicle('truck', {color: 'olive green', state: 'new'}))
