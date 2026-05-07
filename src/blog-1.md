1. 
TypeScript's main power is Type safety.
But if we use 'any' it is very fast but its distroy the safety and create bugs.

let data: any = "Hello";

data.toUpperCase(); //its working



data = 10;
data.toUpperCase(); //not working runtime error

Others,
unknown is safe cause it is check type before using.


let data: unknown = 'Elephant';

if (typeof data ==='string){
    console.log(data.toUpperCase);
}

it is safe. And 

let data: unknown = "Elephant";

data.toUpperCase(); 

it is unsafe cause of direct use without cheak type.


And Type Narrowing is doing narrow any variable type step by step.

function process(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported type";
}