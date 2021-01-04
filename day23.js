/*
--- Day 23: Crab Cups ---

The small crab challenges you to a game! The crab is going to mix up some cups, and you have to predict where they'll end up.

The cups will be arranged in a circle and labeled clockwise (your puzzle input). For example, if your labeling were 32415, there would be five cups in the circle; going clockwise around the circle from the first cup, the cups would be labeled 3, 2, 4, 1, 5, and then back to 3 again.

Before the crab starts, it will designate the first cup in your list as the current cup. The crab is then going to do 100 moves.

Each move, the crab does the following actions:

    The crab picks up the three cups that are immediately clockwise of the current cup. They are removed from the circle; cup spacing is adjusted as necessary to maintain the circle.
    The crab selects a destination cup: the cup with a label equal to the current cup's label minus one. If this would select one of the cups that was just picked up, the crab will keep subtracting one until it finds a cup that wasn't just picked up. If at any point in this process the value goes below the lowest value on any cup's label, it wraps around to the highest value on any cup's label instead.
    The crab places the cups it just picked up so that they are immediately clockwise of the destination cup. They keep the same order as when they were picked up.
    The crab selects a new current cup: the cup which is immediately clockwise of the current cup.

For example, suppose your cup labeling were 389125467. If the crab were to do merely 10 moves, the following changes would occur:

-- move 1 --
cups: (3) 8  9  1  2  5  4  6  7 
pick up: 8, 9, 1
destination: 2

-- move 2 --
cups:  3 (2) 8  9  1  5  4  6  7 
pick up: 8, 9, 1
destination: 7

-- move 3 --
cups:  3  2 (5) 4  6  7  8  9  1 
pick up: 4, 6, 7
destination: 3

-- move 4 --
cups:  7  2  5 (8) 9  1  3  4  6 
pick up: 9, 1, 3
destination: 7

-- move 5 --
cups:  3  2  5  8 (4) 6  7  9  1 
pick up: 6, 7, 9
destination: 3

-- move 6 --
cups:  9  2  5  8  4 (1) 3  6  7 
pick up: 3, 6, 7
destination: 9

-- move 7 --
cups:  7  2  5  8  4  1 (9) 3  6 
pick up: 3, 6, 7
destination: 8

-- move 8 --
cups:  8  3  6  7  4  1  9 (2) 5 
pick up: 5, 8, 3
destination: 1

-- move 9 --
cups:  7  4  1  5  8  3  9  2 (6)
pick up: 7, 4, 1
destination: 5

-- move 10 --
cups: (5) 7  4  1  8  3  9  2  6 
pick up: 7, 4, 1
destination: 3

-- final --
cups:  5 (8) 3  7  4  1  9  2  6 

In the above example, the cups' values are the labels as they appear moving clockwise around the circle; the current cup is marked with ( ).

After the crab is done, what order will the cups be in? Starting after the cup labeled 1, collect the other cups' labels clockwise into a single string with no extra characters; each number except 1 should appear exactly once. In the above example, after 10 moves, the cups clockwise from 1 are labeled 9, 2, 6, 5, and so on, producing 92658374. If the crab were to complete all 100 moves, the order after cup 1 would be 67384529.

Using your labeling, simulate 100 moves. What are the labels on the cups after cup 1?

Your puzzle answer was 24798635.
--- Part Two ---

Due to what you can only assume is a mistranslation (you're not exactly fluent in Crab), you are quite surprised when the crab starts arranging many cups in a circle on your raft - one million (1000000) in total.

Your labeling is still correct for the first few cups; after that, the remaining cups are just numbered in an increasing fashion starting from the number after the highest number in your list and proceeding one by one until one million is reached. (For example, if your labeling were 54321, the cups would be numbered 5, 4, 3, 2, 1, and then start counting up from 6 until one million is reached.) In this way, every number from one through one million is used exactly once.

After discovering where you made the mistake in translating Crab Numbers, you realize the small crab isn't going to do merely 100 moves; the crab is going to do ten million (10000000) moves!

The crab is going to hide your stars - one each - under the two cups that will end up immediately clockwise of cup 1. You can have them if you predict what the labels on those cups will be when the crab is finished.

In the above example (389125467), this would be 934001 and then 159792; multiplying these together produces 149245887792.

Determine which two cups will end up immediately clockwise of cup 1. What do you get if you multiply their labels together?

Your puzzle answer was 12757828710.

Both parts of this puzzle are complete! They provide two gold stars: **

At this point, you should return to your Advent calendar and try another puzzle.

Your puzzle input was 362981754.
*/

let input = "362981754";

// input = "389125467";

input = input.split("").map((num) => parseInt(num));

const maxNum = 1_000_000;
const iterations = 10_000_000;

let circle = new Map();

// POPULATE MAP FOR PART 1
// for (let i = 0; i < input.length; i++) {
//   if (i === 0) {
//     circle.set(input[i], { left: input[input.length - 1], right: input[1] });
//   } else if (i === input.length - 1) {
//     circle.set(input[i], { left: input[i - 1], right: input[0] });
//   } else {
//     circle.set(input[i], { left: input[i - 1], right: input[i + 1] });
//   }
// }

// POPULATE MAP FOR PART 2
for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    circle.set(input[i], { left: maxNum, right: input[i + 1] });
  } else if (i === input.length - 1) {
    circle.set(input[i], { left: input[i - 1], right: 10 });
  } else {
    circle.set(input[i], { left: input[i - 1], right: input[i + 1] });
  }
}
for (let i = 10; i <= maxNum; i++) {
  if (i === 10) {
    circle.set(i, { left: input[input.length - 1], right: i + 1 });
  } else if (i === maxNum) {
    circle.set(i, { left: i - 1, right: input[0] });
  } else {
    circle.set(i, { left: i - 1, right: i + 1 });
  }
}

// console.log(circle);

let current = input[0];
for (let i = 0; i < iterations; i++) {
  let removed = [];
  let searchPoint = current;
  for (let i = 0; i < 3; i++) {
    let toRight = circle.get(searchPoint).right;
    removed.push(toRight);
    searchPoint = toRight;
  }

  // current.right = removed[2].right
  let currentData = circle.get(current);
  let rightOfCurrent = circle.get(removed[2]).right;
  currentData.right = rightOfCurrent;
  circle.set(current, currentData);

  // removed[2].right.left = current
  let rightOfCurrentData = circle.get(rightOfCurrent);
  rightOfCurrentData.left = current;
  circle.set(rightOfCurrent, rightOfCurrentData);

  // get destination
  let destination = current === 1 ? maxNum : current - 1;
  while (removed.includes(destination)) {
    destination--;
    if (destination === 0) {
      destination = maxNum;
      continue;
    }
  }

  // destination.right = removed[0]
  let destinationData = circle.get(destination);
  let afterDestination = destinationData.right;
  let afterDestinationData = circle.get(afterDestination);
  destinationData.right = removed[0];
  circle.set(destination, destinationData);

  // afterdestination.left = removed[2]
  afterDestinationData.left = removed[2];
  circle.set(afterDestination, afterDestinationData);

  // removed[0].left = destination
  let firstRemovedData = circle.get(removed[0]);
  firstRemovedData.left = destination;
  circle.set(removed[0], firstRemovedData);

  // removed[2].right = afterdestination
  let lastRemovedData = circle.get(removed[2]);
  lastRemovedData.right = afterDestination;
  circle.set(removed[2], lastRemovedData);

  current = circle.get(current).right;
  // console.log(circle);
  // console.log(`removed: ${removed}`);
  // console.log(`destination: ${destination}`);
}

// PART 1 ANSWER
// let answer = "";
// current = circle.get(1).right;
// while (current !== 1) {
//   answer += current;
//   current = circle.get(current).right;
// }
// console.log(`Answer: ${answer}`);

// PART 2 ANSWER
let firstAfter1 = circle.get(1).right;
let secondAfter1 = circle.get(firstAfter1).right;
console.log(`Answer: ${firstAfter1 * secondAfter1}`);
