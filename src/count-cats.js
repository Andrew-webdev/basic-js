module.exports = function countCats(matrix) {
  let unitArr = [].concat(...matrix);
  let count = 0;
  if (unitArr.length > 0) {
    for (let i = 0; i < unitArr.length; i++) {
      if (unitArr[i] === "^^") {
        count++;
      }
    }
    return count;
  } else {
    return 0;
  }
}