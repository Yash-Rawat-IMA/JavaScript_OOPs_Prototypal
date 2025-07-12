function Person(name, age)
{
    // this.name=name
    // this.age=age
    // console.log(this)   //gives the context of this function
    return `Hi! ${name /* this will give the name passed as an argument */}, I know your age is ${this.age /* this gives undefined as it's not defined with this keyword */}!!`
}

let P = new Person("ABC", 23)
console.log(P)  //gets the empty object with the name Person

let P1=Person("Yash", 21)
console.log(P1)

function thisPersons(name, age)/* here you will three dots below the function name as this function may be converted to "class" */
{
    this.name=name; 
    this.age=age;
    // console.log(this);  //this keyword is used with the context of who calls it that means it will print the object who's calling it
    return `Hi! ${this.name}, I am accessing you with "this" keyword, and I know your age is ${this.age}`
}

let P2 = new thisPersons("Yash Rawat", 21);
console.log(P2)

let P3 = new thisPersons("Ayush Rawat", 15)
console.log(P3) //creates the new instance of "thisPersons" by the name of P3, and shows the object with all the properties and values of "thisPerson", given under the arguments

let P4 = thisPersons("John Doe", 43)
console.log(P4) //prints the statement we are returning 


let P5 = thisPersons("John Wick", 45)
console.log(P5)

// We can create more variables without actually declaring them by using "this" keyword

function Teas(type)
{
    this.type=type;

    this.desc=function(){
        return `Hi! This is ${this.type} tea`;
    }   //"desc" is neither a parameter nor a pre-decalared variable rather it's a variable we craeted using "this" keyword and we can craete such more variables on our own just by using "this" keyword
}

let lemonTea = new Teas("Lemon");
console.log(lemonTea.desc())


function Animal(species)
{
    this.species=species;
}

// Adding a method to the shared prototype
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}
// ObjName.prototype is defines the properties and methods to be shared across all instances created by that constructor:- objName
// best for defining shared properties and methods while using function or class

let dog = new Animal("Dog");
console.log(dog.sound())
let cat = new Animal("Cat");
console.log(cat.sound())