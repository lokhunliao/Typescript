var hello = 'world';
//const can not be resign.
//we can change value only to the same type. hello = true;
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
//It is safer to define everything Explicitly  
console.log(getFullName('luke', 'liao'));
var user = {
    name: 'Luke',
    age: 20,
    getMessage: function () {
        return "hello" + name;
    }
};
var user2 = {
    name: 'jack',
    getMessage: function () {
        return "hello" + name;
    }
};
console.log(user.getMessage());
var PopularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = 'Alex';
var pageName = '1'; // union - operator to combine data type.
// the value can be Different types string or number 
var errorMessage = null;
var user3 = null;
var someProp;
// any never void unknown in Typescript 
//when we don't return anything it's void.
//Void is a set of undefined and null
var doSomething = function () {
    console.log('doSomething');
};
var foo = undefined;
// foo = 'foo'
//use void to say we don't return something from a function.
//any type in TS, don't Recommend to use 
//any type turns off TS checks
var foo2 = 'foo';
console.log(foo2.bar());
//never type in TS, 
//function with never can't be executed to the end  
var doSomething2 = function () {
    throw 'never';
};
// unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//we can't assign unknown directly in other type
// let s2: string = vUnknown;
var s2 = vUnknown;
var pageNumber = '1';
var numberPageNumber = pageName;
console.log(vAny.foo());
// console.log(vUnknown.foo());
