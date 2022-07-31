interface Person {
  //kind: "business" | "academic" | "otherType";
  name: string;
  age: number;
  city: string;
}

interface Student extends Person {
  age: number;
}

interface PostGraduateStudent extends Person {
  name: string;
  age: number;
  projects: string[];
}

// type StudentInfo<T extends Student = Student> = {
//   data: T;
//   grades?: number[];
// };

// interface StudentInfo<T extends Student = Student> {
//   //data: T;
//   data: Student;
//   //data: PostGraduateStudent;
//   grades: number[];
// }

type StudentInfo<T extends any = Student> = T extends Student
  ? {
      data: T;
      grades: number[];
    }
  : string;

class Student implements Person {
  name = "";
  age = 0;
  city = "";
}

class BusinessPerson implements Person {
  name = "";
  age = 0;
  city = "";
  salary = 1000;
}

// interface Car {
//   name: string;
// }

// interface BusinessPerson extends Person {
//   kind: "business";
//   salary: number;
// }

// interface AcademicPerson extends Person {
//   kind: "academic";
//   publications: string[];
// }

// interface Person {
//   prop1: string;
//   prop2: number;
// }
type Car = { brand: string; age: number; name: string; city: string };

class Logger<T extends Person = Car> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}

export default function play3() {
  //   function iterate(items: Array<string>) {
  //     items.forEach((item) => {
  //       console.log(item.toUpperCase());
  //     });
  //   }
  //   iterate(["filip", "john", "tom"]);

  //   const logger = new Logger<string>();
  //
  //   const cars = ["audi", "skoda", "citroen"];
  //   logger.log(cars, (car) => {
  // console.log(car);
  //   });
  //
  //   const logger2 = new Logger<number>();
  //
  //   const numbers = [1, 2, 3, 4];
  //   logger2.log(numbers, (num) => {
  // console.log(num);
  //   });

  //   function logStudentInfo(info: StudentInfo<PostGraduateStudent>) {
  //     console.log(info.data.name);
  //     console.log(info.data.age);
  //     console.log(info.data.projects);
  //   }

  function logStudentInfo(info: StudentInfo) {
    console.log(info.data.name);
    console.log(info.data.age);
  }

  const info = {
    data: {
      name: "Filip",
      age: 30,
    },
    grades: [1, 2, 3, 1],
  };
  //const logger3 = new Logger<BusinessPerson>();
  const logger3 = new Logger();

  const persons = [
    { name: "filip", age: 30, city: "", brand: "" },
    { name: "john", age: 25, city: "", brand: "" },
  ];
  logger3.log(persons, (person) => {
    console.log(person);
  });
}
