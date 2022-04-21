//Peer Programming with @josephdoba and @carmstang

const transpose = function(matrix) {
  const result = []; //outer array
  for (let j = 0; j < matrix[0].length; j++) { // j less than orig length of matrix
    result[j] = Array(matrix.length); //create empty arrays
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) { //looping through matrix
      result[j][i] = matrix[i][j]; //transposition assigned to result
    }
  }
  return result;
};
  
  
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join('')); //making each array 1 string word
  const vertical = transpose(letters); //vertical arrays
  const verticalJoin = vertical.map(ls => ls.join(''));
  
  for (let l of horizontalJoin) { // check horizontal string
    // console.log(l)
    if (l.includes(word)) return true;
  }
  for (let y of verticalJoin) { // check veritical string
    // console.log(y)
    if (y.includes(word)) return true;
  }
  
  return false;
};
  
wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'K', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'Y', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');
  
  
  
  
module.exports = wordSearch;