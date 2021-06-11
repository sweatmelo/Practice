   async function As() {
 // return new Promise((resolve,reject)=>{
   // setTimeout(()=>{
      //  resolve(3)
     // },0)
   //  })
   return '234'
  
}

 async function Calc() {
  let a = await As()
  console.log(a)
}

Calc()
