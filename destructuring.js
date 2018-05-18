var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]



// list matching
var [a, , b] = [1, 2, 3];

// object matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode()

// Can be used in parameter position
function g({ name: x }) {
    console.log(x);
}
g({ name: 5 })

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;