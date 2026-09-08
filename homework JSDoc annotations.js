//1. Create a **JavaScript class** called Person with the following:
// Properties: name (string), age (number)
// Method: greet() – prints "Hello, my name is [name] and I am [age] years old"
// Use **JSDoc annotations** to:
// Document the class
// Document its properties
// Document the method and its return type

/**
 * Represents a person.
 */
class Person {

    /**
     * Creates a Person object.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     */
    constructor(name, age) {
        /** @type {string} */
        this.name = name;

        /** @type {number} */
        this.age = age;
    }

    /**
     * Greets the person.
     * @returns {void} Prints the person's name and age.
     */
    greet() {
        console.log(`Hello, my name is ${ this.name } and I am ${ this.age } years old`);
    }
}

// Create an object
const person1 = new Person("Kannan", 25);

// Call the method
person1.greet();

