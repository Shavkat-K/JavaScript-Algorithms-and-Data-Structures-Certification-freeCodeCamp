function translatePigLatin(str) {
  let vowerRegx = /^[aeiou]/
  let consonantRgx = /^[^aeiou]+/
  if (vowerRegx.test(str)) {
    return str + 'way'
  } else {
    let cons = str.match(consonantRgx)
    return str 
      .replace(consonantRgx, '')
      .concat(cons)
      .concat('ay')
  }
}

translatePigLatin("algorithm");
console.log(translatePigLatin("schwartz"))