module.exports = function towelSort (matrix) {
  return (matrix || [])
        .map((row,i) => i % 2 ? row.reverse() : row)
        .reduce((result,row) => result.concat(row),[]);
}
