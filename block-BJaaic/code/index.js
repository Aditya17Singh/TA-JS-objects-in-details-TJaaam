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

//user
// {
//     location:"Himachal",
//     numberOfLegs : "4",
//     _proto_:{
//         eat(){

//         }
//         changeLocation(){

//         }
//         summary(){

//         }
//     }
// }



function createUser(location,numberofLegs){
    let user = Object.create(userMethod);
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}