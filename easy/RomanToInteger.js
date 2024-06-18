/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanToIntMap[s[i]];
    const next = romanToIntMap[s[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};

var tests = [
  {
    input: "III",
    expected: 3,
  },
  {
    input: "LVIII",
    expected: 58,
  },
  {
    input: "MCMXCIV",
    expected: 1994,
  },
];

tests.forEach((test) => {
  const result = romanToInt(test.input);
  console.log(`${test.input} ${test.expected}:${result}`);
});
