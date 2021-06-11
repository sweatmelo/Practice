function replaceSpace( s ) {
  // write code here
  while(s.indexOf(' ') != -1) {
      let index = s.indexOf(' ')
      s = s.concat(s.slice(0,index),'%20',s.slice(index+1))
      console.log(s);
}
  return s
}

console.log(replaceSpace('23 4'));