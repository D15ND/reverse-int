module.exports = function reverse(n) {
  const res = Math.abs(n).toString().split('').reverse().join('');
  return res;
};
