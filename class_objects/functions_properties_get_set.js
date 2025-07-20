// Getter and setter for the function
// it could be seen in many JS code files as it was one of the prominent way for getter and setter when there were no concept of classes and mostly codes were written using the functions 

// Generally these getter and setter methods were implemented before ES6

function User(email, password)
{
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "password", {
        get: function(){
            return `${this._password.toUpperCase()}`
        },
        set: function(value){
            this._password=value;
        }
    })  //defining the property : (this) : gives the current context, ("propName") : takes which property has to be targeted, {object}: in which we define the properties or getter and setter for the property we are targeting

// iska simple sa matlab ye hai ki now this (current context) password has the object in which we have defined getter and setter 

    Object.defineProperty(this, "email", {
        get: function(){
            return `${this._email.toUpperCase()}`
        },
        set: function(value){
            this._email=value;
        }
    })
}
const myUser = new User("xyz123@gmail.com", "abc123xyz");
// Problem: Here we can directly access the properties using underscore
console.log(myUser._email)  
console.log(myUser._password)
// Below 2 are done by getter and setter
console.log(myUser.email)  
console.log(myUser.password)

// To deal with that problem of accessing the properties name using _(underscore) could be solved using "let" keyword instead of "this"
function StrictUser(email, password)
{
    let _email = email;
    let _password = password;

    Object.defineProperty(this, "password", {
        get: function(){
            return `${_password.toUpperCase()}`
        },
        set: function(value){
            _password=value;
        }
    })  
    Object.defineProperty(this, "email", {
        get: function(){
            return `${_email.toUpperCase()}`
        },
        set: function(value){
            _email=value;
        }
    })
}

let myStrictUser = new StrictUser("xyzabc123@gmail.com", "abc123xyz")
// It will give the correct results as being returned by the getter of the respective properties
console.log(myStrictUser.email)
console.log(myStrictUser.password)

// Below 2 are now undefined as now instead of using "this" we are using "let"
console.log(myStrictUser._email)
console.log(myStrictUser._password)