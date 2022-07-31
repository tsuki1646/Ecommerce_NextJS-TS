interface Person {
  name: string;
}

//type ReturnType<T> = T extends () => string ? string : number;
type ReturnType<T> = T extends () => infer R ? R : number;

export default function play() {
  function logger() {
    return true;
  }

  const loggerReturn: ReturnType<typeof logger> = true;
}
