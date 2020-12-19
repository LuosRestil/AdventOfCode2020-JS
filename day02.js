/*
--- Day 2: Password Philosophy ---

Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

Your puzzle answer was 536.
--- Part Two ---

While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

    1-3 a: abcde is valid: position 1 contains a and position 3 does not.
    1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
    2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.

How many passwords are valid according to the new interpretation of the policies?

Your puzzle answer was 558.

Both parts of this puzzle are complete! They provide two gold stars: **
*/

input = `2-6 w: wkwwwfwwpvw
14-15 v: hvhvlhvvvwxvdvscdpvg
2-3 b: bkkb
3-4 v: wgvvzvhcvlrvjvvmv
11-12 c: cccccccccqcccckcc
2-5 z: zkzpzlzzzzz
7-13 x: xxxxxxxxxxxxxxx
7-10 f: zffxbwffqfxfffxf
16-17 h: hvhhhhhhhhhhhhhrt
2-3 k: krjkk
10-11 k: kkkkkkkkkkg
17-20 d: dmfpddzdlddtvdddwdtk
3-5 m: tdwmmmmj
4-6 b: ncdbbpgxrg
8-13 d: bdfddglkdddgqwdfczs
2-5 s: tsszkhgf
2-3 k: zbkt
5-9 k: qqwmdqkzkldhpjql
4-6 p: bpjfhrpd
10-11 r: rrrxrrrrwhrrrr
6-9 n: nnxnwnnnbl
4-6 k: kmgpkkjd
4-5 v: vvdgv
3-4 h: jhhh
5-14 n: gnsnnnlvbzcsjjwqj
14-17 f: qfqffffqffnlwcffz
11-12 j: mchrqljrjhjjhjvmjwb
1-4 k: kkkkk
13-14 q: qqqqqqqqxqqqqlqq
1-3 k: cmkrdptlkxlkh
7-9 m: mmmmmmmmmm
4-10 b: brbxqbbblb
3-4 f: fqdff
3-4 r: rqrpzrr
6-7 n: cknndnngpnnn
2-6 b: pkbbbbb
3-9 s: lssssssjswzss
1-6 m: kmmmmmmmmmm
1-4 n: nnnnnn
3-4 p: pppqp
7-16 s: ssnslsmshfsvstxsprw
1-5 x: nxxxxxx
2-4 q: qcqqhq
4-5 r: rrprz
2-5 q: kqqqqqq
6-7 m: nggpmcm
4-9 r: rrrrrrrrr
3-6 j: zqjpzkkpspsjs
1-4 h: hhhs
4-8 l: wlqgklsl
6-7 f: zxfwcpf
5-17 g: cgvfqmggggqggggzgw
2-13 m: mpsmmmmmmmmmmmm
8-12 b: bdbbblbbbbxkbmb
17-18 z: zzzzzzzzzzzzzzzzjz
6-11 h: dlkhchqxthn
1-6 x: lxxxxxsxdxdhxxfj
3-4 m: mmpm
4-8 l: ncphmhtldmrtvslrbt
14-15 c: ncgjthcdvgjcwcjz
4-5 s: bsjsssbt
2-5 j: psjvjzbghz
11-12 b: bbbbbbbbbbbbl
6-7 b: bbbbbbb
6-7 k: kkkkkkps
9-10 w: wwwcrxcwwwwwwf
1-3 k: rkkk
4-5 q: dqxcq
2-14 v: vhhtvgwvdhvmqvmsp
2-3 c: nbzrfvv
5-9 h: hhkvmrxhsf
3-5 v: bdlgvcqftvvx
8-9 p: ppppppppw
4-6 f: dfkfdf
7-8 m: mnnmmqwmmzjfb
11-17 w: wgwwwwwwwwwwwwjbwwww
1-5 q: ccbwhgqszgnqtf
1-6 d: dkxxddd
5-10 c: ccccrcckccccc
10-13 x: rxcxxxxxhxcxkxxx
2-6 p: pppppfp
4-5 k: mkjnkmtkkpk
7-14 f: ffffffkwfffhpf
8-9 h: hhhhhhhwwhhhh
3-4 r: rrrrr
3-4 t: swptmltp
7-10 l: lmllgllwll
6-13 q: zqnrkqpqcdfnqvdnlrqq
2-3 k: ccvmrkxl
11-15 l: llllllllllllllpll
11-18 v: vvvgvvvvvtmvrvvvsqv
11-14 t: dshqbfvbdttqcx
7-8 n: wghnnnwnnnmvnn
4-7 b: bpxcbffcsr
6-10 l: rnlnwlmvtl
17-20 j: jjvjjjjjjsjjjjjtmjjz
5-8 g: mvcfkrfcgppfjv
3-11 f: crzfpxmtlkwwnnfrd
4-6 v: vvvvmsvd
3-7 d: dddddddd
10-11 m: mmmmmmmkmgmm
5-10 s: jgsssgsssqsh
12-18 g: fbggtqvjggxmgggjkg
10-11 v: nfclzhbnphxx
2-10 m: ntqmdkhrrj
4-7 g: ggxtmdggmghgc
8-11 g: rggggxttqggg
7-9 t: tthsjppttftt
15-16 v: vvvvvvvvvvvvvvvh
2-5 g: sgcgr
5-7 f: fxffjffffp
10-15 r: rrrrrrdrrrrrjrr
13-16 p: ppppppbppppppwpmppp
5-11 z: zbmxftzzzzmz
11-13 k: jkkxkkkkvkwkkkkvk
6-7 n: nnntnnz
8-11 j: gjjjjnjkdjqpjtj
2-4 x: xxxjj
2-13 r: rgnrlpwrbrrxvrrrrzw
5-6 p: pppppp
14-16 n: pcnnxqnglnnznngn
1-2 f: fffffx
4-5 d: ddpvcdv
2-3 n: kfnn
4-6 q: qbhbcwmhph
5-6 p: pnbccxp
5-9 v: vvvvvvvvmv
2-4 x: rjsv
9-16 x: xxxxxxxxmxxxxxxnx
2-5 j: jdjbjjjjj
6-12 t: tttgtttltbtnhrtgk
7-10 v: vvvvvvvvvsv
4-7 h: zmlhhpljhjjhqfh
8-9 m: mmmxmsmkmmmm
10-11 z: zzzzzzzzztwz
6-11 x: xxxxxxxxxxhxxxxxxx
1-13 g: gggfgggggggggggggz
14-15 f: frjzssdfnnzflffpsqfj
10-18 f: fffffffffffffffffff
3-4 s: ssmg
13-14 t: ttttttttttttgt
6-7 l: lllscll
14-16 r: tbbnrgdkdrrsdrnrjnb
11-12 k: lkkkkkqkkkkclkkqkk
2-4 n: hnfnn
4-5 n: nsnptgcccnrtc
9-10 z: zzzzzzzzzrz
7-8 m: pmcgtmmmmmxmvm
6-9 x: xxxxfxxxq
2-4 w: wwws
9-17 h: hbhhcvhrhctvhhhhx
2-11 k: qfnkfhlbfkshtqvcnk
5-9 k: kkkkkkkkbkkkkklkk
3-5 v: pgsjv
10-14 n: nnnnnznnnnnnnknr
6-8 k: ppkhkkgkjkqjkkhzkbv
1-2 f: pfcm
10-11 g: gggggwgggbgg
3-4 f: fffsjqff
7-13 x: kxwpsxxwqkxtx
3-13 k: klxrstnsxxvmk
3-6 w: dwrwgw
1-3 q: qqqq
4-7 s: pdsdmsssm
2-9 d: dtzdfddmcbtddjddc
4-5 j: jjhjjj
1-5 l: ldjll
7-11 m: mmwmmlmmmmmmm
9-11 b: bklmbbbbbdmfb
4-9 b: bbbbbbbbbbb
10-14 h: jhgchkhkhhhhhqhh
5-6 g: lhqrggfngdkrdthzlvxg
3-4 z: zzzzzzzz
2-6 z: lptzfpx
1-4 m: msjscmmmcmpcj
6-7 k: xsklqkq
8-16 m: mmmmmmmmmmmmmmmmmm
1-13 k: kjzbztnmnqkckcgkt
15-17 d: ddmckddddkfqdmddn
4-7 t: tzttvbtxltst
2-12 t: ntkdzntftxnjl
3-5 t: tttttt
7-10 t: ttfgtlfhftzkft
1-3 z: bzbzz
4-5 q: wqkqp
13-14 s: mssssssscssssvcxs
1-11 t: ttttttttxts
6-8 x: xxxxsxxxxsf
1-3 g: cxngg
12-14 h: hvhbhhnhhhhhhhh
1-5 q: qqqqqq
4-8 n: nnhnkzzrbgwtbvnprnjx
2-5 t: qrlttrdf
5-6 h: hhhhhlhhh
1-12 w: wwwwwwfgqwggwxwfwbw
6-10 p: pppppppppcppp
12-13 k: klpvkmrlnkfpmv
2-7 n: nnpswzxxhd
4-6 k: pnkgkqrhg
7-9 g: ggggzgqgngm
9-12 d: ddkddddddpdd
4-9 l: lhhlxcsqlkxxsbj
9-16 c: ccdcckrccchcccpccs
5-11 l: jshrlcrlkxqp
4-6 c: cwcvcccctcc
6-8 d: dsbmlddlqc
4-6 r: frrrhsb
1-2 f: frhhfjgffwnnf
5-13 b: bbbbbbbbbbbbbbbbb
5-13 g: jnxbjmfbgmmbg
1-9 g: gkggrbggg
1-9 z: zzzzzzzzzzz
15-16 k: kkkkkkkkkkkkkkks
3-4 b: bttm
7-8 k: kkkkkkkt
13-14 f: ffffsffffffffj
8-9 q: dqqqqqqwfqqbq
4-5 m: mmfvm
4-10 z: hzjzprfqtzfzlcdpvm
19-20 x: xxxxxxxxxxxzxxxxxxxc
10-11 l: lzllldlllhlllcpll
9-15 l: lflllblllllqllhl
6-9 c: ccccczccxvckck
7-14 w: xjchwqvkfgswpwpskc
3-6 v: vvvxtb
3-5 f: ffksvqx
10-12 m: nxztknmwgmfgq
4-7 n: nbcwzbvhgnnn
3-4 d: pdhdgwdd
10-13 l: ltmwlllxlltclqpllp
16-20 t: tttttttttttttttttttt
6-7 z: gflqpzzzpx
1-6 x: fxtmtlxgxl
2-3 r: rsrr
2-16 p: tpsthmqblbjdvxfspm
13-15 c: ccccccccccccccc
8-9 f: fffkfxfgfff
1-6 f: fzfffjf
5-6 d: dddcdrd
3-5 f: fffffff
5-6 h: gchlpkxhshhh
2-3 n: rnvx
1-3 d: dmfp
7-8 g: ggzggjwgkg
8-13 n: cndnnknvpnvnnn
2-4 z: xztz
2-3 h: hhzzm
4-5 c: ccccckzdqcw
5-9 w: qqwwwwvsw
1-2 g: ggmgggjg
6-7 g: bggxggkgsmgg
4-7 j: zrjgsvj
4-6 g: vgccgdc
1-11 m: cnmbjlmhlqx
8-12 m: mmmmmbmmmmgmsmmm
14-15 n: nwpnnnnnnnnnnnnnpn
14-18 k: tkkkkpkkpkkkkkxhkj
3-5 m: mpmmnmd
12-13 m: qmmmmmmmmmmmxmm
6-8 b: cbbbbkbb
7-8 m: mmmmmmtm
2-7 s: ntbjsswshs
2-3 r: btrgr
15-16 h: vgxdgxjvhzdbhjhhj
15-16 j: jjbjjjjjpqjjjjjj
2-4 r: rrrr
1-9 n: nntshwzsf
2-4 n: nnnpnjcc
3-4 p: hrzpsp
7-8 l: lllnlbqm
1-9 d: sddddddddd
2-3 s: scssswssq
2-5 p: zpvwp
16-19 z: zzzzzzzzfrzzzzzszmz
5-6 g: gtgkgggzgr
4-7 x: bclxbtq
11-12 k: kkkkkkkkkkdk
9-18 x: bxlqxvxxxxxxxxxcvmc
8-18 g: dgpgfgngjmqgqgqpnm
4-10 f: fffsfffffwfff
1-4 f: dfcztnztghj
7-10 t: tttpttkttjtt
3-4 h: vfhhhhv
7-9 s: wkjsslxdss
5-14 z: zzzzzzzzprzzzfzzcwzz
1-3 v: vpvrvcvvdkmm
5-9 c: bcbcccccmcchrgz
7-12 f: ffqfvffkfrztjdfcff
6-7 n: crmdnmvmnnnnnqnnnzn
9-12 t: tttsqtttpttrtttlrt
2-3 n: jnxpgngtgmx
8-10 p: pxpsppzvpppppp
4-5 x: nkbvx
1-3 w: nrlj
1-2 b: bdhs
5-11 q: qqqqbqqqqqqqqq
2-4 n: nnlmmzhtnknb
4-16 h: xhhhhchhhhhhghhphhs
6-11 t: tttzqtbttttt
10-11 q: jqqqrqqpqsnq
13-14 f: ffhffffkffffff
10-12 d: dddddddkdrddd
12-13 h: qghhdvthxqhhh
1-4 b: bnvsbb
6-11 q: xqnfqqqqvqfqvqqqh
3-8 k: skskkkkvkk
4-6 b: bbbbbm
6-9 v: fvthvvvvzhvv
5-9 w: wwwwwwrwgw
3-19 c: vlpkjhtcvbktwwrcmnc
10-13 r: zrrrrrgwrrrsrrrcvr
5-16 n: svcqnnvkmjhbgjxh
4-15 n: nnnknnnhnnnnnnnnnn
9-13 q: fqxlqsqlqgxkqvrfqgb
15-16 z: zzzzzzzzzzzzzzhdzz
2-18 j: pjrkwwdbsfbbncjkpz
11-12 z: zzzzzzzzzzzm
2-4 h: kpfj
5-17 h: whwdzvthhhhhhhhhhhh
5-7 r: rrcqvnsjrcvrwrfrp
5-7 w: wwrwwwww
1-3 l: llhl
12-16 r: bhlqqxszwnnstrff
3-5 f: pxdrf
5-8 x: hcjxszxxcxxxxx
3-4 q: qqqlc
4-5 n: sfnhn
3-5 n: nnmnnx
4-11 g: gkmnglkjxdn
7-10 r: rrrbqqrrgbrrmp
1-6 t: ttncttttzbtcst
16-19 h: hhhpgcthnhdrtcbhvjh
4-6 c: ccpcldcc
11-12 s: sbvzssshsnvl
8-17 w: scwwpwwwwwwtvwwwwwh
8-9 x: xxxxxxxxk
12-13 g: ggtbxqgggzxcpshgg
4-12 l: prllqnlgzsqxlvwbj
8-9 d: dddddddngd
3-6 f: rfffkfqf
12-16 g: zfvpgsmmhtprpcrgzkww
12-13 q: qqqqtqqqqqqxxq
4-8 d: dpzddfddhvjspzpn
2-5 n: kjmbgf
1-16 x: xlxcxxxxpxxqfxxlxrx
4-7 b: cvbrbhlsbzc
1-4 f: hffpff
4-6 f: fffnfmf
10-11 s: sssssssmsfsh
1-4 q: qpzdqqqqcqtqqqqq
7-8 s: sdhjmdvwtssv
13-14 t: tttctgttttttttttx
4-12 h: zhxlbhhhhhzch
6-10 p: ppdpptpxkpppd
2-6 s: pslhftrg
2-5 g: stgfgsq
3-4 b: bbxbw
5-6 s: qjdmshssqjpksmv
17-18 q: qqqmknmrlqqpkqtlqc
16-17 c: cccccdcccccdcccdccc
2-4 n: nvnvd
7-8 d: dddddddd
4-14 d: mdcqlgcrjdrvfd
6-9 m: mpmmfmmmvm
9-17 v: vvvvvvvvvvvvvvvvvv
2-3 r: rrrj
10-13 s: sjrssssdftsssss
12-16 j: bjznjjjjwjgxjjqj
8-9 t: dttttttcttttttf
1-5 n: nnnnnn
1-7 p: ptdpsggktwjkpzpp
1-5 w: rwpwwwqww
11-12 k: kxrkkrnnlgkkz
3-5 p: ppqppp
1-2 l: jkrmtrnflxhj
9-11 x: pqxxxvmxqxx
14-17 f: wftqlzbvmhnlfjbvf
2-5 x: xxxxj
3-13 m: zjmmxcbcbksmntxghsm
1-8 v: nvvvvvvjvvg
3-4 b: bblb
1-3 p: qppmwvhmgmkcspdml
3-4 n: nnntnn
2-3 p: nrppvr
10-11 r: crrrrrrrrrrr
4-5 p: jqpkm
12-14 k: kkjklkkhkrkkkbkkkkk
3-13 l: lqfjldlxflnvrlcdmhll
9-13 c: cxsccbqkhccccxcjcp
5-6 c: cvcsccp
13-14 d: dddddddddddddjd
1-5 d: cmbdxnxndpct
3-4 l: lllk
5-6 b: bbbbdb
5-6 v: kczqvvvv
4-13 s: sszsbksgtssbdmsls
2-13 q: kqxqrccgfhwcq
4-12 t: ttttlttttttlk
9-10 j: jjjjcjjjjgjjjjj
14-16 h: hhhhhhhhhhhhhhhh
10-11 z: zzzzzzzzzzz
1-5 x: xxnxs
2-6 h: hwshhhzhhzhsdhxh
12-14 x: xsxxxxxxxxxtkxx
3-9 f: fvffvfxxf
14-15 l: llwllfnlllrjxhlx
7-8 g: ggggbgjt
1-3 w: wwcw
5-11 p: pppwqpbpppppppp
14-18 v: vvvvvvvvvvvvvvvvvvv
5-6 j: gjjjqpjj
5-8 n: nqtxngdznfwrjxtx
2-3 h: hchzhk
2-4 z: vtzz
1-4 q: mqqnqq
3-5 g: gggggggg
5-7 v: vnvvvvv
1-3 h: hlcsjhs
8-19 s: stsssspqwsssssssssss
1-3 f: nffn
15-17 d: dddddddddddddddddd
2-4 x: gxhl
11-12 n: nnnnnnnnknnjwnn
4-6 w: wwwkww
10-17 p: ppwppzpppvqppszbxp
11-14 z: zzzhszzfzzlxcz
3-10 d: ndnddmwdsnpdkbn
7-9 f: ffffffwtf
9-11 l: lhndlllllljmqccll
1-2 r: jrrrrrrrr
2-3 b: bbbbn
1-4 h: hhhhh
4-8 s: gsmsmtrs
1-3 s: ksssss
13-14 k: kkkkskkkkkkkkxkkkk
4-7 v: tdgsvvjvvqvvvn
6-11 r: dqkpngrmzrrlt
13-14 k: kkkgkkkkgkkkkkkh
2-6 x: xxxxjllxsx
9-12 v: vvvvvvvvsvvv
12-14 z: zzzzzpzzzzzvzcz
14-15 w: wwwwwvwwwwwwwwpw
3-4 k: kjkkwkk
2-8 m: hhtmwxgm
5-13 z: zpzzwzzzzfwzdznzmwzf
4-6 x: xfxxxg
6-9 p: smjdwprpzh
5-10 f: nfxffpffffffpf
13-14 h: phhhhhhhwtrhjhfhhhh
4-12 l: nbrstqwkwgclcbznzlfj
2-4 j: jvjvjjjmj
2-3 p: pxxp
4-5 g: gggngg
11-13 d: gddddqddzdzdddh
4-6 t: bdltkmtttcwctm
7-11 f: bxwxmhftfbm
12-13 g: gpggwghghcgghgggkpgg
6-7 w: wwwwprr
2-12 l: lllmxrnlgllvlwltcl
1-4 g: grgk
5-9 k: lxkhkklkbkdqlkk
4-7 r: pjgrzzrrgpxnckxzrcxc
4-5 m: mmmmm
7-17 v: sbtvbpgbnqbfswdhbv
2-3 w: wtwx
3-5 v: lvdhvb
7-10 s: szssjsshdvs
9-10 p: ptfpsfpjpnvppxpghpp
15-17 m: mmmmmmmmmmxmmmqldmrm
18-19 z: zzzzzzzzzzzzztzzzzk
5-7 f: flfqfffvffn
4-6 x: sxrqkl
1-2 b: kzbb
2-9 c: cccccccbjjv
16-17 p: pvpfppppppppppppwp
9-16 h: hshhhtjhthhhwhkh
2-10 b: fmwfbcdwvbj
8-10 j: jjjjjjjrjjj
1-7 x: xtxzjwdxmcjdh
4-5 j: jjjrjj
3-7 f: ffvfffnf
11-13 z: dlchjrjjrlzzz
2-8 s: ssssssssss
4-5 k: bfvjvgqkzkwbhk
2-5 b: zkkcnrrglcxfk
17-18 m: lmmmmmmmmmmmmmmmgh
7-9 p: tdppkcpnkpkpf
10-12 t: ttgqmntbtptg
2-5 m: fmkhm
10-11 g: gggdxggdggxg
6-12 j: jgwjjjjjxjvjjqdjg
7-16 z: zzzzzzzzzzzzzzzzzzz
4-6 b: nsrtbb
2-5 j: kjxjtrl
3-6 b: bhtxxhjbxbbb
3-12 q: npnlkbqfgpxqjzdfjn
5-7 v: vbvvsgv
2-9 h: mhhhhhhhh
11-13 n: nnnnnnnnnnnnhn
5-6 n: nncnnl
3-4 h: phxhh
6-8 w: wwwwnwwwglwgw
5-6 j: qjwjjj
9-11 h: hhhhhhhhhhg
4-5 b: chbdb
5-6 l: lllljl
12-13 q: qqlqqqqqqqqgq
2-5 j: jkwlt
4-12 w: gmgtvwfwcwwwb
2-3 m: qmvdv
2-7 k: hkkmsspkrm
3-7 k: tlklhkwk
3-5 c: chgzcccd
9-19 x: xxxxxxxxxxxxxxxxxxqx
3-4 b: bbxbbz
1-3 f: fhhf
4-5 d: fddhp
1-3 j: jjnj
8-9 n: nnnnnnnnn
3-4 c: cjct
10-11 m: mmmmmmmmmmh
1-2 x: xbxxx
12-14 j: vtkjdjjjhgpjjjgj
5-6 n: rldnpnnlxnbjmgnxncv
7-8 f: pnrcpmgffzjffffrxf
5-9 n: nffdnnnnqnnm
10-18 s: sssssvsskxssssrsbsss
10-11 k: kkkkkkkkkkkk
4-5 x: xxxlgxxxx
4-5 s: ssksgsssss
4-5 b: bbbbkb
1-3 b: bbbxb
1-4 t: vttthjtttrs
7-9 r: rjcfrhrqmrrrrrr
1-4 f: kffcffff
14-15 d: ddxmmdddddtdddv
6-8 h: hfhhvhvq
15-19 q: qcqqqqqqqqqqqqhqqjsq
2-4 n: cnwn
3-4 b: btbn
4-5 p: sncdvppkphpp
14-16 h: zqbhrnhhvlhgxhhw
5-7 z: zjzctzfzl
4-10 m: gmpmmmrqmqcm
3-4 n: nnnnnnn
7-9 k: tdqwklhlwncdz
7-10 d: hmddhvnddznddd
2-5 q: sqpjm
2-4 p: zpwpkppvp
3-4 g: gxggggqgg
5-14 p: vzpppprdfzbkntdd
4-8 m: vldmnlpmmsdbz
3-4 q: qqlmqqqqq
3-16 n: pztmwhjmznjqckmnxrr
8-11 b: bvhbsbnbhbmbfjbqbr
5-7 q: wqqqqqgq
4-14 n: nnnrfsnndncmnnmdw
3-12 c: ktcccvpzgkfqcc
8-10 s: mcwvgsdspsl
3-6 l: lllllv
1-3 q: fqmqq
14-15 z: zzzzzzzzzzzzzwz
5-11 z: zzmzbxzjzzzzp
12-13 w: wwwwshwwwwkwlwwwwww
15-18 r: rrrrrrrrrrrrrrrrrlr
6-8 x: fcgqdxbxwlgxh
10-11 c: ccccccccccfc
5-16 t: ttstjrttzbttjltktk
6-12 g: lgwgdfdzggggj
15-17 v: vvvvvvvvvjvvvvvhgv
1-5 n: cnnnnn
5-7 w: mwwwxww
9-12 w: wvwwwpwwwwwbvwwm
1-6 b: bbbbbbb
4-5 g: qggbrg
19-20 r: btvfzlvzmrzhxkclxkfr
9-11 j: mkmmvjjldqx
1-4 l: lqlgrlcqfll
13-15 z: czzrzzzzzhzzzzzzzz
7-9 h: hzghwhwhh
7-17 g: gggggglggggggggggg
2-4 r: rjfzr
5-6 n: nnnnsnbmn
2-8 k: vdqhfccdkjm
2-4 z: tszh
5-7 j: pjgtjwpr
4-8 g: gggggggggg
8-12 h: dnkgcqlhszwqpkzhgdp
1-4 n: pnnnnn
3-10 d: ddrdddlrnrchdfddd
4-5 h: thzdq
7-15 d: wkvnfwdhxgvdfjr
13-15 j: jpjjjjslgjjjbgjrjjj
11-12 n: nnntnnnntntnn
1-2 n: nnnnnn
7-11 s: sswssnssssfsn
3-4 x: xmxz
9-10 v: jvvvxvvvgvvt
5-7 c: cmccfgdc
2-5 q: jqdqq
17-20 x: wrdkznpjxcwjxqtnxpvx
4-6 c: mczcccc
11-13 b: crbbhxbbbbbfxbbbbx
16-19 f: fvffffqgfjffffpffqd
10-11 k: kkjkkkkkqckkk
2-6 r: rrsntpc
2-17 q: qcpzdqfbqqqqqqqqw
2-5 d: fvdpddbkq
1-8 q: dqqqfqzz
9-14 t: kkpbzspjgtzztft
1-2 v: gvvv
12-13 w: wkwwwwntwwwtwktmwwww
13-19 s: ssssssssxssskssssss
8-10 k: kkkkkkkbkxkk
8-9 q: qcqdjblnvqqqsqqqqq
10-13 r: rrrjrprrjrrrvr
4-6 k: kqkkmv
2-4 z: dkzb
2-3 b: wbbc
17-18 p: pppppgppppppppppxppp
5-14 v: vdvlvvjzvdvpvc
3-12 x: xnxxxtjxxkxxxxx
5-6 b: gqzbbvbbbb
6-10 k: kkhxqkkkkkcncxgkk
9-10 j: jjjjjjjjcsjj
4-9 t: wzttttxgthbfbbt
2-12 v: vzvvvkpfvprwmvxjgsvd
3-9 t: lttcmtrntxwjhhmqhnbc
7-11 m: dpmqpmdvkmlw
16-17 s: zssssswsstpssssjmsss
3-8 h: hhvhbhhhh
7-9 c: nccccnxcc
4-5 z: mzzzz
6-7 g: ggggggg
2-4 t: wqmtqzkln
4-6 r: rrcrfrg
2-4 n: ngndn
8-9 p: sjppxxgcn
5-6 j: wjjjmj
3-7 g: qskprfh
4-9 x: dxxxxxxqvqcxfdjzx
7-13 q: qqqttqqxmfqqlzqpqqq
8-11 g: gggggggpgggg
3-4 q: qqlx
1-3 q: qqtktrq
9-17 b: bbbbbbbbgbbbbbbbbbb
6-9 r: rrrbrzrrc
9-11 r: rrrrrrrrsrrr
3-9 d: lsvdztpddd
9-12 z: xzzzzzzgzzzcztzz
3-13 f: fkffdzbtdffpfgjffff
1-2 d: tddd
4-6 c: wsgfhccrwxfd
1-2 d: hdtnbxqdjnmsksm
6-9 r: rlrrmxdrrrr
8-9 c: cccccccmc
5-13 w: wtwzkwwwjwxdwwvgbwjg
7-8 t: ttkqgstt
5-11 f: fjfffgfffdlf
6-7 l: llllllcl
4-6 g: ggglggg
11-12 r: rrrrrrrrrrrx
3-4 r: rrrr
4-8 p: sbpppdrpppmplfq
2-3 k: kkghkzkrxwx
9-11 m: vwmmmdpxlczmwmmmmgmj
2-5 k: dpjrsxkhn
2-12 k: kkkkchsksjwbkkw
8-17 r: rrrrrrvrkrlrrrrtz
3-4 q: nrqq
6-7 j: crwjljtjxjjk
1-6 w: qwwwpwwwwt
8-9 v: vvvvvvvkv
5-6 b: bttbbbb
8-11 j: tjbpjjjjfdj
7-9 f: rfwfffnmvjwktfwfff
14-15 r: rrrrrrrrrrllrrr
12-14 s: sflzzssqlcmsdsn
12-14 n: nnnnnnnnnnnnnnwn
4-9 k: kkkckxkgz
5-6 r: rrdrrsrr
1-2 p: qplxp
4-16 c: ccccccczfwphcbcmc
2-3 z: bsrz
7-8 x: xxlhxxsxxxjctxx
2-4 k: kzkkkk
4-10 n: nnnrnnnnnnn
1-2 c: pzzfbl
1-2 q: spqqq
4-6 g: pgnvgwttgfg
10-12 f: fffffffffffff
7-8 f: fkrfffns
6-7 b: bbbbbbt
2-5 m: mmmmmmmmm
6-15 m: qxhmlmmxmmnmmmppmrtn
10-16 n: shknnnnqnnclnjnnn
2-10 d: ddxddddddddd
11-12 n: nnncnnnnnnpn
1-3 z: xzlz
1-4 s: mssss
1-7 p: bbppppppkgp
5-6 w: wwwwbq
4-6 g: ggpgggg
2-3 z: dzzz
15-17 q: qqqqqqqqqqqqqqqqtqqq
13-15 p: ppppzpppzpfpfpp
6-11 t: xlthtttttccbqtrvqqst
7-10 r: rrwrrrrrrx
10-11 z: zvzzwzzskzkzzzzqc
4-8 r: rrrxvrrsrw
9-12 j: jhzjjjjjjbjn
1-4 h: hhhzhh
5-11 r: mrrptkrtrqjsrr
13-14 l: dllllllllllllp
6-12 x: gxxxbgkqvwgh
5-8 s: ssfscsnt
8-9 c: chgcggccq
4-5 r: rrrrrr
8-9 f: fffpfffhfcf
2-3 x: xltcxkg
14-15 s: qssssssssdsssdjss
4-7 k: ckkcqkk
3-7 q: lrqpqbn
2-5 p: qvfpp
1-6 w: twwwwmwwqwww
4-7 k: wkkkcfkrkhxd
12-18 g: gggggggggggjgggggxg
3-4 c: jjtwmcgl
6-10 p: pppppppppp
4-6 w: fgwwwwwcbkw
1-5 l: blllll
3-4 t: nrtbtstxwt
1-10 d: dddjdddddddddqdbdd
1-3 h: xchh
3-7 p: wnhxrpp
11-13 v: vvvvxvvvvvvvvvvvvv
16-17 f: ffffftfffffffffff
1-9 m: mkmbjmpbr
3-5 x: xxxxx
9-10 f: ffffjvrfgfffff
4-5 d: ddddsdbdd
6-10 j: jjjjjjjmjqjjjj
4-10 q: lqqbqqqqqgqq
4-13 d: dddwdddddddddddddddd
3-5 t: gdtlxbtsnc
6-15 t: tfbjchtdhdvtfcfgtjtk
6-7 d: dddddddd
7-18 w: sgbbkwxgdxvwlhjfct
8-11 n: pbfnnnwntnnnn
1-15 j: jjjjjjjjjjjjjjj
3-12 b: zbbsdblxbqvbp
5-6 p: zxpjtp
4-7 k: kgdhskkkklkmfgnkrtm
9-10 s: sssshssfsjpxssvc
2-4 w: whlhw
11-16 z: zzbzzzzzzztzzzzsz
8-10 x: txmxxvxpxxxxxmmlrnj
7-8 r: zrrrrrrs
4-9 v: vvvbbvvvvb
10-11 z: zxzzzzzxmzz
7-14 h: hhvxcrhhkhhhtrbwtghx
9-10 h: hhfkhchhhpwsphhjdhhc
3-5 q: qqqqtq
4-5 f: ffmftff
3-13 l: llwmlldllfjlt
2-3 b: bqkp
2-3 j: jjbj
6-11 r: rnwdrpjrrpxrwrr
9-11 q: pqlsqjqjqztsqvhmq
2-4 m: mccmm
6-8 f: kfffffffffj
13-14 l: xlllllllllllkkml
8-12 p: pppppvpppkpdppp
10-19 x: txnxxhxcxmxrdxfjkvx
8-9 x: xxxxxbxct
1-2 s: bsjssr
2-5 h: hcbhcl
11-12 c: dsdklbhrncccc
2-3 c: ccncccc
7-8 f: fffltfft
12-13 c: ccccccccjcccgc
2-9 r: nsrqvqtrrd
1-4 r: trrr
9-11 z: gzmlcrbbrsvz
7-11 t: thtbhtxprtcttttt
4-6 g: zxgtfb
7-8 d: dfkmhqrjsddqf
14-15 h: whhhxmrqhjhsvgshvvcx
2-3 t: ttxxprtpdtrrgn
9-11 t: ttttttttpttt
1-4 p: pnpp
2-4 f: fvfvf
14-15 x: xxxxxgxxxxxxxxl
6-10 n: hmdnlrpnkn
1-3 n: gtvnhdnjnn
14-15 d: mddddddddddddtld
12-16 z: zqzzzzztzcdwzzzz
2-3 f: mffjfj
10-13 l: mlrlvlmxlllkk
4-20 j: mvbxdjhxvtxmrnfjvlsr
5-15 m: zkchpzsgjgvxssmjpm
8-14 b: bbbbrbwbbjbbbzbb
4-17 v: vlvmvvvvvnwtvvvnvvhv
16-17 w: wwwwwwbtjwwwwwwwwww
7-9 x: sjhjrbxxbq
14-15 w: kwwwwwwwwwwwwwwwwww
12-13 w: wwwwwwwwwwwxxwwwwlw
2-5 m: mmmmsmmm
1-2 n: ndng
1-2 w: wpcmtlpwwnzrdzc
13-14 z: zzzzzzzzzzzzzvz
8-10 l: lllllllxlkl
8-9 s: ssssssssp
9-12 s: sdsssssvssss
2-3 g: ggxv
6-9 c: cccpcjccc
4-10 j: bmwjqhtmfzkwlsjrc
3-4 f: ffwff
7-12 c: qwrcrtcqczqdxc
3-4 p: vvpm
8-14 k: dkkgkkzkqkkkzwj
9-18 s: ssssssssxsssssssssss
12-15 g: gsggrgglggngggrglggt
3-6 w: wwwpch
3-7 p: ppppppkppp
5-6 n: nnnnnbn
8-11 m: nmlwmdcmmtmb
11-15 t: ttttttttttttttt
3-4 f: fffn
5-7 b: bbbbbbtb
17-20 l: lllllllnllllllllpllg
3-4 n: rnbs
10-18 h: hhhhphhhmnhhhnhhvhhh
4-5 h: hhmph
2-5 k: fndkkkksvbk
1-3 s: ssssss
3-16 k: kkkkkkkkkkkkkkkzk
5-9 t: ttzwssrltt
3-4 b: blmbgqphpnq
12-16 d: zdjcndpdjgbddcddd
15-17 b: ldjbbdxfwdgldfbfn
9-17 n: rhxsgngwnvdfdwtnntr
13-14 z: zzzpzzzzzzzzszz
2-3 s: sfssjssxssk
1-6 n: dwngnnrnnn
4-9 n: nnghfsvnnp
8-10 d: cxxdnmpdkh
8-9 p: pppllpprnppp
8-9 h: hhhqngfrhhhhhhh
13-17 d: ddddrnddddddbdddd
2-14 w: rptqzcsdvbjctwsfkwb
3-6 x: mhxxqx
4-6 k: kkktkkkck
2-4 f: fcffhkff
17-18 t: ttttttttttttttttjt
1-2 q: zcgfq
1-4 b: bbbjbbbbrb
5-6 g: ggggtx
5-12 q: qwqpqpmkhqqj
8-9 b: bbgbbbbxb
3-4 x: xxxxxb
4-5 n: ktskn
9-10 z: zlzdgmpzzz
9-12 j: bjjqjjjjgjjj
2-12 g: cqnrtxhkgzrmxfbp
2-6 q: qngktqqqw
1-2 z: nzfzlfdqk
3-10 m: jmrwmhwmmxdmmmm
7-9 z: ckzzdjjrzb
3-4 m: mmmg
5-16 l: llllflllllllllllll
10-20 h: rxxkbjnvjpvzqjhbhjhh
5-6 m: xkmmqv
1-3 x: xxxx
10-16 w: wdqwwhwwcwmcfwwh
7-11 m: mmmmmtmmmmmmm
2-7 z: frrzczznn
3-7 k: kbkkrgkgzmtlkwkljcq
10-13 l: clgwvjbxfwrll
6-7 t: tdcthtt
2-6 k: hknhpk
5-13 p: pppptppppppppp
8-14 j: jjjpjqxhjbjjjjjj
5-6 z: zzzkzzpzz
2-5 m: mwpfmrnscgpbbbwt
3-4 t: tpmt
8-12 d: lbddddvdmddddzdddl
1-7 p: ppppppxpp
6-7 t: cttttpl
2-3 j: jhrj
11-12 j: cnbrzpcjghjj
8-9 w: wwwwwwwww
11-12 f: fffffgfffffcf
3-4 n: nnnh
4-8 h: dztmrvhhchhhh
13-18 l: llllllllllllfllllll
2-3 s: tzssns
4-6 p: ppppphprln
5-7 g: cjljggsgvlkgqlg
5-12 g: kkgxghvkrzwggvf
4-10 w: jwwznwkmrj
7-11 p: cpbhppcmgztfpbp
4-5 g: ghgcfz
2-3 w: nfwwqklwr
3-4 x: gxxh
16-19 c: gzhxgqzvclbrmfkclls
11-13 f: fffffffjffpffsffhffl
2-5 h: hqdmxxhbhhhhhghhhh
2-3 l: hllw
3-13 v: vvvzvzvgvxlzflvr
6-12 m: kmscmmnmdtxm
14-15 t: clhtqdcfdncdtbt
4-5 k: fbkkwxkrpxtkctjzhndk
6-11 g: zggggndgggsggg
7-10 n: mdnntkntnj
5-6 b: xlbbbbb
7-11 s: sssszssmsss
3-10 k: qkkkkkkrgkkkfhkrhk
14-20 p: qcdpppdnppjppgcptppq
2-3 n: wnknrjwtqcksmlw
7-10 n: jnztbnnzrw
9-10 j: jjjjjjjjjp
3-5 f: hbfnfjkmfpnfjfv
5-7 n: pckprbrnx
2-4 r: rbqr
1-11 q: qqqqqqqqqqzq
2-13 k: kkmqckkgqqntkmr
2-4 j: vjzjj
11-12 q: qqqqqqcqqqfpqr
2-10 x: dxhqtxtbkxnnpcrbtgp
6-10 h: wlhzdhcchhj
7-19 k: snktsqkmckmzfklbzkv
3-9 d: ddhdvzpdw
9-18 f: flpgfvffsffwfffgsk
14-17 t: tttttttxtttttttttt
7-14 l: wnpxlllqllvhkbhxlk
11-12 n: nnnnnnnnhnnx
8-12 r: fhrrrtrrrcwg
5-6 p: psptpx
3-4 x: xxxxx
12-15 b: bbbbbbbbbbbbbbqfb
3-4 f: ffsg
8-15 n: nnnnnmnnndnnnngnnnnn
4-9 t: ttfhtftwt
4-5 f: ffvff
4-18 s: jssjsssssssssssnsvms
2-5 z: tzzsz
9-17 g: nwpqgggbggjfgggmglhd
5-6 c: kccdbccc
3-4 r: rgrr
9-15 d: dqddhddngdddddnzd
4-12 c: zmlpclmdxsqc
6-8 q: fwkptqfqqxg
3-4 s: hznnsqdx
8-9 q: qqhqqqqczqq
7-8 z: nzzzzzzzzz
15-16 p: pppmpppppppppltdpp
8-14 h: hhhhhhhmhhhhhrhhhhhh
3-4 k: fwnchdkstg
10-17 h: kpcnnpljchcqbcsvbq
8-9 v: tzhcvbtzvtlm
12-16 l: fkjlmjdcllkpwxhxhnl
6-15 k: llfkkknskkbkkkbkkjkk
7-12 n: tnbjngwnnnlnvgj
16-19 r: gbtxrqmrrrrrrrwrflw
3-12 c: ccqcccccfccccccccc
14-15 z: zzvzzzzzzzzzznczz
5-6 d: qpddzd
4-7 m: mmmrmmmhtmcmpmm
15-18 g: lghrgggggwqgggxnmqwg
9-12 d: ddddjrddmddnd
6-15 t: tttttmttttttttqtttt
9-12 g: gbdgggnggcggpg
5-9 c: ccvshdqtcvcczl
9-10 v: xvvtfxrvxvvvvvtvbc
3-4 j: jjjjjjjnq
5-6 h: pkhzhh
5-6 g: gggggm
1-6 j: djjjjjj
4-5 c: xvfcfkfz
2-6 p: dpcjksgxtp
1-2 w: rrwwwdw
4-5 t: ngrttjftxttkrt
1-8 t: gchtttbtt
5-11 r: bhvgmszrpgrgwcdp
4-12 j: sjjjmzjjjjjpj
7-15 t: tslntctttxtkgtm
16-18 j: jwjwpjjjjzfjjjxvjjj
4-9 c: rbdpccfghwrn
1-8 k: kkkkkntkkcdqk
1-3 c: cctdcvcdqc
5-6 m: mmmmmm
6-10 w: lqwcqwqzkhcbwtgvzxb
3-4 h: hgxhjchhlpms
11-14 b: bkbxxdkrbzbswb
1-2 r: drcr
19-20 l: llllllllllllllllllll
2-7 g: fmggdgggx
11-14 z: zzzzzzvzzxbzzh
7-8 p: ppppppdx`;

input = input.split(/\r?\n/);

let valid = 0;

for (let line of input) {
  let parts = line.split(":");
  let requirement = parts[0];
  let reqParts = requirement.split(" ");
  let letter = reqParts[1];
  let nums = reqParts[0];
  let numParts = nums.split("-");
  let min = parseInt(numParts[0]);
  let max = parseInt(numParts[1]);
  let password = parts[1].trim();

  // PART 1
  // let total = 0;
  // for (let char of password) {
  //     if (char === letter) {
  //         total++;
  //     }
  // }
  // if (total >= min && total <= max) {
  //     valid++
  // }

  // PART 2
  let index1 = min - 1;
  let index2 = max - 1;
  let total = 0;
  if (password[index1] === letter) {
    total++;
  }
  if (password[index2] === letter) {
    total++;
  }
  if (total === 1) {
    valid++;
  }
}
console.log(`Answer: ${valid}`);
