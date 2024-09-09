// objects can be declared as a literal and constructor
// the only difference is when it declared from contructor it form singleton

// singleton
// Object.create()

const mysym = Symbol("key1")

// object literals
const JsUser = {
    name:"razzy",
    "age": 18,
    // symbols syntax
    [mysym] : "mykey1",
    location: "jaipur",
    email: "razzy.123@google.com",
    isLoggedin: false,
    Lastlogindays: ['monday','saturday']
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.age)

// console.log(JsUser.mysym)
// console.log(typeof JsUser.mysym)

// how to access symbol 
console.log(JsUser[mysym])

JsUser.email = "razzy345@chatgpt"
// Object.freeze(JsUser)
JsUser.email = "razzy345@microsoft"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("heyyyyyyyyy")
}
JsUser.greetingtwo = function(){
    console.log(`heyyyyyyyyy  ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())