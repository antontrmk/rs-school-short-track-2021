/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let stopper = 0;
  let sum = n;
  do {
    sum = sum.toString().split('').reduce((a, b) => +a + +b, 0);
    stopper++;
  } while (sum.toString().length > 1 && stopper < 100);
  return sum;
}
module.exports = getSumOfDigits;
