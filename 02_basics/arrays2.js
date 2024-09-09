const marvel = ["thor" , "ironman" , "spiderman"]
const dc = ['flash' , 'superman' , 'batman']

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

console.log(marvel.concat(dc))

const allheros = [...marvel , ...dc]
console.log(allheros)


const another_arr = [1,23,34,87,[1,4,6,7],89,[2,3,[23,56,98]]]
console.log(another_arr.flat(Infinity))

console.log(Array.isArray("razzy"))
console.log(Array.from("razzy"))

console.log(Array.from({name:"razzy"}))

