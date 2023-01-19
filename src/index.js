
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.reduce((parameter, value, index) => {
      !(index % 2) ? parameter.push(...value) : parameter.push(...value.reverse());
      return parameter;
    }, []);
  };
