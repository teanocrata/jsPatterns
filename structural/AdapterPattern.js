class AdapteeShiping {
  request (origin, destination, weight) {
    this.origin = origin
    this.destination = destination
    this.weight = weight
    this.total = Math.round(Math.random() * 1000)
  }
}

class TargetShipping {
  login (credentials) {
    // TODO
  }

  setOrigin (origin) {
    this.origin = origin
  }

  setDestination (destination) {
    this.destination = destination
  }

  calculate (weight) {
    this.weight = weight
    this.total = Math.round(Math.random() * 999)
  }
}

class ShippingAdapter {
  constructor (credentials) {
    this.targetShipping = new TargetShipping(credentials)
    this.targetShipping.login()
  }

  request (origin, destination, weight) {
    this.targetShipping.setOrigin(origin)
    this.targetShipping.setDestination(destination)
    this.targetShipping.calculate(weight)
    return this.targetShipping
  }
}

class Client {
  run () {
    const oldInterface = new AdapteeShiping()
    oldInterface.request('1234', '321', 123.45)
    console.log(oldInterface)

    const mycreds = 'user/pass'
    const adapter = new ShippingAdapter(mycreds)
    const newCost = adapter.request('1234', '321', 123.45)

    console.log(newCost)
  }
}

const client = new Client()
client.run()
