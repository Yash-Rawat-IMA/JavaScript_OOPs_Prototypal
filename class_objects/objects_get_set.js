const User = {
    _email: "xyz123@gmail.com",
    _password : "abc123xyz",

    get password()  //this property of "get" works directly on the property no matter if you've done it private using underscore or it's normal
    {
        return this._password.toUpperCase()
    },

    set password(value)
    {
        this._password=value
    }
}

let myUser = Object.create(User)
console.log(myUser._email)  //here also I can directly access the email using underscore(_)
let myUser1 = Object.create(User)
console.log(myUser1.email) //undefined

console.log(myUser._password)  //here we get the direct access which was not supposed to be the case
console.log(myUser.password) //but this has a getter and setter so it gives value what getter is returning that is in upper case
// password: though get and set is written as funtion but we are not supposed to put password() -> paranthesis after it because getter and setter themselves take care of such things(implicitly making it a property and ignoring the _(underscore) while getting and setting the property) 

// Getters and setters work as properties, not functions. That’s why you don’t use parentheses when accessing them.

// Using _(underscore) doesn't make something private — it’s a developer discipline.

// to make something private you need to declare it first using # but that's actually used only inside the class

// And in function you can do "let _propertyName = propertyName" instead of "this._propertyName = propertyName" to make something private and not reachable outside the class