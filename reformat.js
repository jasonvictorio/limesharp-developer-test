function reformat(str) {
  const noVowelLowercase = str.replace(/[aeiou]/gi, '').toLowerCase()
  return noVowelLowercase[0].toUpperCase() + noVowelLowercase.slice(1)
}

function reformat2(str) {
  return [...str]
    .filter((char) => !/[aeiou]/i.test(char))
    .map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
    .reduce((_str, char) => str.concat(char), '')
}

function reformat3(str) {
  return [...str].reduce((_str, char, i) => {
    return !/[aeiou]/i.test(char)
      ? i === 0
        ? _str.concat(char.toUpperCase())
        : _str.concat(char.toLowerCase())
      : _str
  }, '')
}
