//let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).
let x = 5; 
let y = 6; 
console.log(x *= y)


//create new variable 'let1' in lower case.
let k = 'let1'

//Update value 'let1' to upper case.
k = k.toUpperCase()
console.log(k)

//Create another variable with few words and contain 'let1'. use method replace to word 'BANG'
let n = 'I will use let1'
n = n.replace('let1', 'BANG')
console.log(n)
//или
// let n1 = 'let1'
// n = n.replace(n1, 'BANG')

//create comparison operator to log true, when x is NOT equal to y.
console.log(x != y);


//create variable with using addition assignment (+=) for two numbers
let j = 2
let p = 5
let q = j+=p
console.log(q)
//или
let c = 7
console.log((c += 5));

//create variable that should be 'false' with using equality operator
let e = 12;
let g = 14;
let t = e==g
console.log(t)
//или
let d = 16;
console.log(d == 23);