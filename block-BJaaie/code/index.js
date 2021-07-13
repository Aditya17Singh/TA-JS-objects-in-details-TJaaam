    let userMethod = {
    eat:function(){
        console.log(`I live in ${this.location} an I can eat`)
    },
    changeLocation:function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary:function(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}
function CreateUser(location,numberofLegs){
    this.location = location;
    this.numberofLegs = numberofLegs;
}

CreateUser.prototype.eat = function(){
    
}




// let dogsMethod = {
//     bark(){
//         alert(`I am ${this.name} and I can bark 🐶`)
//     },
//     changeName(name){
//         this.name = name;
//         return this.name
//     },
//     changeColor(newColor){
//         this.color = newColor;
//         return this.color
//     },
//     summary(){
//         return (`I am ${this.name} and I am of ${this.color} color. I can also bark`)

//     },
// }

// function createDog(location,numberofLegs,name,color){
//     let user = createUser(location,numberofLegs)
//     Object.setPrototypeOf(user,dogsMethod);
//     user.name = name;
//     user.color = color;
//     return user;
// }

// Object.setPrototypeOf(dogsMethod,userMethod)