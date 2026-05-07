// node ./src/solutions.ts

//Problem 1:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

function filterEvenNumbers(arr:number[]):number[]{
    return arr.filter(num=>num%2 ===0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2:
// reverseString("typescript");

function reverseString(str:string): string{
    return str.split('').reverse().join('')
}

// console.log(reverseString("typescript"));

// Problem 3:

type StringOrNumber = string | number;

function checkType(value:StringOrNumber) : string {
    if (typeof value === "string"){
        return "String";
    }
    else{
        return "Number"
    }
}

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4:
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");

type User = {
    id: number;
    name: string;
    age: number;
}

function getProperty(obj:User, key: keyof User){
    return obj[key]
}

const user: User={
    id: 1,
    name: "John Doe",
    age: 21
}

// console.log(getProperty(user, "name"));

//Problem 5:
// Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & {isRead:boolean}{
    return{
        ...book,
        isRead: true,
    }
}

const myBook: Book ={
    title: 'TypeScript Guide',
    author: 'Jane Doe',
    publishedYear: 2024,
}

// console.log(toggleReadStatus(myBook));

//Problem 6:
// Sample Input:
// const student = new Student("Alice", 20, "A");
// student.getDetails();

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        
        super(name,age)

        this.grade = grade;
    }

    getDetails(): string{
        // return `Name: name, Age: age, Grade: grade`
         return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");

// console.log(student.getDetails());

//Problem 7:
//Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

// Sample Input:
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// intersection -matching same

function getIntersection(arr1: number[],arr2: number[]){
    return arr1.filter(value=>arr2.includes(value));
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
