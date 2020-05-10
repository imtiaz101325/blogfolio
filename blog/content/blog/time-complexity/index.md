---
title: Time Complexity
date: "2020-05-10"
description: "Time complexity of your code"
---

People who writes code everyday in their jobs have many things to consider while building software. They need to keep their code maintainable and well documented. They must also sometimes worry about scale and performance. How does an engineer know if their solution is a good one? Among the things that they could measure are running time and memory usage. This leads them to two important questions:

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

Performance depends on the machine. Adding exact running time does not show how our code would perform on a grand scale. It can have different exact times on different hardware. The way we define the running time of our algorithm should be independent of the hardware it is running on. Even for the same algorithm there can be different times based on how our data is organized.

Complexity depends on the size of the problem. It take different time or space depending on the size of the input.

Instead of asking how much time does it take we can ask how does this function grows. Asymptotic analysis is the study of algorithm's growth rate.

could show how different sized inputs have different running time

give khan academy example of class room growth is linear and online shool growth is exponential

could insert code from binary search and show how it works for small and large numbers of inputs.

## Asymptotic bounding

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
