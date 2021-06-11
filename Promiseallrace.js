Promise.all = function(iterator) {
  if(!Array.isArray(Array.from(iterator))) 
  return new Error('')
  let res = [],gate = 0
  for(let item of iterator) {
    Promise.resolve(item).then(data=>{
      res[gate++] = data
      if(gate == iterator.length) resolve(res)
    }).then(err=>{
      reject(err)
    })
  }
}

Promise.race = function(iterator) {
  for(let item of iterator) {
    Promise.resolve(item).then(data=>{
      resolve(data)
    }).catch(err=>{
      reject(err)
    })
  }
}