console.log("hello world")
/**
 * @type {string}
 */
const a="szia hamsuga kiraly"
console.log(a)
/**
 * @type {string[]}
 */
const tomb = ["szai","a","hamsuga"]
console.log(tomb[0])
for (let i=0;i<tomb.length;i++) {
    console.log(tomb[i])
}
for (const a of tomb) {
    console.log(a)
}
for (const key in tomb){
    console.log(`${key}:${tomb[key]}`)
}
/**
 * @type {{nev:string,age:number}}
 */
const b = {
    nev:"hamsuga",
    age:18,
}
console.log(b)