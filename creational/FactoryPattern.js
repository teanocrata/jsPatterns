class Car {
  constructor (options) {
    this.doors = options.doors || 4
    this.state = options.state || 'brand new'
    this.color = options.color || 'silver'
  }
}

class Truck {
  constructor (options) {
    this.state = options.state || 'used'
    this.wheelSize = options.wheelSize || 'large'
    this.color = options.color || 'blue'
  }
}

class VehicleFactory {
  constructor () {
    this.VehicleClass = Car
  }

  createVehicle (options) {
    switch (options.vehicleType) {
      case 'car':
        this.VehicleClass = Car
        break
      case 'truck':
        this.VehicleClass = Truck
        break
    }
    return new this.VehicleClass(options)
  }
}

const carFactory = new VehicleFactory()
const car = carFactory.createVehicle({vehicleType: 'car', color: 'yellow', doors: 6})

console.log(car instanceof Car)
console.log(car)

const truck = carFactory.createVehicle({vehicleType: 'truck'})

console.log(truck instanceof Truck)
console.log(truck)

class TruckFactory extends VehicleFactory {
  constructor () {
    super()
    this.VehicleClass = Truck
  }
}

const truckFactory = new TruckFactory()
const myBigTruck = truckFactory.createVehicle({state: 'omg... so bad', color: 'pink', wheelSize: 'big, very big'})

console.log(myBigTruck instanceof Truck)
console.log(myBigTruck)
