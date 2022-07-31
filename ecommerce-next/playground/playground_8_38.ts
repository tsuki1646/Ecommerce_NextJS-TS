interface Person {
  name: string;
}

type CustomArray<T = any> = {
  //[index: number]: string;
  //[index: number]: string;
  [index: number]: T;
};

type CustomObject<T = any> = {
  [index: string]: string | number | Person;
};

["apples", "oranges"][1];

export default function play() {
  const items: CustomArray<string> = ["1", "2", "3"];
  const items2: CustomArray<number> = [1, 2, 3];
  //const item2 = [1, 2, 3, 4];
  //type Single = CustomArray[number];
  const person: CustomObject = {
    age: 23,
    name: "adsd",
    city: "dffd",
    person: {
      name: "Filip",
    },
  };
}
