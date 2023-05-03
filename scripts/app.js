// DAY 1 - 4 APR 

// alert("Hello JS")
// var user = prompt("Your Name PLease", "Usama")
// alert(user)

// var arr = ['hello', 'hi']
// document.write(arr)
// console.log(arr)

// var yusraImranBanoQabil = "jee Sahi kaha , yeh pagal hai"; //camelCase
// var YusraImranBanoQabil; // PascalCase
// var yusra_imran_bano_qabil //snake_case

// console.log(yusraImranBanoQabil)
// var num = 13
// console.log(num)

// var num1 =+ prompt("Num 1 Please")
// var num2 =+ prompt("Num 2 Please")

// console.log(Number(num1) + Number(num2))
// console.log(num1+num2)

// console.log("1"+"2")

// console.log(2+6)
// console.log(2-6)
// console.log(2*6)
// console.log(2/6)
// console.log(2**6)

// console.log(((1+(6/7))*(8/9)+6)-(12*5)/3)
// var name = "Usama"
// var fname = "Usman"

// console.log(name+ " " + fname)

// var num = 2
// console.log(num)
// num = num+10
// num *=10
// num++
// ++num
// console.log(num)

// DAY 2 

// var user = "Abdullah"

// if (user == 'usama') {
//     console.log("Welcome Sr")
// }

// else if (user == 'abdullah') {
//     console.log('Please On the server')
// }

// else {
//     console.log('Go to your classroom')
// }

// var num = 5

// if(num != 5){
//     console.log('correct')
// }
// else{
//     console.log('wrong')
// }

// console.log(num >= 5)

// var nationality = prompt('Your Nationality?')
// var age = 19

// if (nationality == 'pakistani' || nationality == 'Pakistani') {
//     if (age >= 18) {
//         console.log('go to the voting room')
//     }
//     else {
//         console.log('you are under age')
//     }

// }
// else {
//     console.log("You're not eligible")
// }


// if ((nationality == 'pakistani' || nationality == 'Pakistani' || nationality=='PAKISTANI') && age>=18) {
//     console.log('Go to the voting Room')
// }
// else {
//     console.log("You're not eligible")
// }

// console.log(nationality.toUpperCase())

// if (nationality.toLowerCase() == 'pakistani' && age >= 18) {
//     console.log('Go to the voting Room')
// }
// else {
//     console.log("You're not eligible")
// }

var arr = ['zohaib', 'talha', 'shehryar', 'asmat', "haris", "maqsood"]
// console.log(arr[1])
// arr[3] ='asmat khan'
// arr[6] = 'Usama'

// arr.push("Usama","haris")
// arr.unshift("Usama","haris")
// var abc = arr.pop()
// var abc = arr.shift()

// arr.splice(2,1,"haris","maqsood")
// var abc = arr.slice(1,4)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log(arr.length)

// Chap 22 - 30

 // var sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio, unde ipsum culpa itaque fugiat sapiente, ad necessitatibus voluptates porro placeat rerum dignissimos praesentium repellat reiciendis ducimus voluptatibus non facilis!"
    // var wordtoReplace = "adipisicing elit"



    // for (var i = 0; i < sentence.length; i++) {
    //     if (sentence.slice(i, i + wordtoReplace.length) == wordtoReplace) {
    //         sentence = sentence.slice(0, i) + "Hello" + sentence.slice(i + wordtoReplace.length)

    //     }

    // }

    var sentence = "do it or do it for others"
    
    // console.log(sentence.replace(/do/g,"hello"))
    // console.log(sentence.indexOf("it"))
    // console.log(sentence.lastIndexOf("it"))
    var user = "usAma"
    console.log(Math.round(67.7897))

    console.log(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase())


// var myage = "24.890"
// undefined
// parseInt(myage)
// 24
// parseFloat(myage)
// 24.89
// var num = 7897980
// undefined
// num.toString()
// '7897980'
// var numbe = 16.789797
// undefined
// numbe.toFixed(2)
// '16.79'


// CHAP 30 to 38


// var current = new Date()
    // console.log(current)
    // var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
    // console.log(current.getFullYear())
    // console.log(current.getDate())
    // console.log(days[current.getDay()])

    // var myDOB  = new Date("July 19 , 1999 10:07")
    // // var myDOB  = new Date()
    // myDOB.setDate(19)
    // // myDOB.setMonth(6)

    // console.log(myDOB)


    // var myage = current - myDOB
    // console.log(myage/(1000*60*60*24*365.25))
    // age calculator
    function ageCalculator(userDOB) {
        var current = new Date()
        var myage = current - userDOB
        return myage / (1000 * 60 * 60 * 24 * 365.25)
    }

    var myDOB = new Date("July 19 , 1999 10:07")
    var myage = ageCalculator(myDOB)
    console.log(myage)

    function loginUSer() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        console.log(email,password)
    }
    // function demo() {
    //     console.log("I am running")
    // }

    // function my_mouse() {
    //     console.log("Mouse Event")
    // }

    // Chap 39 - 49
    // var user = "hey"
    // switch (user) {
    //     case "Usama":
    //         console.log("Yes,Sir")
    //         break;

    //     case "Aisha":
    //         console.log("Yes,Beta")
    //         break;

    //     case "Irshad":
    //         console.log("Yes,CR")
    //         break;

    //     default:
    //         console.log("Yes,Pagalo")
    // }



    // for (var i = 0; i < 10; i++) {
    //     console.log(i)
    // }


    // var i = 0;
    // while (i < 10) {
    //     console.log(i);
    //     i++;
    // }

    // var i = 0;
    // do {
    //     console.log(i);
    //     i++;
    // }
    // while (i>3);



