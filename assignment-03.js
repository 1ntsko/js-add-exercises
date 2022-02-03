function numObj(arr) {
  return arr.map(i => {
    const tmp = {};
    tmp[i] = String.fromCharCode(i);
    return tmp;
  });
}

console.log(numObj([118, 117, 120])); // ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101, 121, 110, 113, 103])); // ➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
console.log(numObj([118, 103, 110])); // ➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}
