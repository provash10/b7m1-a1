3. Generic

Generics is a powerful feature of Typescript which is reusable and helped to strongly write code to less code duplication and increase flexibility.

Without Generics same code write again and again.
But if use Generics - handle all type by only one function.

function identity<T>(value: T): T {
  return value;
}

const text = identity<string>("Hello");
console.log(text);

