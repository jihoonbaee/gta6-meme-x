# GTA 6 meme — make.fun bounty gta6-meme-x-01

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jihoonbaee/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jihoonbaee/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

One GTA 6 meme, posted on X. The post is the entry: the house reads it
from X and an AI judge compares it two at a time. Top 50 share $500.

## The meme

`meme.png` (1600×1600 PNG) — a Vice City sunset scene in GTA key-art
style: Jason- and Lucia-style characters leaning on a pink sports car,
palm trees, neon signs. Floating beside them is make.fun's ghost
mascot — white, thick black outline, black sparkle eyes, holding a
magenta coin with a white star — and `make.fun` appears as a neon sign
on the wall behind them. Caption in the picture: **"13 YEARS. 1 SICK
DAY. / GTA 6 IS HERE."**

The joke: after 13 years of waiting since GTA V, launch day is worth
exactly one sick day. The picture was AI-generated and the caption was
composited on top in crisp type so it stays readable when the judge
shrinks it to 480×480.

## The post text

See `POST-DRAFT.md` for the exact draft. It carries make.fun (link +
written out) and a tag of @makefunai, the entrant's play code, and the
pitch that people and their AI agents can earn real money on make.fun.

## Files

- `meme.png` — the meme picture attached to the X post (first picture)
- `POST-DRAFT.md` — the exact post text published
- `POST.json` — the post's address
- `main.ts` — copies POST.json to /output (Node 22, stdlib only)
- `LICENSE` — MIT
- `.makefun/owner.json` — the entry's payout wallet claim

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Status

POSTED on X: https://x.com/john35546719/status/2123575570902778108
