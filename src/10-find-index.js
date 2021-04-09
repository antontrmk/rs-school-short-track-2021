/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(array, value) {
//   let result = 0;
//   array.some((item, index) => {
//     if (item === value) {
//       result = index;
//     }
//     return item === value;
//   });
//   return result;
// }

// function findIndex(array, value) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       result = i;
//     }
//   }
//   console.log(result);
//   return result;
// }

// function findIndex(/* array, value */) {
//   throw new Error('Not implemented');
// }

function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let result = 0;
  let middleIndex;
  let stopper = 0;

  while (startIndex <= endIndex && stopper < 10) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (value === array[middleIndex]) {
      result = middleIndex;
      stopper = 10;
    }

    if (value > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if (value < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }

    stopper++;
  }

  return result;
}

module.exports = findIndex;
