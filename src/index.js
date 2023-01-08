module.exports = function reverse (n) {
  let numAbs=Math.abs(n);
  let nToStr=numAbs.toString();
  let rev=nToStr.split('').reverse().join('');
  let revToNum=+rev;
  return revToNum;
}
