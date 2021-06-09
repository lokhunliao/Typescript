let hello: string = 'world';

//const can not be resign.
//we can change value only to the same type. hello = true;

const getFullName = (name: string, surname: string):string => {
    return name + ' ' + surname;
}
//It is safer to define everything Explicitly  
console.log(getFullName('luke', 'liao'));


//object
interface UserInterface { // use IUser or userInterface to Specify, not a class 
    name: string;
    // age: number;
    //if the age is not required. we can use:
    age?: number
    getMessage(): string;
}

const user: UserInterface = {
    name: 'Luke',
    age: 20,
    getMessage(){
        return "hello" + name;
    }
}

const user2: UserInterface = {
    name: 'jack',
    getMessage(){
        return "hello" + name;
    }
}

console.log(user.getMessage());
