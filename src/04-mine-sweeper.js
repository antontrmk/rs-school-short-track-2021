/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sum = 0;
  const resultArr = matrix.map((item, index, arr) => arr.slice());
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum = 0;

      const rowStart = i - 1 < 0 ? 0 : i - 1;
      const colStart = j - 1 < 0 ? 0 : j - 1;
      const rowEnd = i + 1 > matrix.length - 1 ? matrix.length - 1 : i + 1;
      const colEnd = j + 1 > matrix[i].length - 1 ? matrix[i].length - 1 : j + 1;

      for (let r = rowStart; r <= rowEnd; r++) {
        for (let c = colStart; c <= colEnd; c++) {
          if (r !== i || c !== j) {
            if (matrix[r][c] === true) {
              sum += 1;
            }
          }
        }
      }
      resultArr[i][j] = sum;
    }
  }
  return resultArr;
}

module.exports = minesweeper;

// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]));
