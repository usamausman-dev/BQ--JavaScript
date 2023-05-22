// var user = "Usama"
// var user = "Mutiba"

// var user;
// user = "Mutiba"
// let user = "Usama";
// user = "Mutiba";

// function name(params) {

// }

const username = () => {
    console.log("Usama")
    const anotherFunction = () => {
        console.log("dsra wala")
    }

    anotherFunction();

}

username();

// // setTimeout(username,3000)
// setTimeout(() => console.log("Usama"), 3000)

// let captialcase = (data) => data.slice(0,1).toUpperCase()+data.slice(1).toLowerCase()

// console.log(captialcase('uSaMa'))

let myObj = {
    name: 'usama',
    institute: 'banoqabil'
}

// const {name , institute} = myObj


// console.log("My Name is " + myObj.name + " and Iam instructor @ " + myObj.institute)
// console.log(`My Name is ${name} and I             


// am Instructor @ ${institute}`)

// if (myObj.name == 'usama') {
//     console.log("welcome")
// }
// else {
//     console.log("Aye apka Intezaar Tha")
// }

myObj.name == 'usama'
    ?
    console.log('welcome')
    :
    (
        myObj.name == 'usman'
            ?
            console.log("Aye apka Intezaar Tha")
            :
            console.log("Aye apka ")
    )


