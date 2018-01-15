class Publisher {
  addObserver (observer) {}
  removeObserver (observer) {}

  notifyAll () {}
}

class Forum extends Publisher {
  constructor () {
    super()
    this.userList = []
    this.post = null
  }

  addObserver (observer) {
    if (!this.userList.includes(observer)) {
      this.userList.push(observer)
    }
  }
  removeObserver (observerToRemove) {
    this.userList = this.userList.filter(observer => observer !== observerToRemove)
  }

  notifyAll () {
    this.userList.forEach(observer => observer.notify(this.post))
  }

  writePost (text) {
    this.post = text
    this.notifyAll()
  }
}

class Subscriber {
  notify (post) {
    console.log('Notified')
  }
}

class UserA extends Subscriber {
  notify (post) {
    console.log('User A has been notified')
  }
}

class UserB extends Subscriber {
  notify (post) {
    console.log('User B has been notified')
  }
}

const forum = new Forum()

const userA = new UserA()
const userB = new UserB()

forum.addObserver(userA)
forum.addObserver(userB)

forum.writePost('my first post')

forum.removeObserver(userB)
forum.writePost('my second post')
