let car = {
    maker: "BMW",
    model: "M5",
    year: 2027,
    start: function(){
        return `${this.maker} ${this.model} bought in ${this.year}, is getting started`
    },
    flex: function(){
        return `Beemer getting Started`
    }
}


// console.log(car.flex())

Array.prototype.Yash = function()
{
    return `Custom method ${this}`; //this gets the array elements who's calling it
}
let MyArray = [1,2,3,4,5];
// console.log(MyArray.Yash())

// class:
// function inside class known as methods
// most common method is constructor

// 1. Inheritance
class Vehicle {
    constructor(maker, type){
        this.maker=maker;
        this.type=type;
    }
    start(){
        return `${this.maker} makes ${this.type} type of vehicle also.`
    }
}

class ArmyVehicles{
    constructor(color, type){
        this.color=color;
        this.type=type;
    }
    making(){
        return `${this.type} of Army Vehicle is of ${this.color}.`;
    }
}

//we can not have more than one class from which we can inherit properties to current class by separating them using ,(comma) as JS follows single inheritance, multiple inheritance can be done using "mixins" or "compositions"

// class Car extends Vehicle, ArmyVehichle : we can't do this, it'll throw an error

class Car extends Vehicle{  
   /*  constructor(carName){
        this.carName=carName;
    } */ //We can't use the constructor for "child" class like this, it'll throw an error
    /* 
    If you want to add a constructor in the child class Car with a carName parameter in addition to the maker and model from the parent Vehicle class, you must:

    Accept all needed parameters in the Car constructor.

    Call super(maker, model) to initialize the base Vehicle class.

    Assign carName to this.carName.

    */

    constructor(maker, type, carName) {
        super(maker, type);           // Call parent constructor
        this.carName = carName;        // Add child-specific property
    }

    drive(){
        return `${this.carName} of ${this.type} type by ${this.maker} is ready to drive.`;
    }
}
let myCar = new Car("BMW", "Sports", "M5 Coupe");
console.log(myCar.start ());
console.log(myCar.drive());


// 2. Enscapsulation
class BankAccount{
    #balance = 0;   //# is used to hide the ata from user directly, we can though create some getter and setter functions to access the balance
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `₹ ${this.#balance}`
    }
}

let myAccount = new BankAccount();
console.log(myAccount.deposit(5000));
console.log(myAccount.getBalance()); //₹ 5000
console.log(myAccount.deposit(7000));
console.log(myAccount.getBalance()); //₹ 12000
console.log(myAccount.deposit(9000));
console.log(myAccount.getBalance()); //₹ 21000
// ctrl+shift+4  => ₹
console.log(myAccount.balane); //undefined as #balance is there not just balance, now access with the method getBalance



// 3. Abstraction
class CoffeeMachine{
    start(){
        // Call Database
        // Filter the Coffee
        //All other kinds of Calculations
        // Then After doing these Calculations we can return whatever we want without letting the "user" know what is happening after calling the function or method
        return `Statrting the Coffe Machine`;   
    }

    brewCoffee(name, type){
        // Again, there may be some complex calculations like what amount of coffee to be brewed etc.

       /*  return `Brewing the ${this.name} coffee for you and will serve you ${this.type}`;    //You're trying to use this.name and this.type, but name and type are passed as parameters and not stored in the class instance — so this.name and this.type are undefined. */

       return `Brewing the ${name} coffee for you and will serve you ${type}`; 
    }

    // We can even have a combined funtion, here we have to pass the arguments in the combined function
    pressStart(name, type){
        let m1 = this.start();
        let m2 = this.brewCoffee(name, type);
        return `${m1} \n${m2}`;
    }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee("Chocolate", "Cold"));

console.log(myMachine.pressStart("Chocolate", "Cold"));

// 4. Polymorphism : doing different tasks under the same name
class Bird{
    fly(){
        return `Flying...........`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Sorry!! I can't fly but Yaa! I can Swim!`;
    }
}

class Sparrow extends Bird{

}

let myPenguin = new Penguin();
let mySparrow = new Sparrow();
console.log(`I am Penguin`,myPenguin.fly())
console.log(`I am Sparrow and I am`, mySparrow.fly())


// 5. static method: can be access through class only and is shared by all the instances or objects of the class

class Calculator{
    static add(a, b)
    {
        return `${a+b}`;
    }
}

let miniCal = new Calculator();
/* 
    console.log(miniCal.add(2, 3));     //static keyword will not let you gonna access this static method 
*/
// to get access to the static method we should access using the class
console.log(Calculator.add(2, 3));


// static is being shared by all but not accessed directly by the instances rather it's accessed using the class itself
class Counter {
    static count = 0;  // Static variable shared at class level

    constructor() {
        Counter.count++;  // Increment static variable every time an instance is created
    }

    getCount() {
        return Counter.count;  // Access via class (not via `this`)
    }
}

let a = new Counter();  // count becomes 1
console.log(a.getCount()); 
let b = new Counter();  // count becomes 2
console.log(b.getCount()); 
let c = new Counter();  // count becomes 3
console.log(c.getCount()); 

console.log(Counter.count); // 3 ✅ Same shared static value


