// global and local

// scopes are different in node , windows





// NESTED Function
// child function can access parent function
function one(){
    const usname = "razzy"

    function two(){
        const website = "youtube"
        console.log(usname)
    }
    // console.log(website)
    two()
}
one()


