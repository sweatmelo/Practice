const dedounce = (fn,delay=300)=>{
  let timer = null
  return function(){
    if(timer){
     clearTimeout(timer)
    } 
    timer = setTimeout(delay,fn)
  }
}

const throttle = (fn,delay)=>{
  let last = +new Date()
  return function(){
    let now = +new Date()
    if(now-last>delay) {
      fn()
      last = now
    }

  }
}
