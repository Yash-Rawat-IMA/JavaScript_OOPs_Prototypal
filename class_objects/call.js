function SetUserName(username)
{
    // Complex DB Calculations
    this.username=username;
    console.log(`Setting your username to ${this.username}`);
    // here this is refering to CreateUser() with "Yash" as username
    console.log(this);
}

function CreateUser(username, email, password)
{
    SetUserName.call(this, username);   //here, this sends the current context to the function it's calling so that it can actually set the username in the current function
    // if we don't use this over here, it won't set the username in the current function as without "this", it could only be called without any reference.
    // "this" holds the reference to return the value
    /* 
        Here, you're borrowing SetUserName and using .call(this, username) to ensure this inside SetUserName refers to the current instance of CreateUser.

        Without .call(this), SetUserName would be a standalone function, and this inside it might point to the global object (or be undefined in strict mode).
    */
    this.email=email;
    this.password=password;
}

let MyUser = new CreateUser("Yash", "yash@travhood.in", "123abc");
console.log(MyUser);