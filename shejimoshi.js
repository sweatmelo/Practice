/**
 * factory
 */

class Item {
  constructor(item) {
    this.item = item
  }
}

class Factory {
  create(name) {
    return new Item(name)
  }
}

/**
 * SingleInstance 
 * */

class Div {
  cretaeDiv() {
    let div = document.createElement('div')
    div.innerHTML = 'Single'
    document.body.appendChild(div)
    div.style.display = 'none'
    return div
  }
}

class Single{
  getSingleDiv(fn){
    let result
    return function() {
      return result || (result = fn.apply(this,arguments))
    }
  }
}

/**
 * Wrapper
 */

class A{
  show() {
    console.log('object');
  }
}

class B{
  display() {
    console.log('object');
  }
}

class Wraaper {
  show() {
    let warp = new B()
    return warp.display()
  }
}

function render(ins) {
  if(ins.show instanceof Function)
  ins.show()
}
render(new Wraaper)

/**
 * 发布订阅模式
 */

class Event {
  constructor() {
    this.eventTypeobj = {}
    this.cacheObj = {} //缓存
  }
  on(eventType,fn) {
    if(!this.eventTypeobj[eventType]){
      this.eventTypeobj[eventType] = []
    }
    this.eventTypeobj[eventType].push(fn)

    if(this.cacheObj[eventType]) {
      let cacheList = this.cacheObj[eventType]
      for(let i=0;i<cacheList.length;i++) {
        cacheList[i]()
      }
    }
  }

  emit() {
    let eventType = [...arguments].shift()
    let eventList = this.eventTypeobj[eventType]
    for(let i=0;i<eventList.length;i++) {
      eventList[i].apply(eventList[i],arguments)
    }
  }

  remove(eventType,fn) {
    let eventTypeList = this.eventTypeobj[eventType]
    if(!eventTypeList) return false
    if(!fn) eventTypeList && (eventTypeList.length = 0)
    else {
      for(let i=0;i<eventTypeList.length;i++) {
        if(eventTypeList[i] == fn) {
          eventTypeList.splice(i,1)
          i--
        }
      }
    }
  }
}