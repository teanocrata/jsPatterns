class Command {
  execute () {
    console.log('Command execute')
  }
}

class LigthReceiver {
  turnOn () {
    console.log('On')
  }

  turnOff () {
    console.log('Off')
  }
}

class SwitchInvoker {
  constructor (onCommand, offCommand) {
    this._onCommand = onCommand
    this._offCommand = offCommand
  }

  on () {
    this._onCommand.execute()
  }

  off () {
    this._offCommand.execute()
  }
}

class OnCommand extends Command {
  constructor (ligth) {
    super()
    this._ligth = ligth
  }

  execute () {
    this._ligth.turnOn()
  }
}

class OffCommand extends Command {
  constructor (ligth) {
    super()
    this._ligth = ligth
  }

  execute () {
    this._ligth.turnOff()
  }
}

class LightSwitchClient {
  constructor () {
    this._light = new LigthReceiver()
    this._switchUp = new OnCommand(this._light)
    this._switchDown = new OffCommand(this._light)
    this._switch = new SwitchInvoker(this._switchUp, this._switchDown)
  }

  operation (cmd) {
    if (cmd === 'ON') {
      this._switch.on()
    } else if (cmd === 'OFF') {
      this._switch.off()
    } else {
      console.log('No opperation found')
    }
  }
}

const client = new LightSwitchClient()
console.log('Testing ON command')
client.operation('ON')
console.log('Testing OFF command')
client.operation('OFF')
