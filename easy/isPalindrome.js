/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x != "number" || x < 0) return false;

  let y = x.toString().split("");
  if (y.reverse().join("") !== x.toString()) return false;

  return true;
};

var tests = [
  {
    input: 121,
    expected: true,
  },
  {
    input: -121,
    expected: false,
  },
  {
    input: 10,
    expected: false,
  },
];

tests.forEach((test) => {
  const result = isPalindrome(test.input);
  console.log(`${test.input} ${test.expected}:${result}`);
});
