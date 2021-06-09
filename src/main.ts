let hello: string = 'world';

//const can not be resign.
//we can change value only to the same type. hello = true;

const getFullName = (name: string, surname: string):string => {
    return name + ' ' + surname;
}
//It is safer to define everything Explicitly  
console.log(getFullName('luke', 'liao'));


//object
// use IUser or userInterface to Specify, not a class 
interface UserInterface { 
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


//union operator in Typescript
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null //or = string | null
interface UserInterface2 {
    name: ID,
    surname: string
} 

const PopularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag : MaybePopularTag = 'dragon'

let username: string = 'Alex';

let pageName: string | number = '1'; // union - operator to combine data type.
// the value can be Different types string or number 

let errorMessage: string | null = null;

let user3: UserInterface2 | null = null;

let someProp: string | number | null | undefined | string[] | object


// any never void unknown in Typescript 
//when we don't return anything it's void.
//Void is a set of undefined and null
const doSomething = (): void => {
    console.log('doSomething');
}
let foo: void = undefined;
// foo = 'foo'
//use void to say we don't return something from a function.

//any type in TS, don't Recommend to use 
//any type turns off TS checks
let foo2: any = 'foo'
console.log(foo2.bar());

//never type in TS, 
//function with never can't be executed to the end  
const doSomething2 = (): never => {
    throw 'never';
};

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
//we can't assign unknown directly in other type
// let s2: string = vUnknown;
let s2: string = vUnknown as string;

let pageNumber: string= '1';
let numberPageNumber: number = (pageName as unknown) as number;

console.log(vAny.foo());
// console.log(vUnknown.foo());

//ts working with DOM
const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log('someElement', someElement.value);

const someElement2 = document.querySelector('.foo');

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
})

//ts with classes
// public y Default 
//private  means only Assemble inside the class.

interface UserInterface3 {
    getFullName(): string;
}
class User3 implements UserInterface3 {
    // protected firstName: string
    firstName: string
    private lastName: string
    readonly unchangableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string){
        this.firstName = firstName,
        this.lastName = lastName
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = 'foo' 
    }

    getFullName(): string{
        return this.firstName + ' ' + this.lastName
    }
}

class Admin extends User3 {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin('liao', 'luke')
console.log(admin.firstName);
//only admin can access all the functions in Admin

const user4 = new User3('luke','liao')
console.log(user4.getFullName());
// console.log(user4.firstName); error
console.log(User3.maxAge); // user4 don't have maxAge 
