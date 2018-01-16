class TextFinder {
  find (text) {}
}

class MegaFinder extends TextFinder {
  find (text) {
    console.log(`${text} was mega found`)
  }
}

class SuperFinder extends TextFinder {
  find (text) {
    console.log(`${text} was super found`)
  }
}

const megaFinder = new MegaFinder()
const superFinder = new SuperFinder()

megaFinder.find('ABC')
superFinder.find('ABC')
