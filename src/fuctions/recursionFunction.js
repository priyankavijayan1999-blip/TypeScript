"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function factorial(n) {
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));
//# sourceMappingURL=recursionFunction.js.map