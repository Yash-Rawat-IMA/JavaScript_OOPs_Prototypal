let computer = {
    cpu:12
}

let lenovo = {
    screen: "HD",
    __proto__: computer
}

// Can't do multiple __proto__ to a single object
let hardware = {
    // __proto__: computer,
    __proto__: lenovo
};
//  We can not define two __proto__ properties in a single object as in JS only one proto chaining is allowed doing the single inheritance, multiple inheritanceis not allowed
//This creates the following prototype chaining
// hardware → lenovo → computer → Object.prototype → null

// __proto__ => Not recommended (deprecated, slow, non-standard). It access or change an object’s prototype
console.log(`Computer `, computer.__proto__); //it has no prototype defined in it therefore it gives null prototype
console.log(`lenovo `, lenovo.__proto__);
console.log(`hardware `, hardware.__proto__);

console.log(`hardware accessing the computer property: `, hardware.cpu); //it can access cpu of computer as it takes prototype of lenovo which is already taking proto from computer 


let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);   //setPrototypeOf(obj, prototype): obj=> The object whose prototype you want to change and prototype=> The new prototype object
/* 
    It means that if a property is not found in tesla it'll search in genericCar  
*/

//  Works, but slow
// Set/change an object’s prototype
Object.setPrototypeOf(tesla, computer); //here we can set to multiple prototypes without getting any errors, but it doesn't mean actually we got a multiple inheritance, rather the prototype got updates to the latest one. In this case to computer instead of genericCar

/* 
    It's basically setting the prototype of tesla to genericCar
 */
console.log(genericCar)
console.log(tesla)
console.log(tesla.tyres)    //we can access the properties of genericCar through tesla

// There's a better way of doing this
// Best for reading the prototype
console.log(`Getting prototypes of Tesla`,Object.getPrototypeOf(tesla))   //will take the latest prototype object that is tesla been set to


console.log(tesla.hasOwnProperty('driver')) //yes, true as driver is its own property
console.log(tesla.hasOwnProperty('tyres'))  //tesla can access tyres but that's not its own property 
console.log(tesla.hasOwnProperty('tyre'))   //there's no such property