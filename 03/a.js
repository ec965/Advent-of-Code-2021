const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((val) => !!val);

function part1(input) {
  const len = input[0].length;

  let gamma = "";
  let epsilon = "";
  for (let i = 0; i < len; i++) {
    let zero = 0;
    let one = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === "0") zero++;
      else one++;
    }
    if (zero > one) {
      gamma += "0";
      epsilon += "1";
    } else {
      gamma += "1";
      epsilon += "0";
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function filterDown(input, greater) {
  const len = input[0].length;
  let data = [...input];

  for (let i = 0; i < len; i++) {
    let zero = 0;
    let one = 0;
    data.forEach((val) => {
      if (val[i] === "0") zero++;
      else one++;
    });

    const filterVal = zero > one ? "0" : "1";
    data = data.filter((val) => (greater ? val[i] === filterVal : val[i] !== filterVal));
    if (data.length === 1) return data[0];
  }
  return data[0];
}

function part2(input) {
  const o2 = filterDown(input, true);
  const co2 = filterDown(input, false);
  return parseInt(o2, 2) * parseInt(co2, 2);
}

console.log('part 1', part1(input));
console.log("part 2", part2(input));
