function next_binary_number(binarray) {
  for (let i = binarray.length - 1; i >= 0; i--) {
    if (binarray[i] === 1) {
      binarray[i] = 0
    } else {
      binarray[i] = 1
      return binarray
    }
  }

  return [1, ...binarray]
}
