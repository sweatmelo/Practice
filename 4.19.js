const merge = (m, n) => {
  let i = 0,
    j = 0
  let res = []
  while (i < m.length && j < n.length) {
    if (m[i] < n[j]) res.push(m[i++])
    if (m[i] > n[j]) res.push(n[j++])

  }
  while (i <m.length) res.push(m[i++])
  while (j <n.length) res.push(n[j++])
  return res
}

console.log(merge([0,2, 4, 5], [1, 3, 7]));
