/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// function encodeLine(str) {
//   const set = new Set();
//   str.split('').forEach((item, index, arr) => {
//     const cutArr = arr.slice().filter((i) => i !== item);
//     const diff = arr.length - cutArr.length;
//     if (diff > 1) {
//       set.add(`${diff}${item}`);
//     } else {
//       set.add(item);
//     }
//   });
//   return [...set].join('');
// }

function encodeLine(/* str */) {
  throw new Error('Not implemented');
}

module.exports = encodeLine;
