function Promise(fn) {
  this.state = 'pending'
  this.value = null
  this.reason =null
  this.onFullQueue = []
  this.onRejectQueue = []
}

class Gpromise {
  constructor(executor) {
    this._promiseStatus = Gpromise.PENDING
    this._promiseValue
    this.execute(executor)
  }
  execute(executor) {
    if(typeof executor != 'function')  throw new Error('not a function')
    try {
        executor(data =>{
          this._promiseStatus = Gpromise.FULFILLED
          this._promiseValue = data
        },data => {
          this._promiseStatus = Gpromise.REJECTED
          this._promiseValue = data
        })
    } catch (e) {
      this.promiseStatus = Gpromise.REJECTED;
      this.promiseValue = e;
    }

  }
  then(onfulfilled,onrejected) {
    let _ref = null,
    timer = null,
    resutl = new Gpromise(()=>{})
    try {
      if(this._promiseStatus == Gpromise.FULFILLED) 
       _ref = onfulfilled(this._promiseValue)
       else 
       _ref = onrejected(this._promiseValue)
       if(_ref instanceof Gpromise) {
         timer =setInterval(()=>{
           if(_ref._promiseStatus == Gpromise.FULFILLED ||
            _ref._promiseStatus == Gpromise.REJECTED) {
              clearInterval(timer)
              resutl._promiseValue = _ref._promiseValue
              resutl._promiseStatus = _ref._promiseStatus
            }
         },0)
       } else {
         resutl._promiseValue = _ref
         resutl._promiseStatus = Gpromise.FULFILLED
       }
    } catch (error) {
      resutl._promiseStatus = Gpromise.REJECTED
      resutl._promiseValue = error
    }
  }
}

Gpromise.PENDING = 'pedding';
Gpromise.FULFILLED = 'resolved';
Gpromise.REJECTED = 'rejected';