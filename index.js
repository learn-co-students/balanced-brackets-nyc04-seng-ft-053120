function isBalanced(str) {
  let bracketLookup = { '[': ']', '(': ')', '{': '}'};
  let bracketStore = [];

  for (let currentBracket of str) {
    let lastBracket = bracketStore[bracketStore.length - 1];
    if (bracketLookup[lastBracket] === currentBracket) {
      bracketStore.pop()
    } else {
      bracketStore.push(currentBracket)
    }
  }

  return bracketStore.length === 0
}