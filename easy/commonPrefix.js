/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

function getPrefix(str1, str2) {
  let out = "";

  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] !== str2[i]) break;
    out += str1[i];
  }

  return out;
}

var tests = [
  {
    input: ["flower", "flow", "flight"],
    expected: "fl",
  },
  {
    input: ["dog", "racecar", "car"],
    expected: "",
  },
];

tests.forEach((test) => {
  const result = longestCommonPrefix(test.input);
  console.log(`${test.input} ${test.expected}:${result}`);
});
