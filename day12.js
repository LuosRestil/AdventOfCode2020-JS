/*
--- Day 12: Rain Risk ---

Your ferry made decent progress toward the island, but the storm came in faster than anyone expected. The ferry needs to take evasive actions!

Unfortunately, the ship's navigation computer seems to be malfunctioning; rather than giving a route directly to safety, it produced extremely circuitous instructions. When the captain uses the PA system to ask if anyone can help, you quickly volunteer.

The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:

    Action N means to move north by the given value.
    Action S means to move south by the given value.
    Action E means to move east by the given value.
    Action W means to move west by the given value.
    Action L means to turn left the given number of degrees.
    Action R means to turn right the given number of degrees.
    Action F means to move forward by the given value in the direction the ship is currently facing.

The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)

For example:

F10
N3
F7
R90
F11

These instructions would be handled as follows:

    F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.
    N3 would move the ship 3 units north to east 10, north 3.
    F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.
    R90 would cause the ship to turn right by 90 degrees and face south; it remains at east 17, north 3.
    F11 would move the ship 11 units south to east 17, south 8.

At the end of these instructions, the ship's Manhattan distance (sum of the absolute values of its east/west position and its north/south position) from its starting position is 17 + 8 = 25.

Figure out where the navigation instructions lead. What is the Manhattan distance between that location and the ship's starting position?

Your puzzle answer was 1838.
--- Part Two ---

Before you can give the destination to the captain, you realize that the actual action meanings were printed on the back of the instructions the whole time.

Almost all of the actions indicate how to move a waypoint which is relative to the ship's position:

    Action N means to move the waypoint north by the given value.
    Action S means to move the waypoint south by the given value.
    Action E means to move the waypoint east by the given value.
    Action W means to move the waypoint west by the given value.
    Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
    Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
    Action F means to move forward to the waypoint a number of times equal to the given value.

The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.

For example, using the same instructions as above:

    F10 moves the ship to the waypoint 10 times (a total of 100 units east and 10 units north), leaving the ship at east 100, north 10. The waypoint stays 10 units east and 1 unit north of the ship.
    N3 moves the waypoint 3 units north to 10 units east and 4 units north of the ship. The ship remains at east 100, north 10.
    F7 moves the ship to the waypoint 7 times (a total of 70 units east and 28 units north), leaving the ship at east 170, north 38. The waypoint stays 10 units east and 4 units north of the ship.
    R90 rotates the waypoint around the ship clockwise 90 degrees, moving it to 4 units east and 10 units south of the ship. The ship remains at east 170, north 38.
    F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.

After these operations, the ship's Manhattan distance from its starting position is 214 + 72 = 286.

Figure out where the navigation instructions actually lead. What is the Manhattan distance between that location and the ship's starting position?

Your puzzle answer was 89936.

Both parts of this puzzle are complete! They provide two gold stars: **
*/

input = `N3
F18
L180
F40
N3
R90
S5
R90
N4
F24
R90
E5
F36
R180
W3
W4
F63
N4
W1
N1
E1
L90
W1
N2
E2
S2
F39
W4
S3
F93
N1
F83
S1
R90
W3
R90
W4
L90
F53
S4
F4
L90
W3
F83
L180
W2
L90
W2
L90
W1
N3
F63
R90
N2
N3
E4
F10
S3
E4
R90
F11
L90
R90
S2
W2
F100
W5
R270
F40
S5
L90
E2
L90
E2
L180
N5
F81
N4
E4
L180
F38
W2
F22
W5
N5
E1
N2
W4
N2
F68
N1
F2
S1
F47
W5
F80
N3
E3
S2
L180
F87
L180
E4
L90
E2
S3
L180
E2
L90
W2
N4
F21
S4
W5
F70
F4
N2
F14
E2
S3
R90
W3
N2
E3
S1
F85
R90
E1
F80
L90
F100
R90
W1
R180
S4
F58
L90
N3
R90
E1
F42
E3
F93
S3
R90
W2
N3
L90
W3
W2
N2
W1
S4
R180
N5
R180
F52
N5
F20
L180
E5
R90
W2
S4
E1
S3
F75
R90
F49
L180
N3
F31
S3
E3
S5
L180
N3
E2
R270
W5
N3
W5
N3
L270
F54
R90
W5
F73
S3
W2
R90
N2
R90
S5
R90
W4
S2
L90
F3
S2
R90
F76
S3
F56
L90
F5
N1
R180
E3
N2
F20
E2
L180
F38
R180
W4
R90
S3
N5
E5
F26
S2
L180
E4
R90
F52
N3
L90
N5
E4
F63
L90
F48
W5
F29
N1
E3
L90
N5
L90
S3
F8
N2
R90
E4
S2
E2
F10
W2
L90
N2
R90
F2
E2
N4
R90
F74
W3
W5
S2
R90
N3
L90
E3
F58
N4
E5
S4
E3
F72
L180
E3
S2
L90
W4
S1
F14
W1
N1
E3
W4
L90
N1
F97
R90
N4
E3
F95
F95
L90
S4
F55
R90
W2
N1
R90
F16
L90
S5
F4
R90
F24
S4
E2
R90
W5
E1
L270
F12
L90
F100
W1
S5
W2
S3
F95
L90
F44
N5
F79
S4
R180
E2
S1
F40
R90
W2
R90
F67
S5
F15
L90
N4
L90
S5
E1
R90
N3
W5
N4
L270
F61
L90
E1
L90
E1
F38
E2
F19
W2
L90
S4
R180
W4
F59
N1
F26
N1
W5
F7
N4
F72
E2
R90
F59
N1
F58
N5
F13
N2
F2
S2
W1
F85
R270
S2
F17
R90
F96
S2
L90
E1
N4
F9
R270
F58
N1
L90
W2
S2
F73
W1
S2
F20
E2
S4
F94
L180
F27
S2
F48
N1
L270
S2
F77
E3
F10
W3
L270
S4
F53
F66
E5
S2
F33
S5
L90
W3
S3
E3
R90
E1
F62
S1
L90
S3
E3
N1
S1
E5
S2
F66
N4
N1
W4
F84
R180
F23
F20
E1
S3
R90
E2
F48
F89
L90
F97
R180
N3
F62
L90
N5
F28
W5
N4
L180
N4
W1
N3
L90
F95
N1
W5
R180
N5
F34
S1
W2
N4
F3
S2
E1
R90
E2
F36
S4
E5
F42
W1
L180
S1
F74
F38
N4
R270
N3
W2
S4
L180
F26
S4
F51
R90
F83
R90
F9
S2
W1
F99
S4
W1
F84
W1
R180
F59
W5
R90
F75
S1
F34
E4
N3
L90
F43
W5
N1
R90
F59
W1
N3
W4
S2
F36
N5
W4
E2
F96
R180
F44
R90
F12
E5
F24
W3
F39
S2
L180
W3
W4
F70
N4
E4
F36
E2
N1
F30
L90
S2
F81
R270
R90
F66
W1
L90
W2
F98
S1
E1
L90
E3
N2
F100
W3
N3
R90
F88
E4
L180
F52
L90
E4
F76
W2
L90
E3
F72
S3
L180
F12
F34
E5
F90
S5
W5
E1
N5
L180
E5
F84
E5
E3
L90
E3
F14
L90
W3
L90
S1
L90
W2
F54
R90
S2
F73
S4
E1
S1
F55
E5
N4
R180
L180
N4
R90
F91
L180
F5
E2
N1
W2
F27
W2
S5
R90
S3
F39
S3
W2
F59
F83
W3
E3
E4
L90
S1
R90
E4
F81
E4
R90
W5
F74
W3
E3
F30
L180
S2
E3
F33
S3
R90
F22
S5
F97
S1
E2
F50
E2
F19
E3
L90
L90
S5
W3
F80
F33
E1
R90
N3
L90
F70
L180
W4
N2
R180
S2
F38
S3
F7
R90
E1
N5
F86
W4
F49
W4
F51
S4
F47
R90
W3
R180
R180
W1
F98
S1
W3
S4
L90
F76
E1
F76
R180
S4
R180
W3
F26
N5
F35
S2
F94
F24
N2
F45
E1
L90
F32
S1
R180
F78
F84
L90
N2
F42
R90
F72
S1
E3
N2
W1
F23
E2
F69
L90
F29
R90
S5
W5
L90
W1
S2
E1
F96
S5
R180
F26
S5
W1
S3
F38
S1
E2
S5
W2
S5
F52
L90
F11
E3
R90
E4
F6
L90
R90
W1
R90
E3
F1
E4
N3
E5
R90
N2
R180
W2
N5
F46
N3
E5
F83
R90
F42
S3
R90
N5
F10`;

// input = `N3
// F18
// L180
// F40
// N3
// R90
// S5
// R90
// N4
// F24
// R90
// E5
// F36
// R180
// W3
// W4
// F63`;

// input = `F10
// N3
// F7
// R90
// F11`;

input = input.split(/\r?\n/);

let shipFacing = "E";
let ewTotal = 0;
let nsTotal = 0;

let directionsCycle = ["N", "E", "S", "W"];

for (let instruction of input) {
  // console.log(instruction);
  let direction = instruction[0];
  let distance = parseInt(instruction.slice(1));

  if (direction === "F") {
    direction = shipFacing;
  }

  if (direction === "E") {
    ewTotal += distance;
  } else if (direction === "W") {
    ewTotal -= distance;
  } else if (direction === "N") {
    nsTotal += distance;
  } else if (direction === "S") {
    nsTotal -= distance;
  } else {
    let degrees = distance;
    let currentDirectionIndex = directionsCycle.indexOf(shipFacing);
    while (degrees > 0) {
      degrees -= 90;
      if (direction === "L") {
        currentDirectionIndex -= 1;
        if (currentDirectionIndex < 0) {
          currentDirectionIndex = directionsCycle.length - 1;
        }
      } else {
        currentDirectionIndex += 1;
        if (currentDirectionIndex === directionsCycle.length) {
          currentDirectionIndex = 0;
        }
      }
    }
    shipFacing = directionsCycle[currentDirectionIndex];
  }
  // console.log(`ew: ${ewTotal}, ns: ${nsTotal}, facing: ${shipFacing}`);
  // console.log("#################################");
}
console.log(`Answer: ${Math.abs(ewTotal) + Math.abs(nsTotal)}`);

// **************************************************************************

let shipEW = 0;
let shipNS = 0;
let waypointEW = 10;
let waypointNS = 1;

for (let instruction of input) {
  // console.log(instruction);
  let direction = instruction[0];
  let distance = parseInt(instruction.slice(1));

  if (direction === "F") {
    shipEW += waypointEW * distance;
    shipNS += waypointNS * distance;
  } else if (direction === "N") {
    waypointNS += distance;
  } else if (direction === "S") {
    waypointNS -= distance;
  } else if (direction === "E") {
    waypointEW += distance;
  } else if (direction === "W") {
    waypointEW -= distance;
  } else {
    let degrees = distance;
    while (degrees >= 360) {
      degrees -= 360;
    }
    if (degrees === 270) {
      let temp = waypointEW;
      waypointEW = waypointNS;
      waypointNS = temp;
      if (direction === "R") {
        waypointEW *= -1;
      } else {
        waypointNS *= -1;
      }
    } else if (degrees === 180) {
      waypointEW *= -1;
      waypointNS *= -1;
    } else if (degrees === 90) {
      let temp = waypointEW;
      waypointEW = waypointNS;
      waypointNS = temp;
      if (direction === "R") {
        waypointNS *= -1;
      } else {
        waypointEW *= -1;
      }
    }
  }
  // console.log(`shipNS: ${shipNS}, shipEW: ${shipEW}, wpNS: ${waypointNS}, wpEW: ${waypointEW}`);
  // console.log("*********************************************************************");
}

console.log(`Answer: ${Math.abs(shipNS) + Math.abs(shipEW)}`);
