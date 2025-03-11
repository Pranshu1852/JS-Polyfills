// Array.prototype.mymap=function (callbfunc) {
//     let arr=[];
//     for(let i=0;i<this.length;i++){
//         console.log(this);
//         let value=callbfunc(this[i],i,this);
//         arr.push(value);
//     }

//     return arr;
// }

// Array.prototype.myfilter=function (callbfunc) {
//     let arr=[];
//     for(let i=0;i<this.length;i++){
//         if(callbfunc(this[i],i,this)){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// let arr=[1,2,3,4,5]
// let newarr=arr.myfilter((val,ind, array)=>{
//     return val<3;
// })

// console.log(newarr);










// const person1 = {
//     name: "John",
//     battery: 70,
//     chargeBattery: function(){
//         this.battery = 100;
//     }
// }
 
// console.log(person1);
// person1.chargeBattery()
// console.log(person1)

// const person2 = {
//     name: "cena",
//     battery: 30
// }

// let charge=person1.chargeBattery.bind(person2);



// function multiply(a, b) {
//     return a * b;
// }
 
// const double = multiply.bind(null, 2);
// console.log(double(5));





// const user = {
//     name: "Bhavik",
//     show: function() {
//         console.log(this.name);
//     }
// };

// let bindshow=user.show.bind(user);
 
// setTimeout(bindshow, 1000);





// const obj1 = {

//     name: "Bhavik",

//     greet: function() {

//         console.log(`Hello, ${this.name}`);

//     }

// };
 
// const obj2 = { name: "Thanki" };
 
// obj1.greet.call(obj2);

// obj1.greet.apply(obj2);

// const newGreet = obj1.greet.bind(obj2);

// newGreet();









// function showInfo() {
//     console.log(this);
// }
 
// showInfo.call(null);
// showInfo.apply(undefined);
// showInfo.bind(0)();







// const obj = {
//     a: 10,
//     double: function() {
//         console.log(this.a * 2);
//     }
// };
 
// const fn = obj.double;
// fn.call({ a: 20 });
// fn.apply({ a: 30 });
// const boundFn = fn.bind({ a: 40 });
// boundFn();











// const obj3 = {
//     name: "Bhavik",
//     greet: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }.bind(this), 1000);
//     }
// };
 
// obj3.greet();











const person = {
    name: "Bhavik",
    getName: function() {
        return function (){console.log(this.name)};
    }
};
 
const anotherPerson = { name: "Thanki" };
 
const arrowFunc = person.getName().bind(anotherPerson);
arrowFunc();

console.log(person.prototype)
