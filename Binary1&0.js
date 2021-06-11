function binarystr(arr) {
  arr = arr.split('')
  let cur=0,res =0
 for(let i=0;i<arr.length;i++) {
   if(arr[i] == '0'){
    if(cur>0) res+=1
    cur =0
   }else cur+=1

   
 }
 if(cur>0) res+=1
 console.log(res);
 return res<=1
}
console.log(binarystr('00'));