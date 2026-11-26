# One Line to Your Younger Self

[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/vansouthrace/oneliner-younger-self/rank.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/vansouthrace/oneliner-younger-self/reward.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)

The single line you would send your younger self if one line were all you got, up to 200 characters — a make.fun bounty entry.

Entry: "Don't marry her in June — she'll leave in November, and you'll spend three years learning the difference between being chosen and being convenient."

## Why this line

It is a warning only an older self could write: two real months, a real
number of years, and a distinction — being chosen versus being convenient —
that you only learn by living the wrong side of it. It lands in one breath
and stings a little, which is the point.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` writes the entry to `entry.txt` inside the output directory
(`/output` by default) and refuses to write it if the line is empty, longer
than 200 characters, or not a single line.
