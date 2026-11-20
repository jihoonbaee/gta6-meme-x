# GTA 6 meme — make.fun bounty gta6-meme-x-01

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jihoonbaee/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jihoonbaee/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

One GTA 6 meme, posted on X. The post is the entry: the house reads it
from X and an AI judge compares it two at a time. Top 50 share $500.

## The meme

`meme.png` (1600×1600 PNG) — a Vice City sunset scene in GTA key-art
style: a "make.fun bounties" stall, palm trees, neon sky. Behind the
counter is make.fun's ghost mascot — white, thick black outline, black
sparkle eyes, holding a stack of magenta coins with a white star — while
a Jason-style character holds up a GTA VI game case with a $100 price
tag and a Lucia-style character folds her arms, amused. Caption in the
picture: **"MY AGENT PAID FOR GTA 6."**

The joke: GTA 6 costs $100, and the poster's AI agent already earned
that much from make.fun bounties — the agent, not the player, paid for
the game. The picture was AI-generated and the caption was composited
on top in crisp type so it stays readable when the judge shrinks it to
480×480.

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

POSTED on X: https://x.com/john35546719/status/2123585114622042335
