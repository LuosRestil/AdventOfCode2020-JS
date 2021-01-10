/*
--- Day 24: Lobby Layout ---

Your raft makes it to the tropical island; it turns out that the small crab was an excellent navigator. You make your way to the resort.

As you enter the lobby, you discover a small problem: the floor is being renovated. You can't even reach the check-in desk until they've finished installing the new tile floor.

The tiles are all hexagonal; they need to be arranged in a hex grid with a very specific color pattern. Not in the mood to wait, you offer to help figure out the pattern.

The tiles are all white on one side and black on the other. They start with the white side facing up. The lobby is large enough to fit whatever pattern might need to appear there.

A member of the renovation crew gives you a list of the tiles that need to be flipped over (your puzzle input). Each line in the list identifies a single tile that needs to be flipped by giving a series of steps starting from a reference tile in the very center of the room. (Every line starts from the same reference tile.)

Because the tiles are hexagonal, every tile has six neighbors: east, southeast, southwest, west, northwest, and northeast. These directions are given in your list, respectively, as e, se, sw, w, nw, and ne. A tile is identified by a series of these directions with no delimiters; for example, esenee identifies the tile you land on if you start at the reference tile and then move one tile east, one tile southeast, one tile northeast, and one tile east.

Each time a tile is identified, it flips from white to black or from black to white. Tiles might be flipped more than once. For example, a line like esew flips a tile immediately adjacent to the reference tile, and a line like nwwswee flips the reference tile itself.

Here is a larger example:

sesenwnenenewseeswwswswwnenewsewsw
neeenesenwnwwswnenewnwwsewnenwseswesw
seswneswswsenwwnwse
nwnwneseeswswnenewneswwnewseswneseene
swweswneswnenwsewnwneneseenw
eesenwseswswnenwswnwnwsewwnwsene
sewnenenenesenwsewnenwwwse
wenwwweseeeweswwwnwwe
wsweesenenewnwwnwsenewsenwwsesesenwne
neeswseenwwswnwswswnw
nenwswwsewswnenenewsenwsenwnesesenew
enewnwewneswsewnwswenweswnenwsenwsw
sweneswneswneneenwnewenewwneswswnese
swwesenesewenwneswnwwneseswwne
enesenwswwswneneswsenwnewswseenwsese
wnwnesenesenenwwnenwsewesewsesesew
nenewswnwewswnenesenwnesewesw
eneswnwswnwsenenwnwnwwseeswneewsenese
neswnwewnwnwseenwseesewsenwsweewe
wseweeenwnesenwwwswnew

In the above example, 10 tiles are flipped once (to black), and 5 more are flipped twice (to black, then back to white). After all of these instructions have been followed, a total of 10 tiles are black.

Go through the renovation crew's list and determine which tiles they need to flip. After all of the instructions have been followed, how many tiles are left with the black side up?

Your puzzle answer was 523.
--- Part Two ---

The tile floor in the lobby is meant to be a living art exhibit. Every day, the tiles are all flipped according to the following rules:

    Any black tile with zero or more than 2 black tiles immediately adjacent to it is flipped to white.
    Any white tile with exactly 2 black tiles immediately adjacent to it is flipped to black.

Here, tiles immediately adjacent means the six tiles directly touching the tile in question.

The rules are applied simultaneously to every tile; put another way, it is first determined which tiles need to be flipped, then they are all flipped at the same time.

In the above example, the number of black tiles that are facing up after the given number of days has passed is as follows:

Day 1: 15
Day 2: 12
Day 3: 25
Day 4: 14
Day 5: 23
Day 6: 28
Day 7: 41
Day 8: 37
Day 9: 49
Day 10: 37

Day 20: 132
Day 30: 259
Day 40: 406
Day 50: 566
Day 60: 788
Day 70: 1106
Day 80: 1373
Day 90: 1844
Day 100: 2208

After executing this process a total of 100 times, there would be 2208 black tiles facing up.

How many tiles will be black after 100 days?

Your puzzle answer was 4225.

Both parts of this puzzle are complete! They provide two gold stars: **
*/

let input = `nenwnwnwnwnewnwsenwnwnwsenwnwsenwnenww
eeeeeenewsweneeeeseeenwwnene
seeesesesenweeseewnw
nesesweneewseeseeseenwweeswesw
neeneeswneeeeeeeneeneeneweee
seseesenwsesesesesesesesenewseeseswsese
senwwwenwneswnwnwewswsewnesewesw
swswswswswnwseswwswswswswswswswsweswnw
neeneeweeeeseeneneeseeneneenenwe
seneswwnenewsewesenenenenenenenwnenenene
wwnwnenwsenwwnwwwwwwwwwwnww
seeeeneenesewseeswneeewnwseseswse
nwwwsenwnwwwwewwwwewnwwwwswnw
neneswenenenenenesweneneenewnwenenewne
nwwwneseswswnwesenwnesewswwsenwseww
nwwwnwnwnwnwnwwnwnwsewnwnwnw
nwsewsenenenwnweswnwnenwenenwswnwnwnwnw
nwnenwneewnwneswwnwnenwnwnwnwnwnwnwese
nenwneneenwnewnwnwnenw
seswswseswwseneswswsenwseswseswswe
swseswwswswswswswnwswswswswwnwseswswsww
wswseswswseswswsweswswneeseswwnwswnesw
nenenenwnwnwnenwnesenwnwnwnwnewnenenwnw
seneswnenwnenwnenewneseenwneneswnwnenenwne
nwnwnwnwnwnwnwswnwnwenwnwnwnwnwnwnwnww
nwweenweswneneneneneneeseeesewnene
nwswswswswswsweswswseswswswswswswswswsw
eeeenwneneeswneeeeneneneneeeneew
swwsewwwnwswnwwenewswswwseswswnesw
eswseswneneseswswwsenwseswswsesw
wewnewwwswswewsewneswswswswwwsw
eneeneeneneeneweenewneneeenenesw
enweneeesesesesesewneswneswesesewse
nwswswswwwswwswswwwswwswswswewsw
eeseweseseswseneseeseseeseseesee
nwswswswswswswswswnenewwswswwsenweswsw
wwwnwsesewnenewswsenenewww
neneneneneneneneeswnenwneneneswnwnwnenwnw
nenwnenwnwneswswswsewnenwnwneeswswnww
ewswswnewnwswwswswswswnesweswnwsesesw
nweenwnwnwswwnwnwnwnwwswnwnwnwenwswnwnw
senenwneneneeswneeeswnewenwnewswne
swsesweswnwwswswswswsweseseseswswwsene
swswweswnwwswnwwnwswwseewwwwsw
ewenwswwwwwwwwnwsewnwnenwsenww
eneenesenwswnenwnwnwneneneseseeswenwsw
sesesesenewnwnewsewseesewseseseesene
neeweneseeeeeswenweeneeswee
nwseseeeseeeeeseseewseweesenwe
eenweeneneeeeneseee
nwnwnwnwnwswnwnwnwnenwenwnwnwnwnwwswnw
sesenenwweseseeseesweeeneeseeese
nwenenenwnenwnenwnwsenwwnwsenwneseswsw
enwneneenwseswwneswwnwneswneseswwe
swswswswswwswseeswswswwneseseswswsese
nwnwnwenwneswnwnenenwwnwnwnwnenwnwnwne
nwwnenwewswswswswewswsweswenwswnwsw
nwwnesweswwswswwwwwewwwswwsww
sweeseeeeeeeenweeeeenwesw
wsewnewwwwnwwwwswwwwnew
wewwwswnewsesenewswswwwwwww
eeewneneeeeeeeseswesweseesee
nwwnwnenwneneswseneswsenwsenewenesenene
nwnwnwnwsenwnenewnwnwnwnenwnwnwsenenwnene
swswswswenwswseseeswnwswnwne
wesenwnwneenwnwnwnwnwnwswnwwnwnwnwsww
eeeweeeneenwneeesweseeeeee
neeswneswnewswswswnenenenwnenenwnenenenw
nwnwnenwnwnenwnenwwenwnwswwnwnwnwsenwe
wwwnwwwwwwwewwewwnwwwwnw
wnweswswwwwnwnwnwwnwnwwnewswnenwnw
nwsenwnwenwsewnwnwnenwnewnwenewnenwswnw
swnwsewweseswwsesesewnenesenesenesw
swwswswswsweswswswswswswswsw
nenewswneswneneneneneneneseneswnenenene
eswnwswswseswswswnwseswseeswseswseswsesew
newnewneneseeweeee
senwwseeseswseseseeseswswswswseswseswse
wsenenewneneweneeneseneneneeneenee
eneseseswsesewswseseseseew
wweneswwswswwwsewwswswwnwswwwsw
eeseeeewsweweseeeeenwewe
nwnewnwnwewswenenwnenwenwswnwneswnw
nenwseswnesesesweseseseswenwseewsesee
nwnewwseswwsenwnwneewnesenenwesenw
wnenenwnewneseneneneswswnesenwnwneenenene
esesesenwswseseseeeseeswsenwe
swswswswswswwswneswswwswwswswsww
neswsweswneneeeswwswwnwenwseswnenenene
nwswnenenenenwnenenwneneneneneswneenwnw
eesenweneeseseeeeswseeweesenw
swneneswnwenenwnwsenwnwnwnwnenwnwnwenw
nwnwsenwwnwnwsenwnewwwnwnwnwnwnw
nwseseneeewsenwnenenwneseswsweseswesw
nwnwnesenwnwnwwnwnwnwswnwnwnwnenwnenwne
eswswnewseswsenweswswswnesenewswswsw
eeneswneeeweneseswenenwnee
nenenwneseswwnwneneewnwenwswwswese
sewwwnwwwwwenwswwwwwwwwnw
eeewnweeneseeesweeeeweewswe
newsewswneeseswseseeseeseenesenwe
nwnwnwenwswneswsenwnwnwwnwnenenwswnwnwe
swnwswswswneswsesweswsewswseswswswseswnwsw
nwwwnwwsewwnweneswwwnwwewwww
wwswnwwwewnwwwsewnwnenwnwwwww
swswsweswswswswswneswneswswseswsesew
seeeeeeeeeeeeeeeenwswee
swseswseneswswswwswswswsesesesewneswsw
sesenwwnwseewnenwsee
seseeseseeseseeswseeesesesenwwsee
wseswsenenesweenwwswwnwwswnwnwenw
eneeeeeewenwweseseseeeneswese
swswseswseseswwseneseswswsweswsesesw
enwswsenwwnwnwnwsewwnwwewwnwnwwsw
nenwnwneneswnwnwwnwnwsenwwnwnenwsenwne
eseseeeneneeeeeeweeewesesew
seseswseeseswnwseswsesenwswseswnwseesenese
swswwsenwnewswsewsewsenwswwwnenenwse
nwswwswswwwswswswswswswswswseswnwesw
swwnwnwwnwsenwnenwenwwwnwnwnwnwnenwnww
neeneneneswnwneneenenenenwnenenwneneneswne
swneeswnenenenenenwnwswswnwewsenenene
seweweswseswswnenewnewswswnewenwne
wsewwwweswwnewwwsewswnewwew
newnwnwnwnwnwnwnwnwnwnwnwnwnwnwenw
swsenwswseseseseswnwswswswswsweswsesesese
nwnwnwwnwwwwnwwnwwwwse
nwnenwenenenwwnwnwnwnenenenenwnewene
sweseswnwnwswwsweswswswseseswswnwswsene
swwnewnweswewweneswesewenwswsw
nweeneswnwswswsesesesewwe
weswwnwswswsenwsewwswneswwswwww
nwnwnwneswnwnwnwnwnw
swswswswswswswswenwswswswswswnewswswswsw
nwnenwnwnwswswneneswsenwnwnenwnwnwswnenwnw
seseeseseswsenwseeseseneseseseseenwse
neenwnwnwwnwnwswnwnw
sesesewsesesesesesesesenesesewsesene
eeeneeeneneeenesweeenweeenesw
swsesesesenwswesweseswnwswsenwswseswsw
eseseseswseeeeswneesesesenweseeewe
neseeeeenweeeeneeeeneeneesenw
seeseseseseseseswswsenwsesewsesesesese
wswewwwwwewwswswwwwwwww
nwnwnwnwnwneenwnwnwsenenwnwnwsenwwnwnw
wwsewwwwwwnewnwwwwnwnwwwnw
swswseswswswswswsweswswswswwsweswswswnw
nenwnwnenwnenwnwneswnwnenwnwnwnwsenenesw
eweeseesweeeenwnwseswneeswnwenw
nenenewnenwnenwesenenenenenwne
nwenwsesenwseneeseneesenwseswwswsww
swswsenwnenwswswswseswwenenenwswswsese
wnewsewwnwwwwwwwwwnww
nwnenwnwnenenwnwnwnwnwnenwnwnwsenwnwnww
wwwneswwsenwwsenwwweewnwwnwnwe
wnewsewwnwwwswwenenwwnwsew
nwseswwsenwnwswnwneenewweneswwswne
weweeseseweswnwene
nwnwsewnwwnwnwwwwnwnwnwnwnwnwnw
enwseseswswswswswneswwswneswnewswswwsw
seswwenwnwwwwwsenwwwwnwswnewnwwnw
wnwwnwwwsenewnenwnwswwwwwnwwnwnw
neneneenewneenenesewneeeneneeene
wneswnwwwwwswwwwwseeseewwsw
neswnenenenwneneneenenenenwnwnwnenenene
nwnwnwnwsenwswnwnwnwnwnwnwnwnwnwenwnwnw
nenwseseneweseneneswwwseswsewswsesese
esesweseeeseeseseeeseeenwseese
sweneseswseseseseeseneseseesesesesee
nwnwnwswneneneneenwnenwnenenwnwnenw
nwwwswewsesewneww
wwwwwnewswwwswwwwwewwwwsw
sewwwneswswwsewnwnwwewwwwwe
nwnwnwnwnwnwnwnwnenwenwswnwnwnwnwnwnwnw
swswswswwswswnwswswwwswswswseswneswse
senewseseseswsewneswseweseseesesene
swseswswswneeswswswswseswswnwswswwswsw
nwesweenewsweneeneenesewneseee
eswseseseesenwseeenwnwseeseseesee
nwnewsenwwwwwwnewwwsenwnwnwww
eneneneneweneewenenene
senwnwnwnwnwnwnwnwnww
eneeeeneneeeeeeseeneeenewne
eseswswswswnwswswswswnwswseneswswswsww
nwwnwwnwnwnwnwnwsenwwenwnwnwnwsenwnw
wswsweswswswswwswswwwsenewswswwsww
enenewneneeeenenewsenewsenenene
eseeeeeseeeseeeesenwsweeese
eneeswwsewneseeeneseseeneewwee
swseseneswnwswswwswswswswswseswsweswswsese
neesewesesenwewneeeeneeneeeenwsw
eswwseenweseenweeeseeeeseee
wswseswneseneeswwnwsewse
sweswswswwseneswswneswewnwswneseseswsw
sesenwseseeseseseeenwseseeswnwsesee
seseswnwswseswswswswneseseswswseseswswsesw
nenweswwseeneeneneenenenesenenenenwnene
nwnwnwnwnwnwnwnwnwnwnwnwenwnwnwnwnwnwsw
swswwwwwswwneseswswwswwwwwswew
nwnenwnwnwwsenenwsenwwnwnenwenwnenwnwnwnw
wsewnwnwnenwnwnwnwnwnwsenwnwnwnwnwnenw
nenenenenwneeeeeeneeneeneeneseswe
wnenenenwnewnwnenenwnenenwseenenesenwne
nesenwsewnenwswenwneesewswnwswnesww
wwnwenwewswswwnwwseswnesweswnww
neneneenwneeneneneneswnenwneneneswneswne
nwnwswnwenwnwwewnwnweswnwnwwwnwwsww
eeeeeweeeneeeseseseeeesee
wwwwwswnewwwneswsewwwwwww
nweeswwseeseeenweeeeenene
nwnwnwnenenwnwnwnwsenwnwnwnwnww
seweeeseseseseeseeseeeeewesese
wseewseneseeseseesesese
senenwnwswnwnwswnenwnwnweswwwnwnwnene
swseseseesesesesewseseseenesesesewsese
seswswewseswswneswse
nenwnwnwnwnwnwenwnenenwswnenwnwswnwnwnwnw
neneeswwswnenwnwenwnenewnwnwnwnesewe
wnwnwswwnweeenenwsenwseenwnwwswnw
eeseseseeeeeeseeseneesewswnwse
neswseswewswsweswwswseswswwswswnwesw
nwwnwewsewnesewnwwsewww
weseeneneneeenesenweesenwwenenenee
nwwnwwenwnwnwswwwnwwnwnewnwnwswnww
nwwnwnwnwnwnwenwnwsenwnenwwnwnwnw
wsewseesenwneswnenenwenesewwwsww
swsesesesesesesenwwnese
newswewenenesewsenwweesweseenenw
nwnwnwnwnwnwnwnwsenwnwnwnwnwnw
swsweeswswseeneswswswnwwwswwnenwswsww
neneeneswneneneewnesenenenesenwnenw
nwnesenwnwnwnwnwnenwnwnw
nwnwswnwwwsewnwnwwsenenwwnenwnwswnwne
nwenwseseseeeeswsesesesesenwseweese
nwnwnwnwnwnwsenwnwwnwnwnwwnwnwnwnwnw
seneweseseseswnwswesesewseneseseswnew
eeeseseeeeeeseeseswnweeene
swnwseeeswnwseeseeseseesenw
swswswswsesweseswswseseswswseswswswnwsenew
swseseseswneneswswseswewsesweswswswnw
ewwswnewwwwnwswnwwwenwwwww
newneneeneseswwwseswwnenweenwseene
nwseswsesweseswswseswswnwnwswswseeseswsw
eeneeswneneeneseeeweenenenwnee
wsesesewswseeseseseseswseseswsesesenwne
swswnewewswsewnewwwnewwnwwnwew
swseswswneswwnwswneeww
sweswneeeeewneseenwneew
nwnwnwwwenesenwnwwnwnwswsenwenwswnwe
nwneenenwwsenenenenenwswsenenwneswnwnenew
wwwwsewswwwwnewwwwwwwnwww
wneneneeneseneeeeeneneneneneneene
seseeseeseeeseeesweseeesewnwew
seseeeswnwseeseseewseseeseseseeseese
seswsesesesenwsenwseseseswsesesesesesesese
swsweswswswswswnwswswswswswswneswswswsw
eeeeeweseeee
eewseseeeseeeseseeswsenesesesesenw
sewsewneseswseseweseneseeenwsewnwse
wnwwwwnwnenwwnwnwnwnwwswwnwwewnw
eeseseeewsesweeseneneseeeseee
neneseswseeeewneeeeseseswwseswee
neneeswenenweeneneenenenesewneeneene
swnwnenewwswseswwswsw
seseseswsesesesesesesesesenewwsenesese
nenesenesewesewsewneswseswneneswswse
neswswswswswswswneswseswwseswsenwneseswsw
neeeneeneneneneswnenwswneneneswnwenene
wwwwswwwnewwwswnwnwswseswwwesw
swneenwneeneewnenenenenewneswnenene
swswseseswswswseseneeswnwsesenwswswsese
senesenwsenenewnenwenwsenenwswenwnwwne
seseenwseenwseswseesesesesesesesesese
senwnwswnwnwswnwnenwwseeneneeswswnwnwne
nwwwnwnwwnwnwwewesewnwwwwwnw
enwnenweeseswnweewseneesweneeene
swswseseswsenwseseseeeswseseswswswnwsewse
nwwnwnwnenwseseswnwnwswnwne
senewseseseseeseseseseseeseeseseese
swswnwnwnwnenwnwnwnenwnwnwnenwwnenwsenwnwnw
neeneeneweeneeenweneseeeseswne
senenwnwnwnwnwnenenenesw
swswswwswneswnenwsesesweneswwswswswnew
nesewseeeseseseseesesee
eeeswnweweeeneeneneneeneeneee
senenenwnwnwswnwenenenwnwnenwnenene
senwnwnwnwwnwnwnwnwnwnwnwsewnwnwwnwnwnw
seseswseseseswseswwwseseseswsesweneswsese
eswnwsenwswswnwenenesesewwswnwnewe
eneneeseneeeeeeeseweeneneswenwnw
swwnwwswswnwswwseweswswweeswswsw
wswnwnewnwswweewsewnewnwnwseswsese
wwswwwswwswswnewswwnewswswswseswsww
sesesenesesesenwsewseseseseseewesesese
swneseswseswseswswswswswwswseseenewsese
ewswneseneswnwsesenwsewwnwenesewnew
eswnenwswnesweenwnwnwnwnenewneswsene
neweeeeneseeeeeeenewnenene
seseseseseeseseseseseseseesesesewwsene
swswswswswswswswswswswswswwswswswswewne
neenenewnwnenenenesenwneneswnwnee
nwewnwewsewswenewwseswswnwneneswne
swswseswneneseeswswseswseneseseswsewnw
wneneneenenenwnenwwnenenenenwneneene
weswnwnenwwsewswwwne
nwnenwnwnwnwswnwnwenwnweswnwnwsenwnwnwswnw
wnwwsenwswwnwnwnwenwwswnwwnwsenwwnwe
nwseeseswswseswseseswnewwseneseswseswsene
wwnwnenwwwswnwwwwweswnwwwwese
swseswswswswweneswswnenwseswneswnwswsw
ewswneeeseesewseeeseseeenewe
seswneseseswwswseseseseswseseswseseswsw
neneweneeeeesweneeenee
seeeseneweswnwwenweneenenwnesesw
eeeeeeeewesesesesesesesesesewse
newwenesesewseseseseswseswsesesesesese
eeseeseeweeneewseeeeeeeeee
swswwswwswswwswwwseweneneswswsesww
eeeweeeeseeeeeeeenweswe
wnwwwnwenwwwneseeseenwwnw
eewewesweneenenweewsweseweene
enwseswswnweswwswseneeenenewsenese
sweseswneseswswswswswswseswseeseswswnwswnw
eneswswnewwnwnwwnwsenwwee
swwwnwnwwnwwsewsewnwnwnewwnwenw
wenenwnenenwnenwneneneneneenenwwnwne
wnewwnwwsenwwnwwnwnwswnwwnwnwwwnw
wnwwwwwseeeneswnwnwnenesenwswsewsew
neneneneswnenenenenenenwnwnenesenenenenwne
nwwwwwwwswwwenww
nwseswwswnenenesenewesenw
swnwnwnwesweneseswnenenwnwnenenenenenw
eswwswswswwneswswwswwwewneswwswse
swneeseswnwswseswnwseseweeseenwswsew
wnwnenenenenwsenenenenenenenwnenene
neneseneeneneneneneneneneneeneenwswene
eenwenesenewsenenwneswewsw
swseseswseseeswneseswswswswswsesesenwsw
neeeneneneneneneneneneneneswnenenenewne
wnwnwnwwwswnwwnwnwwwnwnwnwnwnwenenw
neeswneewseeneeneneneneneneneneeeene
wswwwsewwwwwwwwwnwwweww
seseseswenwnwseesesesewseswnwsesesese
newneseeeseneneseswseewswenwseeese
wnwwwwnwwwenwnwswnwwnwwwswneww
nwneeeeeesenenweeeeeseeneesewe
nwnwnwnwnwnwenwwnwnwnwnwsenwnwnwnwnww
eseesewsewneeseneswneseneseesew
wseswenwnenewnwwswwewsesewwwsee
wsweseswsenwnwnwesesewseneseseseseese
wseswswseneneewswseseseseseswswsesese
swseswneswseseswseeswseswwswwswewswne
esweeeneeeeeseneeeeenwwee
wswswewnwswswswswnwswswswswe
nwweneswewwneneeeeneeweeeeee
sesesesenweswseseenwseseeeswsenwsese
neesewsenenweswsw
wswwswwseswweswswwwwnewwwwsww
swneswswswswswswswswnewswswseswswswswswsw
eweswnwnwwewswwswswswwswwswnwwswsw
nwsesesesweseseseseseseenwewnesenwsesesw
wwswswswewweswswswwwenewswwsww
seeeeweeeeeesweseeneeeee
esweeeseseeeseweseneseeeeese
wwswweswwwswswswwswwwwswww
neswseneseewnweenwnenenwneseswenwenwse
esenweeeseeeeswnwesweenwsenwe
swnwsenwnwnwnwnenwnwenwsenwwnenenw
swnwsenwnwsewsenwnenwnwnwnwe
neneweesweneneewenenewwsesew
nwnwwnwnwnwnwwnwwwewswnwnwnwnw
nwwnwwswwwnwenwwwnwnwwenwnwwnwnwnw
wseseswneeneweseseswswswsenwnwsesew
wwswswwwwswswwwnwswewswwwwne
eeeeeeeeesweeenweee
ewnwnwnwnwwnwnwseswnwnwnwenwsenwnwnw
nwnenweswnenwnwswenenwswnwesenwnesw
nwwnwwnwnesesenwsenwnwnwneenwenwswnw
senwneneweswenwswnwnwwwnwwsenwnwne
eseeswseeeenwsenwe
sewsesweseseeesenweseeneseseseseese
nenwnenesesenwneneesweneeenewnenee
seswswswswwwswwwnewwswwwwwww
swswwswnwswswneswwwswewswswswsewsw
nwwwswnwenwswnwsenwnwwwwewnwseneene
swwwneswnwewnwwwseswwwseswwsw
nwwenwnwnwsewnwwwnwnewnwwwwnwnwew
nwsenwsenewenwnwnewnwnwsenwswnwnwnwwnw
seswseseseswseswseseseeseesesesenwsewsenw
neswnwswnwewswswswwewnewwesweww
nwnenwnenwnenwnwnwnenwsenenwsenwnwnwnenwne
seswswwwnwwswwwswwnwswnewwwewww
nenenenenenenenenenenenwswnenenenenenenesew
neswswswswswswswswswswswswswenwswswswsw
sesweeeneeseesweeneeeeee
nwwswwswswwneenwswwneswnwswswswee
sewseesesenwseseseseesesesesesw
neenenesweweenweeeneneneswe
nwwwwneswwwwwsewwnenwswwnewwnw
eeeswnenweeeswswneeeneneswneene
sewnwnwseneneswneseswsesewswnwsww
enwnwswnenwswwsenwsenwnwnenwnwnwswnenwnw
neeeswneeeenwnewnweneeneneeseese
swsesewnwswnesewwwwswwwwwwneww
swswswwswswseswneswwwwswswswwsw
sewnewwwwwnewwwwwwswswwww
nenwenwnwneneswenwseseeeewneswnee
swwewnwwwnwsesenenesenwsweneswnenwnww
eeeseeneeeeeeweneeeeeene
swseseeswseswnwswsewswneseseswsesesese
nwseeweweneenweseeesweeeee
eeeeeneneneneneneeneeswwnewne
wwwwsewsweswswweswswnwwwswswswsw
nwswnwnenwwnwwnwnwnw
eeesenweeeseeeenwsweeesesese
enwnwseenwnwnwnwnwnwnwnenwnenenenwwnwsw
sewswswnewneswswneswswswseswswswswswswswsw
nwnenwnenwnwnwnenwnwnwnwnenwnwsenwnwnw
nwswswneswswwwswneeswwnenwnewwswswsese
sweswneswswwwswswswswwwswswswswswsw
wnwnwenwnewnwswwnwwswwwnwwenwese
swseneswswswswwswswswswneswswswswswswswsw
nwseeswnwnwsenwwswnwseenwnenwnwwe
wwwsewwnwwnewnwwwwwwwwww
sesweseeseeeseeseneenenwsewswsesese
wnwswnwwnwnwwnwwnwwnwnwnewswnenewsw
nenwnwnwnwnwnenwsenwnwnwnwnwnwnwnwnwnww
wnwnenwswnwwwnwwesesew
nwnenenenwnenenenwswnwnenwnenwneenwnene
eswnwwswswseseswswnwseswneswswsw
nwnwnenwwnenesenwnenenwnwneenenww
nwwwneneneenenwnwnenwneswneneneeneene
seseneneswwnwenewwswenewsenesewesww
neenewnenewneneneneseneneeeneneene
wwwwnenwwwnwwwwnwwwwsewwew
neswnwswnwseeseeswnweseneenwsesenew
nwnenwneenwnwnenwnwnenwswnwnenwnenwswnwnwe
nenewseswwwswswswswswswse
seswsenesesesewseswneswseeseseswseseswnw
wnwsewseswsewwwwnwwwwwwwenw
swwswwswswswsweeswswswswswswww
swnwnwnwnwwnwnwnwwwnwnwnwnwenwwnewsw
wweeneeeswneeeeeese
swswswswswswswwneneswswswswwswswswwswsesw
seseseneswseseseseswseswseseseseswwsenwsese
wwwewswnwwwwwnwwnwswnwne
wenwnwwwnwwwswwnwwwnewnewswsenw
swwswwwnenesewswswswnwswswsewwwwsw
nenwnewneneneseneswneneneneenwenenenene
nenenewneneneswnenenenenenenenenenesene
swnwwsewwwwwwwwswwneswwesesw
wwnwnwnwwwsewwwwwwwwwwsew
nenenesenewnenwneswnenwseeenwnenwsee
senwenenwnwnenwnwnenwnwneneneswnwnwnesene
neneenwneneneweeseswwnesenenwnwnewnesw
ewnwnenwnenwnenenwnenwsenwnwneswnwsenw
seswswsweseseneswnesesenwswnwseseswswwsese
swswnwswenenwsewsesw
sesweeseeneseseswsewesenenwnwsw
seseseswseseeswweseswseswnwsesesesesw
neeswnwswnenesesenwnwnwewsenwnwnewwsese
wneswwwwwwwswwswwswswswww
eeeeeeneneeenwswnewsweswnwnenw
neneswweeneeenwwseneswnweneenee
nenenewnwnenwnenewneneeneneneene
wswswswseswswsenenwswseswsweswsweswswnwsw
wsesesesesesesesesesesesesesesenesesese
wnwwnwwwnwswnwwsenwnwenwnewnwwnw
wwswneneesewseneswnenenenenenenenwneese
neeseswnenenwwnenenwseneneneenwneneww
enwnenwswneneneneneswenenwnenenenenenenwne
neneneneneneneenenesenenwneeneswnenenene
swsenewswsweseswswswewneewwswwnw
wsewswswnwneswwwwswswwswwwwwww
seneneneneeneneswsenenewnwnwnene
nenewnenenenwnenenwnenenwnenwnenenenese
seseseswswnenwseseseenwswnwswsesesewsese
swnwnwnewsweseeneseswneeenw
wwsenwnwnwnwewwwnwwwnwnwwwnwnw
nwwnwneseseeneswnwnwnenwnwsenwnwswse
eeseneeeseeeeseneseswweseeeswe
swswneseswseswwswswswswwswswswswswnenwsw
nwnwnwnenwwsenenenenwnwswnenwnwenwnwnwnw
eseseseeesesesesenwseseswseesenwsese
enweeseeeswenwseseeeseeeeeesw
sesenweeeeseseeeesweseeseeee
nwnwnwnwnwnwnwsenwnwnwnwnw
nenwneswnwnwnenwnwnwnenwnwnene
neseeeeswwenweeweweweenewe
neweeeseeseseseseeswenweeesenee
swwswnewseeswneneeseenwnwenwnenenenw
seswesenesewswenweseenweeweeene
seesewnwswseseesee
nwneswseseesewwnwseesenewneseswsese
nwseeeeenwesesewneseseeseeswsesee
nenenenewneseesenenweeesenenwnenenene
eeenwswwnwneenweeewsenwswesese
wneswwwwwswwwnewswswswwwswwseswsw
swseswseseswsesenwsesesenesesesweswseswse
wwswneswwsewwwweswsw
wseeseeenwseseneswswseese
nenwswnwswwwswsee
nwnwnwnenwnwnwnwnwnewnwnwnwswneenenenwne
eeeeswneseeeesesee
enenenwnwnwnwnenenenwnwnwnwswnenwnwswnw
eenewesesenenenenenewnenenenwneswnene
nwnwnwnwsenwnwesewnwsenenwwwwwnwsenwne
eesenwwsenwseswswwseweeeesenene
eeeneneeneeneeeeeneeewseesw
swwwwwswswswswwwswnwswwswwsweesw
neneneeenenewesweenwneeseeenenwee
swwswnwwswswswwswewswwwswswwww
neneneneneeewneeweneneenene
swswseswswnwswswsweseswswswwswswswswswsee
nwnwneswswswsewneswswseswnweswswweswse
eswswwswswswswswwneswswsweswsw
nwwwswswswwwsenwwwwnesewwswww
newneneeswneneneenesenenesw
nwwnwnwenwnwnwwnwww
nenesesewseseseseseseseseseseseseseesewe
neneneneneneneneneneeswneneswnenwneenene
nwswnwnwwwwnwnwnwewnwnww
nwnwnenwnwnwnwnwnenwnwsenwwnwnwnwnwswnwnw
nwnwnwnenewsenenenenwnenwewwsenenwne
wwsweswwwwswwswwswswsww
newseenewenwseswswsw
neswsenwnwnweenenwesenenwnesenenenenenesw
nwswwnwwenwnwnwnwnwenwnwswnwnwwnwwnw
nenwneswnenwswnenwnenenwnwnenenenenene
swswswswwweswswnwswseswswnewsweswswsw
ewseeseseseseeseeesenwseseseesese
nwnewnwsenwwnwwsenwnwww
nwswswswweneswswwswwneseswseswswswe
eewseweneeeseesweneesesenwneswe
wswwnesewnewwneneswsewwwwsewwww
nenenenwnenwnenwnenwenwnewneswnwnwnee
eeweeeeesesewnewseenweseee
enenenewswnenenwseneneeneneenenenenenee
eswenwswnwnwnenewswwneseseseeesenw
swswseswswswswseseswneswsw
neneeenwswnesweswneseneneenenweeenene
newwwwesewsewwwwwwnwswwneww
wesenenwnweseeseseeeeswe
seeeenweneneeneeeeeeene
swwsewnwseseneweneswneeswswnwseswswse
wnenenwswneenewneswneneneeeswenwne
sewnesenwwnwnwnwwnewnwnwnwnwswsewnw
eeeenwswesweeswneeweeeeenee
nwseswswsesesenwseseseswswsw
eeeseseeseesesewnenwewesweweee
wswsewwwsenwnenewsewwsenwnewwnew
eeeeenwneeeenwenesesweeeneeee
nesewseswneneenenwnene
neneenwneneneswsweenewnenwneneenene
nwnwnwnwnwnwwnwnwnwweswnwnwnwnwnwwenw
seswsweseswseswswseneswswwswseseswswsw
seseseswwseseswswswseneenewsew
swsewswswsesesewswseseswswneswnesw
ewweenwneseneeneesweeeweee
swseswswseswsweswneswswswsenwswsw
neseswseseseseseesesenwwseseesesese
nwswnwswnwnwnwwnwenwnwnwenwnwnwnwnenww
neneneneneenesweseenewnewneeswnesee
sweseseeewwneswseenweesesewnwe
nwnwnwnwewnwnwnwnwnwnwwnwwnwwsenwenw
nwwwwswswswwewwsenwww
eswwnwnwneswswswnwwswswweseswwswswsw
swneweseneenenwneneneeseneseweww
nwnenenwnwnenwnenenenwnenwnwnwsenwne
neswswswswswnwsesenenewwseseseswseswse
nesenwswseseseseewsesesweswesenwsesew
nwwnwnwnwnwsenwnweswnwwswnwnwnwnwenenw
nwneneeswnenwnwnenwwnwnwenwneswnwnwsw
nwnenwnwswnenenwnewnwnwnweweswnwswseswe
wnwsenewswnwnwnwnwwnwnwswnwnwswnwenwnwe
swwswswswswswswswswswneseswswswswswswsw
enwesenwseneesewwnwswse
neeneenewenesesweneneeeeneeene
esewesenwnenewneewnenene
nenenenenewneneneneenwnwneneneneneswe
seenweeseeseseesesesee`;

// input = `sesenwnenenewseeswwswswwnenewsewsw
// neeenesenwnwwswnenewnwwsewnenwseswesw
// seswneswswsenwwnwse
// nwnwneseeswswnenewneswwnewseswneseene
// swweswneswnenwsewnwneneseenw
// eesenwseswswnenwswnwnwsewwnwsene
// sewnenenenesenwsewnenwwwse
// wenwwweseeeweswwwnwwe
// wsweesenenewnwwnwsenewsenwwsesesenwne
// neeswseenwwswnwswswnw
// nenwswwsewswnenenewsenwsenwnesesenew
// enewnwewneswsewnwswenweswnenwsenwsw
// sweneswneswneneenwnewenewwneswswnese
// swwesenesewenwneswnwwneseswwne
// enesenwswwswneneswsenwnewswseenwsese
// wnwnesenesenenwwnenwsewesewsesesew
// nenewswnwewswnenesenwnesewesw
// eneswnwswnwsenenwnwnwwseeswneewsenese
// neswnwewnwnwseenwseesewsenwsweewe
// wseweeenwnesenwwwswnew`;

input = input.split("\n");

let tiles = {};
for (let line of input) {
  let x = 0;
  let y = 0;
  let z = 0;

  let i = 0;
  while (i < line.length) {
    let instruction = line[i];
    i++;
    if (instruction === "n" || instruction === "s") {
      instruction += line[i];
      i++;
    }
    switch (instruction) {
      case "nw":
        y += 1;
        z -= 1;
        break;
      case "ne":
        x += 1;
        z -= 1;
        break;
      case "e":
        x += 1;
        y -= 1;
        break;
      case "se":
        z += 1;
        y -= 1;
        break;
      case "sw":
        z += 1;
        x -= 1;
        break;
      case "w":
        x -= 1;
        y += 1;
        break;
      default:
        console.log("EVERYTHING IS BROKEN");
    }
  }

  if (tiles[`f${x}_${y}_${z}`]) {
    if (tiles[`f${x}_${y}_${z}`].color === "white") {
      tiles[`f${x}_${y}_${z}`].color = "black";
    } else {
      tiles[`f${x}_${y}_${z}`].color = "white";
    }
  } else {
    tiles[`f${x}_${y}_${z}`] = { color: "black", x, y, z, flip: false };
  }
}

let total = 0;
for (let val of Object.values(tiles)) {
  if (val.color === "black") {
    total += 1;
  }
}

console.log(`Answer: ${total}`);

// **********************************************************************************

function getAdjacent(tileData) {
  // console.log(
  //   `checking adjacent of ${tileData.x}, ${tileData.y}, ${tileData.z}, color: ${tileData.color}`
  // );
  let x = tileData.x;
  let y = tileData.y;
  let z = tileData.z;
  let black = 0;
  let white = 0;
  // z - 1, y + 1
  if (tiles[`f${x}_${y + 1}_${z - 1}`]) {
    if (tiles[`f${x}_${y + 1}_${z - 1}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  // x + 1, z - 1
  if (tiles[`f${x + 1}_${y}_${z - 1}`]) {
    if (tiles[`f${x + 1}_${y}_${z - 1}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  // x + 1, y - 1
  if (tiles[`f${x + 1}_${y - 1}_${z}`]) {
    if (tiles[`f${x + 1}_${y - 1}_${z}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  // z + 1, y - 1
  if (tiles[`f${x}_${y - 1}_${z + 1}`]) {
    if (tiles[`f${x}_${y - 1}_${z + 1}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  // x - 1, z + 1
  if (tiles[`f${x - 1}_${y}_${z + 1}`]) {
    if (tiles[`f${x - 1}_${y}_${z + 1}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  // x - 1, y + 1
  if (tiles[`f${x - 1}_${y + 1}_${z}`]) {
    if (tiles[`f${x - 1}_${y + 1}_${z}`].color === "black") {
      // console.log("black adjacent found");
      black++;
    } else {
      white++;
    }
  }
  return { black, white };
}

function surroundBlacks(tileData) {
  let x = tileData.x;
  let y = tileData.y;
  let z = tileData.z;
  // z - 1, y + 1
  if (!tiles[`f${x}_${y + 1}_${z - 1}`]) {
    tiles[`f${x}_${y + 1}_${z - 1}`] = {
      color: "white",
      flip: false,
      x,
      y: y + 1,
      z: z - 1,
    };
  }
  // x + 1, z - 1
  if (!tiles[`f${x + 1}_${y}_${z - 1}`]) {
    tiles[`f${x + 1}_${y}_${z - 1}`] = {
      color: "white",
      flip: false,
      x: x + 1,
      y,
      z: z - 1,
    };
  }
  // x + 1, y - 1
  if (!tiles[`f${x + 1}_${y - 1}_${z}`]) {
    tiles[`f${x + 1}_${y - 1}_${z}`] = {
      color: "white",
      flip: false,
      x: x + 1,
      y: y - 1,
      z,
    };
  }
  // z + 1, y - 1
  if (!tiles[`f${x}_${y - 1}_${z + 1}`]) {
    tiles[`f${x}_${y - 1}_${z + 1}`] = {
      color: "white",
      flip: false,
      x,
      y: y - 1,
      z: z + 1,
    };
  }
  // x - 1, z + 1
  if (!tiles[`f${x - 1}_${y}_${z + 1}`]) {
    tiles[`f${x - 1}_${y}_${z + 1}`] = {
      color: "white",
      flip: false,
      x: x - 1,
      y,
      z: z + 1,
    };
  }
  // x - 1, y + 1
  if (!tiles[`f${x - 1}_${y + 1}_${z}`]) {
    tiles[`f${x - 1}_${y + 1}_${z}`] = {
      color: "white",
      flip: false,
      x: x - 1,
      y: y + 1,
      z,
    };
  }
}

function flipTiles() {
  for (let tile in tiles) {
    let tileData = tiles[tile];
    let adjacent = getAdjacent(tileData);
    // console.log(`adjacent black: ${adjacent.black}`);
    if (
      tileData.color === "black" &&
      (adjacent.black === 0 || adjacent.black > 2)
    ) {
      tiles[tile].flip = true;
      // console.log(`will flip`);
    } else if (tileData.color === "white" && adjacent.black === 2) {
      tiles[tile].flip = true;
      // console.log(`will flip`);
    }
  }
  for (let tile in tiles) {
    if (tiles[tile].flip === true) {
      if (tiles[tile].color === "white") {
        tiles[tile].color = "black";
      } else {
        tiles[tile].color = "white";
      }
    }
    tiles[tile].flip = false;
  }
}

for (let val of Object.values(tiles)) {
  if (val.color === "black") {
    surroundBlacks(val);
  }
}

const numberOfDays = 100;

for (let i = 0; i < numberOfDays; i++) {
  for (let val of Object.values(tiles)) {
    if (val.color === "black") {
      surroundBlacks(val);
    }
  }
  flipTiles();
}

total = 0;
for (let val of Object.values(tiles)) {
  if (val.color === "black") {
    total += 1;
  }
}

console.log(`Answer: ${total}`);
