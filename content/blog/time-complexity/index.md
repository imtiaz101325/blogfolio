---
title: Time Complexity
date: "2020-05-10"
description: "Time complexity of your code"
---

People who write code everyday in their jobs have many things to consider while building software. They need to keep their code maintainable and well documented. They must also sometimes worry about scale and performance. How does an engineer know if their solution is a good one? Among the things that they could measure are running time and memory usage. This leads them to two important questions:

1. How long does my program take to run?
2. How much memory does my program take to run?

To answer these questions we might try to time our functions or inspect how much memory our software uses. Here is one such attempt:

```js
function fastCode() {
  for (i = 0; i < 50000; ++i) {
    // do something
  }
}

console.time("fastCode");

fastCode();

console.timeEnd("fastCode");
// fastCode: 23ms - timer ended
```

However the _performance_ of this code depends on the machine. Adding exact running time does not show us how our code would perform on a grand scale. It can have different exact times on different hardware. The way we define the running time of our algorithm should be independent of the hardware it is running on.

So instead of performance we need to think about the _complexity_ of our code. Instead of asking "how much time does it take to run?", we could ask "how does our function grow?". For example, imagine we are tasked with setting up a place where students can learn to code. We could setup a physical classroom that needs assets like space, table, chair etc. If we want to grow the size of our classroom we need to add more tables and chairs. If we try to scale this to thousands of students it can become a very daunting task very soon. However, imagine we, instead, setup a virtual classroom. This way we no longer need to manage the physical assets we needed on the previous solution and our task becomes much simpler.

To put our analogy in context of code let us look at two searching algorithms and compare them. We are going to define some simple searching algorithms in JavaScript. The functions will take an input of sorted list of numbers as the first parameter and will return the index it finds that matches the number in the second parameter:

### Linear Search

```js
function linearSearch(numbers, element) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === element) {
      return i;
    }
  }

  // not found
  return -1;
}
```

### Binary Search

```js
function binarySearch(numbers, element) {
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
```

Our code take different time or space depending on the size of the input. In other words complexity depends on the size of the problem.

Even for the same algorithm there can be different times based on how our data is organized.

could show how different sized inputs have different running time

could insert code from binary search and show how it works for small and large numbers of inputs.

## Asymptotic analysis

Asymptotic analysis is the study of algorithm's growth rate.

Asymptote: nature of a function as it reaches a very large value and is "bounded"

![asymptote](./asymptote.png)

We can really see how our code is performing at the tail end of the asymptotic function.

We are mostly interested in the algorithm's worst possible running time. Since the best case could be as simple as running a single set of instructions.

Asymptotic notation:

## Big Oh O(n)

The Big-O notation shows us the asymptotic upper bound of our code as in the time of space needed for the worst case. In other word it is a ceiling on the growth of the code we are analyzing.

![big oh](./big-oh.png)

O(g(n)) = { f(n): there exist positive constants c and n<sub>0</sub>
such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n<sub>0</sub> }

We need to tighten our bound

## Big omega

best case

floor growth rate

asymptotic lower bound

The least work we can do or the fastest our code can run.

## Big theta

Exact bound

asymptotically tight bound

## How

Total running time of a function in found by adding the running time of all of the statements in the function. Simple operations take constant time O(1). For conditional statement, the branch that takes the most time is considered. For loops, we multiply the time complexity of the statements within the loop by the number of times the loop is run. So, a loop that runs some constant time operations `n` times is said to have O(n) complexity. Following that train of thought: a loop with `n` iterations which has another loop with `m` iterations has a complexity of O(n\*m) given that the loops contain constant time operations.

We can show a line graph

T(n) = an + b

-> big oh is O(n) dropping a and b

for quadratic time

T(n) = cn<sup>2</sup> + dn + e

here the graph of n<sup>2</sup> grows much faster than dn

so complexity is O(n<sup>2</sup>)

show line by line complexity

## Commonly found complexities

| Notation         | Name        |
| ---------------- | ----------- |
| O(1)             | Constant    |
| O(log(n))        | Logarithmic |
| O(n)             | Linear      |
| O(nlog(n))       | Log-linear  |
| O(n<sup>2</sup>) | Quadratic   |
| O(n<sup>c</sup>) | Polynomial  |
| O(c<sup>n</sup>) | Exponential |

![common cases](common-big-o.png)
