const lightManager = {
  on: () => 'The ligth is on',
  off: () => 'The ligth is off'
}

console.log(lightManager.on())
console.log(lightManager.off())

lightManager.execute = (operation) => lightManager[operation]()

console.log(lightManager.execute('on'))
console.log(lightManager.execute('off'))
