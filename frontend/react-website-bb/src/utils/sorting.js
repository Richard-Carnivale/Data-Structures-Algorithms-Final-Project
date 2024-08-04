export const quickSort = (arr, key) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)][key];
  const left = arr.filter(item => item[key] < pivot);
  const right = arr.filter(item => item[key] > pivot);
  const middle = arr.filter(item => item[key] === pivot);

  return [...quickSort(left, key), ...middle, ...quickSort(right, key)];
};

export const mergeSort = (arr, key) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key);
  const right = mergeSort(arr.slice(mid), key);

  return merge(left, right, key);
};

const merge = (left, right, key) => {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][key] < right[rightIndex][key]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};