// Immediately Invoked Function expression (iife)  

// global scope is in problems due to pollution in it
(function chai() {
    console.log("DB connected")
})()

// chain()
( (name) => {
    console.log(`DB Connected ${name}`)
})("rzayy")
