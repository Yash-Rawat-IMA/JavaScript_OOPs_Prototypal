function Drink(name)
{
    if(!new.target){
        throw new Error("Drink must be called with a new keyword");
    }
    this.name=name;
    console.log(`Hi!, Have good ${this.name} drink`)
}

let tea = new Drink("tea");     //print the console.log() normally
let coffee = Drink("coffee");   //throws the error message