console.log("--start--");

function addfn(n1: number, n2: number, display: boolean, phrase: string) {
  if (display) console.log(n1 + n2, phrase);
}

let number1: number;
number1 = 1;
addfn(number1, 2, false, "result");
