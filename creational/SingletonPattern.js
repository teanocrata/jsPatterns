const mySingleton = (
  () => {
    let instance

    const init = () => {
      const privateMethod = () => {
        console.log('I\'m a private method')
      }

      let privateNumber = Math.round(Math.random() * 1000)

      return {
        publicMethod: () => {
          console.log('Entering public method')
          privateMethod()
          console.log('exiting public method')
        },
        getRandomNumber: () => privateNumber
      }
    }

    return {
      getInstance: () => {
        if (!instance) {
          instance = init()
        }
        return instance
      }
    }
  }
)()

const testOne = mySingleton.getInstance()
testOne.publicMethod()

const testTwo = mySingleton.getInstance()
testTwo.publicMethod()

console.log(testOne.getRandomNumber() === testTwo.getRandomNumber())
