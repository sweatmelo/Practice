var findNumberIn2DArray = function(matrix, target) {
  matrix.forEach(e=>{
      e.forEach(ele=>{
        console.log(ele);
          if(target == ele)
          return true
      })
  })
  return false
};

// console.log(findNumberIn2DArray([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5));

let obj = {
  name:'chx',
  show(a) {
    console.log(this.name,a);
  }
}

let obj1 = {
  name:'fg'
}

let fn = obj.show.bind(obj1)
// fn('a')

function findMin(nums) {
  for(let i = 0; i < nums.length; i++){
      if(nums[i] < nums[0]){
          return nums[i];
      }
  }
  return nums[0];
}

//console.log(findMin([2,2,1,0]));

var longestPalindrome = function(s) {
  if(s.length<2) {
    return s
  }
  let res = ''
  for(let i=0;i<s.length;i++) {
    helper(i,i)
    helper(i,i+1)
  }
  function helper(m,n) {
    while(m>=0 && n<s.length&& s[m] == s[n]) {
      m--
      n++
    } 
    if(n-m-1 >res.length) {
      res= s.slice(m+1,n)
    }
  }
  return res
}

console.log(longestPalindrome('asfsrghgrswuriowufasnfkl'));

