function BFS(node) {
  let res = []
  let stack = [node]
  while(stack.length) {
    const l  = stack.shift()
    if(l.left) {stack.push(l.left)}
    if(l.right) {stack.push(l.right)}
    res.push(l)
  }
  return res
}

let map = new Map()
map.set(1,2)
map.set(3,2)
map.set(4,2)
//console.log([...map.keys()][0]);

function mergeSort(arr) {
  if(arr.length == 1) return arr
  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
  let l1  = left.length,l2 = right.length,i=0,j=0,res=[]
  while(i<l1&&j<l2) {
    if(left[i]<=right[j]) res.push(left[i++])
    if(left[i]>=right[j]) res.push(right[j++])
  }
  while(i<l1) res.push(left[i++])
  while(j<l2) res.push(right[j++])
  return res
}

function Quick(arr,start,end) {
  let i=start,j=end
  if(start<end){
    let tmp = arr[i]
    while(i!=j) {
      
      while(i<j&& arr[j]>tmp) j--
      arr[i] =arr[j]
      while(i<j&&arr[i]<tmp) i++
      arr[j]=arr[i]
    }
    arr[i] = tmp
    Quick(arr,start,i)
    Quick(arr,i+1,end)
  }
}
function quickSort(arr,start,end) {
  let i= start,j=end ,temp
  if(start<end) {
     temp = arr[i]
    while(i!=j) {
      //temp = arr[i]
      while(i<j && arr[j]>=temp) {
        j--
      }
      arr[i] = arr[j]
      while(i<j && arr[i]<temp) {
        i++
      }
      arr[j] = arr[i]
    }
    arr[i] = temp
    quickSort(arr,start,i)
    quickSort(arr,i+1,end)
  }
 // return arr
}
let arr =[8,4,81,2,35,1,8]
quickSort(arr,0,6)
console.log(arr);