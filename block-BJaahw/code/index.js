// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
    let obj = Object.create(data);
    obj.name = name;
    obj.age = age;
    return obj;
}
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
let data = {
    sayHello: function(user){
        return `Welcome ${user}`
    }
}
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let person1 = createUser("Aditya", 24);
let person2 = createUser("Saurav", 25);
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function CreateUser(name, age){
  this.name = name;
  this.age = age
}

CreateUser.prototype = {
  sayHello: function(user){
    return `Welcome ${user}`
  }
}
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
let person1 = new CreateUser("Aditya", 24);
let person2 = new CreateUser("Saurav", 25);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.
class CreateUser{
  constructor(name,age){
  this.name = name;
  this.age = age;
  }
  sayHello (user){
    return `Welcome ${user}`
  }
}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let person1 = new CreateUser("Aditya", 24);
let person2 = new CreateUser("Saurav", 25);
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.




