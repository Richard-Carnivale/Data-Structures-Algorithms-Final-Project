// Heap Sort with steps
export const getHeapSortSteps = (array, sortKey) => {
  const steps = [];

  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left][sortKey] > arr[largest][sortKey]) {
      largest = left;
    }
    if (right < n && arr[right][sortKey] > arr[largest][sortKey]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push({ array: [...arr], swappedIndices: [i, largest] });
      heapify(arr, n, largest);
    }
  };

  const buildMaxHeap = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  const heapSort = (arr) => {
    const n = arr.length;
    buildMaxHeap(arr);
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      steps.push({ array: [...arr], swappedIndices: [0, i] });
      heapify(arr, i, 0);
    }
  };

  const arrCopy = [...array];
  heapSort(arrCopy);
  return steps;
};

// Quick Sort with steps
export const getQuickSortSteps = (array, sortKey) => {
  const steps = [];

  const quickSortWithSteps = (arr, left, right) => {
    if (left >= right) return;

    const pivotIndex = partition(arr, left, right);
    quickSortWithSteps(arr, left, pivotIndex - 1);
    quickSortWithSteps(arr, pivotIndex + 1, right);
  };

  const partition = (arr, left, right) => {
    const pivot = arr[right][sortKey];
    let i = left;

    for (let j = left; j < right; j++) {
      if (arr[j][sortKey] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({ array: [...arr], swappedIndices: [i, j] });
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    steps.push({ array: [...arr], swappedIndices: [i, right] });
    return i;
  };

  steps.push({ array: array, swappedIndices: [] });
  quickSortWithSteps(array, 0, array.length - 1);
  return steps;
};
