/*
--- Day 11: Seating System ---

Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL

Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

    If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
    If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
    Otherwise, the seat's state does not change.

Floor (.) never changes; seats don't move, and nobody sits on the floor.

After one round of these rules, every seat in the example layout becomes occupied:

#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##

After a second round, the seats with four or more occupied adjacent seats become empty again:

#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##

This process continues for three more rounds:

#.##.L#.##
#L###LL.L#
L.#.#..#..
#L##.##.L#
#.##.LL.LL
#.###L#.##
..#.#.....
#L######L#
#.LL###L.L
#.#L###.##

#.#L.L#.##
#LLL#LL.L#
L.L.L..#..
#LLL.##.L#
#.LL.LL.LL
#.LL#L#.##
..L.L.....
#L#LLLL#L#
#.LLLLLL.L
#.#L#L#.##

#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##

At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?

Your puzzle answer was 2166.
--- Part Two ---

As soon as people start to arrive, you realize your mistake. People don't just care about adjacent seats - they care about the first seat they can see in each of those eight directions!

Now, instead of considering just the eight immediately adjacent seats, consider the first seat in each of those eight directions. For example, the empty seat below would see eight occupied seats:

.......#.
...#.....
.#.......
.........
..#L....#
....#....
.........
#........
...#.....

The leftmost empty seat below would only see one empty seat, but cannot see any of the occupied ones:

.............
.L.L.#.#.#.#.
.............

The empty seat below would see no occupied seats:

.##.##.
#.#.#.#
##...##
...L...
##...##
#.#.#.#
.##.##.

Also, people seem to be more tolerant than you expected: it now takes five or more visible occupied seats for an occupied seat to become empty (rather than four or more from the previous rules). The other rules still apply: empty seats that see no occupied seats become occupied, seats matching no rule don't change, and floor never changes.

Given the same starting layout as above, these new rules cause the seating area to shift around as follows:

L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL

#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##

#.LL.LL.L#
#LLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLLL.L
#.LLLLL.L#

#.L#.##.L#
#L#####.LL
L.#.#..#..
##L#.##.##
#.##.#L.##
#.#####.#L
..#.#.....
LLL####LL#
#.L#####.L
#.L####.L#

#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##LL.LL.L#
L.LL.LL.L#
#.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLL#.L
#.L#LL#.L#

#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.#L.L#
#.L####.LL
..#.#.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#

#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.LL.L#
#.LLLL#.LL
..#.L.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#

Again, at this point, people stop shifting around and the seating area reaches equilibrium. Once this occurs, you count 26 occupied seats.

Given the new visibility method and the rule change for occupied seats becoming empty, once equilibrium is reached, how many seats end up occupied?

Your puzzle answer was 1955.

Both parts of this puzzle are complete! They provide two gold stars: **
*/

input = `LLLLLLL.L.LL.L.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLL..LLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL..LL.L.LLLLLLLLLLLLLLLLLLL.LLLL.
LLLLLLLLL.LLLL.LLLL.LLL.LLL.LLLLL.L.LLLL.LLLL.LLLLLLLL.LLLLLLLLL.LL.LL.LLLLLLL.L.LLLL.LLLLL
LLLLLLLLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLL.LLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLLLL..LLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.L..L.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL..LLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLL.LL.LLLLLLLLL.LLLL.LLLLL
.L......LL..LL.LLL..L...L...L.............L........L.L......L..L...LLL....LLL..L..LL.....LL
LLLLLLL.LLLL.L.LLLLLL.LLLLL.LLLLL.LLLLLL.LLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LL.LL
LLLLLLLLL.LLLL.LLLL..LLLLLL.LLLLL.LL.LL.LLLLLLLLLLLLL..LLL.LLLLLLLLLLLLLLL.LLLLL.LLLL.LLL.L
LLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLL..LLLLLLLLLLLLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL
LLLLLLLLL.LLLL.L.LL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL..LLLLL.LLLLLLLLL.LLL..LLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLL.L.LLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLL
LLLLLLLLLLLLLL.LLLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLL.LLL.LL.L.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.L.LLLLLLLLLLLLLL.LLLL.LLLLL
.L....L..L....L...L..L..LL..L..L...LLL.LLL.L..........LL.L.LL..L.L...LLL..........L....LL.L
LLLLLLLLL.LLLL.LLLL.LL.LLLLLLLL.L.LLLLLL..LLLLLL.LLLLL.LLLLL.LL.LLLLL..LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLL.LLLLLLLL.LLLL.L.LLL.LLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLL.LLLLLLLL.L
LLL.LLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LL.LLLL.LLLL..LLLLLLLL.LL.LLLLLLLLLL.LL.LLLL.LLLLL
LLLLLLLLL.LL.LLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL
LL...LLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLL..LLLLLLLLL.LLLL.LLL.L
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL..LLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLL.L.LLLL.LLLL.LLLL.LLLLL
..LL.LLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLL..LLLLLL.LLLLLLLLL.LL.L.LLLL.
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLL.LLLLLLLL.LLLLLL.LLLL.LLLL.LLLLLLLLLL
L........L.LL.....L..L...L....L....L.LL..L.........L..L..L......L.......L...L..L..........L
LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LL.LLL.LLLLLLL.LLLLL.LLLLLLLL.L.LLLLL.LLLLLLLL.LLLL.LLLLL
LLLLLLLLLLLL.L.LLLL.LL.LLLLLLLL.L..LLLLLLLLLLLLL.LLLLLL.LLLLLLL..LLLLLLL.LLLLLL..LLLL.LLLLL
LLLLLLLLL.L.LL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLL.LL.LLLLL..LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL
LLLLLLL.LLLLLLLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.L.LLL.LL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.L.LL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLL.
..L.L.....LL.L.L..L.L....LLLL.L.L..L..L.L.L.......LL.L...LL..L.L.....L....L....LLL....L.L..
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LL
LL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLL.LLL.L.LLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LL.LLLLLLLL.LL..LLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL..LLL.LLLLL
LLLLLLL.L.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLL.L.LLLLLLLL.LLLLLL.LLLLLLLLLLLLL..LLLLL
LLLL.LLLL.LLLL.LLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL
...L.........LL.L..L.L.L......LL.......L........L...LL...LL.LL.........L...LL...L.LLL..L.L.
LLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL.L.LLLL.LLLLL
LL..LLLLL.L.LL.LLLL.LLLL.LL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLL.LLLLL..LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLL.LLL.L.LL.LLLLL
LLLLLLLLLLLLLLLLLLL.LLLLLLL..LLLL.LLLLLL.LLLLL.L.LLL.LLLLLLLLLL.LLLLLL..LLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLL.LLL.LLLLL
..LL..LL....LL......L......LLL.L......L.L.L.L....L.LL....L...L.....L...L.L...LL....L.L.....
LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLL.LLLLL.LLLLLLLLL..LLLLLLLL.LLLLLLL.LL
LLL.LLLLL.LLLLLL.LL.LLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.L.LLL..LLLLLLLLLLL.LL.LLLLLLLLLLLL.L.LLLLL
LLLLLLLLL.LLLL.L.LL.L.LLLLL.LLLLLLLLLLLL..LLLLL.LLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL
LLLLL.LLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLL.LLLLLLLLLLL.LLL.LLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLL.LLLLL
L.L.LL.L.....L...L.........LLLL.....L.L..LL.LL..L.L.....L.....L..L.L.L....L.L..L..L..LL..LL
LLLLL.LLL.LLLL.LLLL.LLLLLLL.LL.LL..LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.L.LL.LL
LLLLLLLLL.LLLL.LLL..LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL
LLLLLLLLL.LLLL.LLLL.LL.LLLL.LLLLL.LLL.LL.LL.LLLL.L.LLL.LLLLLLLLLLLLLLLLLLLLLL.LL..LLL.LLLLL
LLLLLLLLL.LLLLLLL.L.LLLLLLL.LLLL..LLLLLL.LLL.LLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLL.
LLLLLLLLL.LLLL.LLLL.LLLLLLLLLLL.L.LLLLLL..LLLLLL.LLLLL.LLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLL..L.LLLLLLLLLLLL.LLLLLLLLLLL.LL.L...LL.LLLLL
L.L.L.LLL.L....L...L...L.LL..LL....LLLLL.L..LLL...L..L.......L.LL...L.L.L......LL...L.L.L.L
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.L.LLLL.LLLLLLL.L.LLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLL.LLLLLLLLLLLLLLLL.LLL..LLLLL
LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL.LL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL
LLL.LLLLL.LLLLL.LL..LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.L.LLLLL.LLLLL.LLLLLL.LL.LLLLLLLLL..LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLLLLL.LLL.LLLL.LLLL.LL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL..LLLLL..LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LL
LLLLLLL.LLLLL..LLLL.LLLLLLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLL.LL.LLLLLLLLLL
LLLL.LLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLL.L.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL
................L...LLL..LL....L.....L..L.LL..L....LL.L...LL.LL..L.L.L.....LLL.L....L.....L
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLL..LLLLL.LL.LLL.LLLLLLLLLLLLL.LL.LLLLL.LLLLLL.LLL.LLLLL.LLLL.LLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLL.LL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLL..LLLLLLLLLLLLL.LLLLLLL.LLLLLLLL..LLLLLLLLLLLL.L.LLL
.LL...LLL.L.LL.LLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LL.LLL.LLLLLLLLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLL
LLLLLLLLL.LLLL.L.LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL
....L...L....LL.L.L..L.L..L...LL....LL.....L.L...LL.L.L.......LL.L....LLL...L..LL.L....LLLL
LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLL.LLLL.L.LLLLL.LLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL
LLLLLLLL.L.LL..LLL..LLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLL.LLLL.LL.LLLLL.LLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL
LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL
LLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLL`;

input = input.split(/\r?\n/);
input = input.map((row) => row.split(""));

// function countOccupiedAdjacent(row, col) {
//     let total = 0;
//     if (input[row - 1]) {
//         const ul = input[row - 1][col - 1];
//         if (ul === "#" || ul === "1") {
//             total ++;
//         }
//         const u = input[row - 1][col];
//         if (u === "#" || u === "1") {
//             total ++;
//         }
//         const ur = input[row - 1][col + 1];
//         if (ur === "#" || ur === "1") {
//             total ++;
//         }
//     }

//     const l = input[row][col - 1];
//     if (l === "#" || l === "1") {
//         total ++;
//     }

//     const r = input[row][col + 1];
//     if (r === "#" || r === "1") {
//         total ++;
//     }

//     if (input[row + 1]) {
//         const dr = input[row + 1][col + 1];
//         if (dr === "#" || dr === "1") {
//             total ++;
//         }
//         const d = input[row + 1][col];
//         if (d === "#" || d === "1") {
//             total ++;
//         }
//         const dl = input[row + 1][col - 1];
//         if (dl === "#" || dl === "1") {
//             total ++;
//         }
//     }
//     return total;
// }

// let stable = false;
// while (!stable) {
//     stable = true;

//     // for (let i = 0; i < input.length; i++) {
//     //     console.log(input[i].join(""));
//     // }
//     // console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n");

//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < input[i].length; j++) {
//             const curr = input[i][j];
//             const numAdjacent = countOccupiedAdjacent(i, j);
//             if (curr === "L" && numAdjacent === 0) {
//                 input[i][j] = "0";
//                 stable = false;
//                 continue;
//             }
//             if (curr === "#" && numAdjacent >= 4) {
//                 input[i][j] = "1"
//                 stable = false;
//                 continue;
//             }
//         }
//     }
//     input = input.map(row => row.map(item => item === "0" ? "#" : item === "1" ? "L" : item));
// }

// // console.log(input.map(row => row.join("")));

// let occupied = 0;
// for (let i = 0; i < input.length; i++) {
//     // console.log(input[i].join(""));
//     for (let j = 0; j < input[i].length; j++) {
//         // console.log(input[i][j]);
//         if (input[i][j] === "#") {
//             occupied++;
//         }
//     }
// }

// console.log(`Answer: ${occupied}`);

// *****************************************************************

function countOccupiedVisible(row, col) {
  let total = 0;

  function ul(i, j) {
    i--;
    j--;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i--;
      j--;
    }
    return false;
  }

  function u(i, j) {
    i--;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i--;
    }
    return false;
  }
  function ur(i, j) {
    i--;
    j++;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i--;
      j++;
    }
    return false;
  }
  function r(i, j) {
    j++;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      j++;
    }
    return false;
  }
  function dr(i, j) {
    i++;
    j++;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i++;
      j++;
    }
    return false;
  }
  function d(i, j) {
    i++;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i++;
    }
    return false;
  }
  function dl(i, j) {
    i++;
    j--;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      i++;
      j--;
    }
    return false;
  }
  function l(i, j) {
    j--;
    while (i >= 0 && i < input.length && j >= 0 && j < input[i].length) {
      if (input[i][j] === "#" || input[i][j] === "1") {
        return true;
      } else if (input[i][j] === "L" || input[i][j] === "0") {
        return false;
      }

      j--;
    }
    return false;
  }
  if (ul(row, col)) total++;
  if (u(row, col)) total++;
  if (ur(row, col)) total++;
  if (r(row, col)) total++;
  if (dr(row, col)) total++;
  if (d(row, col)) total++;
  if (dl(row, col)) total++;
  if (l(row, col)) total++;
  return total;
}

let stable = false;
while (!stable) {
  stable = true;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const curr = input[i][j];
      const numVisible = countOccupiedVisible(i, j);
      if (curr === "L" && numVisible === 0) {
        input[i][j] = "0";
        stable = false;
        continue;
      }
      if (curr === "#" && numVisible >= 5) {
        input[i][j] = "1";
        stable = false;
        continue;
      }
    }
  }
  input = input.map((row) =>
    row.map((item) => (item === "0" ? "#" : item === "1" ? "L" : item))
  );
}

let occupied = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "#") {
      occupied++;
    }
  }
}

console.log(`Answer: ${occupied}`);
