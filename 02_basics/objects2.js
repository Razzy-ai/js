// object declaration as a constructor
const tinder = new Object()
console.log(tinder)

// as a literal
const tinderUser = {} 
console.log(tinderUser)

tinder.id = "123"
tinder.name = "razyy"
tinder.isloggedin = false

const regularUser = {
          email : "razzyy123@google.com",

          fullName: {  
              UserName: {
                           firstName: "razzy",
                           lastName: "honey"
             }
          },

          age: 12
}

console.log(regularUser.fullName.UserName)


// how to concat the two objects
// const obj1 = {1:"a" , 2:"b"}
// const obj2 = {3:"a" , 4:"c"}

// // const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
// const obj3 = {...obj1,...obj2}
// console.log(obj3)



// Important use in database
console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('id'))