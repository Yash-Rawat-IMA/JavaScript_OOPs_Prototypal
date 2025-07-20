class User{
    constructor(username, email, password)
    {
        this.username=username
        this.email=email
        this.password=password
    }
}

const MyUser = new User("Yash", "ysh123@gmail.com", "123abc");
// console.log(`Easy user! password easily available: `, MyUser.password)
// Here we can access the password easily without any kind encription or customization

class StrictUser{
    constructor(email, password)
    {
        this.email=email
        this.password=password
    }
    
    // getter and setter are both used together if any one is in the class, then it will throw an error 
    
    // get : is used to access the password as we want the user can see
    // 1.
    /* 
    get password(){
        return this.password.toUpperCase();
    }
 */

    // 4.
    get password(){
        return `This is my Password in an encripted from so that you don't get it or crack it: ${this._password.toUpperCase()}😂😂😂😂😂, I told you, you can't get it or crack it`
    }

    // 2. This gave me the firts error
    // set : takes the parameter to be set
    /* 
    set password(value){
        this.password = value;
    }
        // this is kind of a race condition between constructor and setter
    //here is a problem that we are setting the password in the constructor as well as here in the setter function also, which throws an error as JS get confused that which one to set and throws maximum call stack size exceeded
 */

    // 3. After resolving the first error in 2nd declaration (of setter), again got an error in 1st (getter), to resolve that we'll create 4th (getter)
    set password(value){
        this._password = value  //here to avoid the race condition we create a new property, though by the same name butadding a _ (underscore) in the front

        // but this alone won't work as now "getter" will get confuse that from whom to actually get the value again giving the same error of maximize call stack but this time with the "getter" 

        // to deal with it now change the getter to (underscore) _nameOfProperty
    }
}

const myStrictUser = new StrictUser("strict@gmail.com", "123abc")
// console.log(myStrictUser.password)

// Syntax
// get
/* 
    get propertyName(){
        // optional calculations
        return `We can return the property we want: ${this._propertyName}`
    }
*/

// set
/* 
    set propertyName(value)
    {
        this._propertyName = value
    }
*/
// we return in getter but not in setter

// _propertyName : underscore(_) doesn't have a literal meaning but it tells us as a programming practice that this property is going to have getter and setter and now this is not a normal property

class Employee{
    constructor(name, salary)
    {
        this._salary = salary;
        this._name = name;
    }

    get salary()
    {
        return `Sorry! You're not allowed to see the Salary directly but still I can show you a glimpse of it: ₹ ${this._salary}`
    }

    set salary(value)
    {
        if(value<0)
            console.error("Come on! Give a right salary not a negative one")
        else{
            this._salary = value
        }
    }
}

let myEmp = new Employee("ABC", -50000); 
//here there's an problem, we're setting a negative salary which is just not allowed as in setter, where we set the value, there's a salary check for negative salary. But here we're actually invoking the constructor not the salary setter, that's why we need to put a checker in the constructor too


//console.log(myEmp.salary) 
//here we get what our getter function is returning to us, not the exact or ditect access to the salary


//console.log(myEmp._salary) 
//but here, we tackle another problem, that accessing the salary was not to be allowed that's why we created a setter and getter function. Still no one can stop us from accessing the salary using a underscore(_salary)


// Now to tackle this problem we have # (as discussed in enscapsulation), which sets the property to private so that no one could access that outside the class without a getter 


myEmp.salary = -50000 
//here it'll throw an error as now we are setting up the salary to negative through a setter instead of constructor


class StrictEmployee{
    #salary
    constructor(name, salary)
    {
        if(salary<0)
            throw new Error("How can you give salary as negative")
        this.name = name;
        this.#salary=salary;
    }

    set salary(value)
    {
        if(value < 0)
            console.error("Kindly don't give negative salary")
        this.#salary=value;
    }

    get salary()
    {
        return `Though I am not allowed to show you the salary but just to let you know, your salary is ${(this.#salary)/100} multiply by 100`
    }
}

// let myStrictEmpNeg = new StrictEmployee("ABCDE", -90000);  //throws error defined in the constructor
let myStrictEmpPos = new StrictEmployee("ABCDE", 90000);  // creates an instance of the class StrictEmp
console.log(myStrictEmpPos.salary);  //gets the salary through getter
// console.log(myStrictEmpPos._salary)  //undefined

// console.log(myStrictEmpPos.#salary) //gives error

myStrictEmpPos.salary=-9000  //throws the error
myStrictEmpPos.salary=100000  //throws the error
console.log(myStrictEmpPos.salary)  //updates the salary to 100000 and returns the statement defined in the getter not the actual salary so that user cannot access the salary directly


