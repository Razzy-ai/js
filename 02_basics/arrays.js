// const myarr = ["razzy" , 2 ,5,6,4,90]
// console.log(myarr[0])

// const myarr2 =  new Array(1,2,3,4,4)

// myarr.push(12);
// console.log(myarr)

// myarr.unshift(9)
// myarr.shift()
// myarr.includes(9)
// myarr.indexOf(5)


// const newarr = myarr.join()
// console.log(myarr)
// console.log(newarr)
// console.log(typeof newarr)


// slice & splice
// slice = returns copy
// splice = removes  ele from actual arr and insert new ele in their position means original arr manipulates here

const myarr = [34,52,67,88,99,12,65,76]
console.log("A = ",myarr)

const myn1  = myarr.slice(1,3)
console.log("B = ",myarr)
console.log(myn1)


const myn2  = myarr.splice(1,3)
console.log("C = ",myarr)
console.log(myn2)
