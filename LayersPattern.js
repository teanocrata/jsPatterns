class DataLayer {
  constructor () {
    this.name = 'DataLayer'
  }
  s1 (param) {
    console.log(`Init ${this.name} service with ${param}`)
    console.log(`End ${this.name} service`)
  }
}

class LogicLayer {
  constructor () {
    this.name = 'LogicLayer'
  }

  setLowerLayer (layer) {
    this.lowerLayer = layer
  }
  s2 (param) {
    console.log(`Init ${this.name} service`)
    this.lowerLayer.s1(param)
    console.log(`End ${this.name} service`)
  }
}

class PresentationLayer {
  constructor () {
    this.name = 'PresentationLayer'
  }

  setLowerLayer (layer) {
    this.lowerLayer = layer
  }
  s3 (param) {
    console.log(`Init ${this.name} service`)
    this.lowerLayer.s2(param)
    console.log(`End ${this.name} service`)
  }
}

const data = new DataLayer()
const logic = new LogicLayer()
const ui = new PresentationLayer()

ui.setLowerLayer(logic)
logic.setLowerLayer(data)

ui.s3('exampleParam')
