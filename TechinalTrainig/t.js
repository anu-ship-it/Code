const prec = op => ({ '+':1, '-':1, '*':2, '/':2, '^':3 }[op] || 0);

function infixToPostfix(exp) {
  let stack = [], out = '';

  for (let c of exp) {
    if (/[a-zA-Z0-9]/.test(c)) out += c;

    else if (c === '(') stack.push(c);

    else if (c === ')') {
      while (stack.at(-1) !== '(') out += stack.pop();
      stack.pop();
    }

    else {
      while (
        stack.length &&
        (prec(stack.at(-1)) > prec(c) ||
        (prec(stack.at(-1)) === prec(c) && c !== '^'))
      ) out += stack.pop();

      stack.push(c);
    }
  }
  return out + stack.reverse().join('');
}

function infixToPrefix(exp) {
  const rev = exp
    .split('')
    .reverse()
    .map(c => c === '(' ? ')' : c === ')' ? '(' : c)
    .join('');

  return infixToPostfix(rev).split('').reverse().join('');
}

/* ===== Example ===== */
const expr = "(A+B)*C-D/E";

console.log("Infix  :", expr);
console.log("Postfix:", infixToPostfix(expr));
console.log("Prefix :", infixToPrefix(expr));
/* ===== Output =====
Infix  : (A+B)*C-D/E
Postfix: AB+C*DE/-
Prefix : -*+ABC/DE
*/
