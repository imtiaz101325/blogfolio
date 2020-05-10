function linearSearch(numbers: number[], element: number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === element) {
      return i;
    }
  }

  // not found
  return -1;
}

function binarySearch(numbers: number[], element: number) {
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  while (startIndex <= endIndex) {
    // find mid position
    const middle = Math.floor((endIndex + startIndex) / 2);

    if (numbers[middle] === element) {
      return middle;
    }

    if (numbers[middle] < element) {
      // if the number in the middle is smaller
      // then the element is on the right side
      startIndex = middle + 1;
    } else {
      // if the number in the middle is larger
      // then the element is on the left side
      endIndex = middle - 1;
    }
  }

  // not found
  return -1;
}

function generateRandomArray(len: number, sorted: boolean) {
  const numList = Array.from({ length: len }, () =>
    Math.floor(Math.random() * len)
  );

  if (sorted) {
    return numList.sort((a, b) => a - b);
  }

  return numList;
}

function mapFunctionPerformanceToInputs(
  fn: Function,
  list: number[][],
  target: number
) {
  return list.map(numbers => {
    const t1 = performance.now() * 1000;
    
    fn(numbers, target);

    const t2 = performance.now() * 1000;

    return (t2 - t1);
  });
}

export {
  linearSearch,
  binarySearch,
  generateRandomArray,
  mapFunctionPerformanceToInputs,
};
