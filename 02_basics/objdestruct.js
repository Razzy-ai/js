const course = {
    course: "js in hindi",
    price: 999,
    tutor: "razzy"
}

// console.log(course.tutor)
// its de structuring (can be written as )  mostly used in react
const  {tutor : tut } = course
console.log(tut)


// if api is there it doesn't mean you will get only objects but can also get arrays