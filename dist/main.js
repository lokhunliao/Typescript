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
