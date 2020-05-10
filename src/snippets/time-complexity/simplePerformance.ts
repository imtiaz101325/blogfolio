function linearSearch(numbers: [number], element: number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === element) {
      return i;
    }
  }

  // not found
  return -1;
}

function binarySearch(numbers: [number], element: number) {
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
