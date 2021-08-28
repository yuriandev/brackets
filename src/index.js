module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      let openSymbol = bracketsConfig[j][0];
      let closedSymbol = bracketsConfig[j][1];

      if (currentSymbol === openSymbol) {
        if (
          currentSymbol !== stack[stack.length - 1] ||
          currentSymbol !== closedSymbol
        ) {
          stack.push(currentSymbol);
        } else {
          stack.pop();
        }
      } else {
        if (currentSymbol === closedSymbol) {
          let topElement = stack[stack.length - 1];

          if (topElement === openSymbol) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
  }

  return stack.length === 0;
};
