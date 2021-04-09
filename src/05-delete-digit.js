/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const minNum = n.toString().split('').sort((a, b) => a - b)[0];
  arr.splice(arr.indexOf(minNum), 1);
  return +arr.join('');
}

module.exports = deleteDigit;
