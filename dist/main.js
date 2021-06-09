var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//ts working with DOM
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
var someElement2 = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User3 = /** @class */ (function () {
    function User3(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User3.prototype.changeUnchangableName = function () {
        // this.unchangableName = 'foo' 
    };
    User3.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User3.maxAge = 50;
    return User3;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User3));
var admin = new Admin('liao', 'luke');
console.log(admin.firstName);
//only admin can access all the functions in Admin
var user4 = new User3('luke', 'liao');
console.log(user4.getFullName());
// console.log(user4.firstName); error
console.log(User3.maxAge); // user4 don't have maxAge 
