// Primitives: numbers, strings, booleans
// More complex: arrays, objects
//function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = "Matt";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Matt",
  age: 31,
};

// person = {
//     isEmployee: true
// }

let people: Person[];

//Type Inference

let course: string | number = "React- The Complete Guide";

course = 12341;

//Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateddArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updateddArray[0].split('');

class Student {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Matt", "Brooks", 31, ["Angular"]);
student.enroll("React");

// student.listCourses(); => Angular React
// student.courses => Angular, React


interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let matt: Human;

matt = {
  firstName: 'Matt',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!');
  };
}