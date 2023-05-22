// var data = {
//     name : "usama",
//     fname : "usman",
//     age : 24,
//     hobbies : ['sleeping','photography','overthinking']
// }

// var myObj = {
//     name: "Usman",
//     fname: "Ghulam Rabbani",
//     age: 50,
//     wifes : ['Fouzia Noureen'],
//     kids : [
//         {
//             sons : ['Usama'],
//             daughters : ['Aisha','Nitashah','Hoorain']
//         }
//     ]

// }

// console.log(myObj.kids[0].sons[0])

// var myMath = {
//     PI : 3.1426,
//     sin : function(val){
//         return Math.sin(val)
//     }
// }


// console.log(myMath.sin(30))

// function Student(name, University, Campus, ID) {
//     this.name = name;
//     this.University = University;
//     this.Campus = Campus;
//     this.ID = ID;
//     this.getID = function () {
//         return "BQ-" + this.Campus + "-" + this.ID
//     }
// }


class Student {
    constructor(name, University, Campus, ID) {
        this.name = name;
        this.University = University;
        this.Campus = Campus;
        this.ID = ID;
        // this.getID = function () {
        //     return "BQ-" + this.Campus + "-" + this.ID;
        // };
    }

    getID() {
        return "BQ-" + this.Campus + "-" + this.ID;
    }
}



var std1 = new Student("laiba", "NED", "QCF", "001");
var std2 = new Student("qURAT UL aIN", "FUUAST", "QCF", "002");

// console.log(std1, std2)
// console.log(std1.getID())

// console.log('laiba' in std1)

for (var i in std1) {
    console.log(std1[i])

}

console.log(std1['name'])

function goToHell() {
    // window.location.href="https://github.com/"
    var monkeyWindow = window.open("", "", "width=420,height=380,left=200,top=100");
    var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars < br > named the Order of Friars Minor Capuchin who wear < br > brown robes with large hoods covering their heads.</p > ";
    monkeyWindow.document.write(windowContent);

}

