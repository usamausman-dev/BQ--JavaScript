// var user = "Usama"
// var user = "Mutiba"

// var user;
// user = "Mutiba"
// let user = "Usama";
// user = "Mutiba";

// function name(params) {

// }

const username = () => {
  console.log("Usama");
  const anotherFunction = () => {
    console.log("dsra wala");
  };

  anotherFunction();
};

username();

// // setTimeout(username,3000)
// setTimeout(() => console.log("Usama"), 3000)

// let captialcase = (data) => data.slice(0,1).toUpperCase()+data.slice(1).toLowerCase()

// console.log(captialcase('uSaMa'))

let myObj = {
  name: "usama",
  institute: "banoqabil",
};

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

myObj.name == "usama"
  ? console.log("welcome")
  : myObj.name == "usman"
  ? console.log("Aye apka Intezaar Tha")
  : console.log("Aye apka ");

// const myFunc = () => {
//     console.log("Hello")
//     const anotherFunction = () => {
//         console.log("Another")
//     }
//     anotherFunction()
// }
// myFunc();

// setTimeout(() => {
//     console.log("Hello")
// }, 3000)

// const myObj = {
//     username: "Usama",
//     id: "CSC18F076"
// }

// const { username, id } = myObj;
// // console.log("My Name is " + myObj.username + " and my University ID is " + myObj.id)
// console.log(`My Name is ${username} and my

//             Uni ID is ${id}`)

let myAge = 24;
let nationality = "Pakistani";

if (myAge > 24) {
  console.log("Hello");
} else {
  console.log("Not Allowed");
}

//ternary Operators
myAge > 24 && nationality == "Pakistani"
  ? (console.log("hello"), console.log("hello"))
  : myAge == 24
  ? console.log("Allowed")
  : console.log("Not Allowed");

// Rest Operator , Spread Operator

/// ...

// const sum = (...num) => {
//     let sum = 0;
//     for (let i in num) {
//         sum += num[i]
//     }

//     return sum
// }

// let anyNumSum = sum(1, 2, 3, 5, 6, 7, 8.7738, 89383, 939)
// console.log(anyNumSum)

// const arr1 = [1, 23, 45, 67];
// console.log(arr1)

// console.log(Math.min(...arr1))

// const arr2 = [12, 35, 78, ...arr1]
// console.log(arr2)

// const arr3 = [...arr1, ...arr2]
// console.log(arr3)


//LOCAL STORAGE 

const getData = () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // let userData = {
    //     email: email,
    //     password: password
    // }

    let userData = { email, password }
    console.log(userData)

    window.localStorage.setItem('user', JSON.stringify(userData))
}

const getLocalStorageData = () => {

    // let data = localStorage.getItem('user')
    // console.log(JSON.parse(data))
    localStorage.removeItem('user')

}
