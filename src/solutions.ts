// node ./src/solutions.ts

//Problem 1:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

function filterEvenNumbers(arr:number[]):number[]{
    return arr.filter(num=>num%2 ===0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2:
// reverseString("typescript");

function reverseString(str:string): string{
    return str.split('').reverse().join('')
}

console.log(reverseString("typescript"));