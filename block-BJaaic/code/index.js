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
function createUser(location,numberofLegs){
    let user = Object.create(userMethod);
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}
function createDog(location,numberofLegs,name,color){
    let user = createUser(location,numberofLegs)
    Object.setPrototypeOf(user,dogsMethod);
    user.name = name;
    user.color = color;
    return user;
}

let dogsMethod = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(name){
        this.name = name;
        return this.name
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color
    },
    summary(){
        return (`I am ${this.name} and I am of ${this.color} color. I can also bark`)

    },
}

Object.setPrototypeOf(dogsMethod,userMethod)