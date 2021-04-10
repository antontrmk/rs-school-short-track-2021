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

// function encodeLine(/* str */) {
//   throw new Error('Not implemented');
// }

function encodeLine(str) {
  const result = [];
  let factor = 1;
  let index = -1;
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (`${factor}${arr[i]}` === result[index]) {
      factor += 1;
      result[index] = `${factor}${arr[i]}`;
    } else {
      index += 1;
      factor = 1;
      result[index] = `${factor}${arr[i]}`;
    }
  }

  return result.join('').split('').filter((i) => i !== '1').join('');
}

module.exports = encodeLine;
