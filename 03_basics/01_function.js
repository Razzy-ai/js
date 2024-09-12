function sayname(){
 console.log("hey")
}
sayname()

function addnum( num1 , num2){
    // console.log(num1 + num2)
    return num1+num2
}
let result = addnum(2,3)
console.log("result is : ",result)



// sam is default value
function loginuser(UserName = "sam"){
      if(UserName === undefined){
        console.log("please enter a name")
        return
      }
      return `${UserName} successfully login`
}
console.log(loginuser("Raz"))


// ... is called as rest or spread
// function calculateCardValue(val1,val2, ...num1)   prints from 4 to 76
function calculateCardValue(...num1){
      return num1
}
console.log(calculateCardValue(233,3,4,5464,76))




// how to handle objects in functions
const user = {
      username:"razzy",
      price: 123
}
function handleObjects(anyobject){
      console.log(`Name is ${anyobject.username} and Price is ${anyobject.price}`)
}
// handleObjects(user)
handleObjects({
      username:"hammy",
      price: 789
})



// Arrays with function
const mynewarr = [200,30,40,500,600]
function removescndarr(getarray){
      return getarray[1]
}

// console.log(removescndarr(mynewarr))
console.log(removescndarr([122,44,690,346,798]))

