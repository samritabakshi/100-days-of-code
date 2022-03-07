/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [],i=0;
    let operators = ['+','*','/','-']
    while(i<tokens.length){
        if(operators.indexOf(tokens[i]) == -1){
            stack.push(parseInt(tokens[i]))
        }else{
            let number2 = stack.pop();
            let number1 = stack.pop();
            switch (tokens[i]) {
                case "+": {
                    stack.push(number1 + number2);
                    break;
                } case "-": {
                    stack.push(number1 - number2);
                    break;
                } case "/": {
                    stack.push(Math.trunc(number1 / number2));
                    break;
                } case "*": {
                    stack.push(number1 * number2);
                    break;
                }
            }
        }
        i++;
    }
    return stack.pop();
};