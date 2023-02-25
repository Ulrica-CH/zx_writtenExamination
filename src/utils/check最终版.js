function checkRange() {
  const ranges = Array.from(arguments);
  const points = [];
  let rightNum = 0,
    leftNum = 0;
  let rangeArr = [],
    rangeResArr = [],
    isRange = false;
  for (const range of ranges) {
    let [left, right] = range;
    if (left === 2) {
      rangeArr.push(...right);
      isRange = true;
    } else if (left === 3) left = right + 1;
    else if (left === 4) left = right - 1;
    else if (left === 5) {
      left = right + 1;
      points.push(right);
    } else if (left === 6) {
      left = right - 1;
      points.push(right);
    } else if (left === 7) left = right + 1;
    else if (left === 8) {
      left = right;
      leftNum = left;
    }
    rightNum = right;
    if (!isRange) points.push(left);
    isRange = false;
  }
  if (rangeArr) {
    for (let i = rangeArr[0]; i < rangeArr[1]; i++) {
      rangeResArr.push(i);
    }
  }
  const res = Array.from(points).sort((a, b) => a - b);
  rangeResArr && res.push(...rangeResArr);
  let resFilter = [];
  if (res.indexOf(rightNum) || res.indexOf(rightNum) === 0) {
    resFilter = res.filter((i) => i !== rightNum);
  }
  leftNum && resFilter.push(leftNum);
  resFilter.sort((a, b) => a - b);
  if (resFilter.length === 1) return "OK";
  for (let i = 0; i < resFilter.length; i++) {
    if (resFilter[i + 1] - resFilter[i] > 1) return "ERROR";
    if (resFilter[i + 1] === resFilter[i]) return "ERROR";
  }
  return "OK";
}
