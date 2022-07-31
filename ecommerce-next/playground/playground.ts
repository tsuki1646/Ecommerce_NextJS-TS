// Describe data structures in more natural way
// Describing objects
// Shipment, Orders,

class Person {
  name: string;
  age?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// interface Person {
//   name: string;
//   age: number;
// }

// interface PersonLoggerFn {
//   logPersonInfo(name: string, age: number): string;
// }

type PersonLoggerFn = (name: string, age?: number) => string;

type Data = string;

// type aliases
// to describle function types
// type Person = {
//   name: string;
//   age: number;
// };

export default function play() {
  const name: string = "Fillip";
  const age: number = 30;

  const john: Person = {
    name: "John",
  };
  console.log("Hello World");

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number = 0
  ): string => {
    //const info = "Name: " + personName + ", age: " + personAge
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  };

  function logPersonInfo2(person: Person) {
    //const info = "Name: " + personName + ", age: " + personAge
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  const log = logPersonInfo(name);
  logPersonInfo(name, age);

  const person = new Person("Edward", 50);
  logPersonInfo2(person);
  //logPersonInfo2(new Person("Edward", 50));
}
