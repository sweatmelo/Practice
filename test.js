function Print(arr) {
  let count  = 0
  let temp 
  arr = arr.split('')
  // for(let i=0;i<arr.length;i++) {
  //     if(arr[i]>arr[arr.length-i-1]){
  //       let j = arr.length-i-1
  //         if(count<2&& i<j) {
  //           console.log(arr[i],arr[j]);
  //          temp = arr[i]
  //          arr[i] = arr[j]
  //          arr[j] = temp
  //          count++
  //         }
  //     }
  // }

  for(let i =0;i<arr.length;i++) {
    
      let j= i+1
      let temp = arr.slice(j)
      temp.sort((a,b)=>{b-a})
     if(count<2){
      let k =0
      //let a = temp[k]
      while(temp[k]==arr[i])  k++
      console.log(temp[k]);
      console.log(temp);
      let o=0
       for(;o<arr.length;o++) {
         if(arr[o]!= temp[k]) o++
       }
       console.log(o);
      let temp1
      temp1 = arr[i]
      arr[i] = arr[o]
      arr[o] = temp1
      count++
    }
      
  }
  return arr.join('')
}

let arr ='aaazbcdeadcd'
console.log(Print(arr));


function long(s) {
  if(!s || s.length <2) {
      return s
  }
  let start =0,end =0,n =s.length
  function centerExpend(left,right) {
      while(left>=0 && right<n && s[left] == s[right]){
          left--
          right++
      }
      return right-left-1
  }
  for(let i=0;i<n;i++) {
      let len1 = centerExpend(i,i)
      let len2 = centerExpend(i,i+1)
      let max = Math.max(len1,len2)
      if(max> end-start) {
          start = i- ((max-1)>>1)
          end = i+(max>>1)
      }
  }
  return s.substring(start,end+1).length
}
console.log(long('ABBBBA'));