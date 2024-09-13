const user = {
    username: "razzy",
    price: 234,

    welcomemessage: function(){
        // this refer to the  current values
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()

console.log(this)


// function chai(){
//     let username = "raz"
//     // printing this inside a function gives so many values
//     console.log(this)
//     // gives error because this will not work in function , only work in object
//     console.log(this.username)
// }
// chai()
// // Gives error
// const chai = function(){
//     let username = "raz"
//     console.log(this.username)
// }





// How to declare function by arrow function
// this will not even work in arrow function gives error
const chai = () => {
    let username = "raz"
    console.log(this.username)
}
chai()


// const addnum = (num1,num2) => {
//     return num1+num2
// }
// OR
// const addnum = (num1,num2) =>  num1+num2
// OR
// const addnum = (num1,num2) =>  (num1+num2)
// OR if u dont have paranthesis and want to return an object
const addnum = (num1,num2) =>  ({username:"hamyy"})

console.log(addnum(2,3))