const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;



  for (let i of matrix) {
    for (let j of i) {
      if (j == '^^') {
        count++
      }
    }
  }

  return (count)
}

module.exports = {
  countCats
};
