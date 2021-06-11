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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = 'world';
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
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
var pageName = '1';
var errorMessage = null;
var user3 = null;
var someProp;
var doSomething = function () {
    console.log('doSomething');
};
var foo = undefined;
var foo2 = 'foo';
console.log(foo2.bar());
var doSomething2 = function () {
    throw 'never';
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = '1';
var numberPageNumber = pageName;
console.log(vAny.foo());
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
var someElement2 = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User3 = (function () {
    function User3(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User3.prototype.changeUnchangableName = function () {
    };
    User3.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User3.maxAge = 50;
    return User3;
}());
var Admin = (function (_super) {
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
var user4 = new User3('luke', 'liao');
console.log(user4.getFullName());
console.log(User3.maxAge);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: 'jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
console.log(Status.InProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notstarted";
    StatusEnum["InProgress"] = "inprogress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var person = {
    name: 'max',
    age: 20,
    hobbies: ['sports', 'coding'],
    role: [2, 'author']
};
person.role.push('admin');
console.log(person.role);
function combine(input1, input2) {
}
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
function addAndHandle(n1, n2, cd) {
    var result = n1 + n2;
    cd(result);
}
addAndHandle(3, 4, function (result) {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
