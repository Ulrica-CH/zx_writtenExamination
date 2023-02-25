function checkRange() {
  const ranges = Array.from(arguments);
  // const points = new Set()
  const points = [];

  // 保存right
  let rightNum = 0;

  // 对于8的情况处理
  let leftNum = 0;

  //  对于输入的是数组情况处理
  let rangeArr = [];
  let rangeResArr = [];

  // 对于输入的是数组情况处理
  let isRange = false;
  for (const range of ranges) {
    let [left, right] = range;

    // 根据传递的2345678进行处理
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

    // 如果是(2,[5,10]) 就不要添加2 否则根据上边判断情况进行添加数字
    if (!isRange) points.push(left);
    isRange = false;
  }

  // 对传递的数组进行补充 如[5,10] -> [5,6,7,8,9,10]
  if (rangeArr) {
    for (let i = rangeArr[0]; i < rangeArr[1]; i++) {
      rangeResArr.push(i);
    }
  }
  //   console.log(points, leftNum, rangeArr, rangeResArr);
  const res = Array.from(points).sort((a, b) => a - b);

  // 对传递的数组修改后放入到结果数组中
  rangeResArr && res.push(...rangeResArr);
  //   console.log("36", res);
  //   console.log("res----", res);
  let resFilter = [];
  //   console.log(res.indexOf(rightNum));
  // 对传递right过滤 如(3,5) 过滤掉5
  if (res.indexOf(rightNum) || res.indexOf(rightNum) === 0) {
    resFilter = res.filter((i) => {
      return i !== rightNum;
    });
  }
  // 如果传递8 对right保存并合并到最终数组
  //   console.log(leftNum);
  if (leftNum) resFilter.push(leftNum);

  // 对最终数组排序
  resFilter.sort((a, b) => a - b);
  //   console.log(resFilter);
  // 最终数组长度为一 符合
  if (resFilter.length === 1) return "OK";
  for (let i = 0; i < resFilter.length; i++) {
    // 如果不是4,5,6这样连续就是ERROR
    if (resFilter[i + 1] - resFilter[i] > 1) return "ERROR";
    if (resFilter[i + 1] === resFilter[i]) return "ERROR";
  }
  return "OK";
}
// 测试 均没有问题
console.log(checkRange([8, 5], [7, 5])); //OK
console.log(checkRange([4, 5], [8, 5], [3, 5])); // OK
console.log(checkRange([4, 5], [3, 5])); // ERROR
console.log(checkRange([4, 5], [2, [5, 10]], [8, 10], [3, 10])); // "OK"
console.log(checkRange([6, 5], [2, [5, 10]], [8, 10], [3, 10])); // ERROR
console.log(checkRange([4, 5], [2, [5, 10]], [2, [6, 8]], [3, 10])); // ERROR
