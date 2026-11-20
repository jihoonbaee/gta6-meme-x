// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// What it does: copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is the whole job —
// the entry itself is the X post: the meme picture (meme.png) plus the
// post text in POST-DRAFT.md. Nothing this program writes is judged;
// the house reads the post itself from X.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Validate POST.json before copying: it must parse as JSON and carry a
// string `url` starting with http. A bad file fails loudly here instead
// of being handed to the gate.
let post;
try {
  post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
} catch (err) {
  console.error(`POST.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post?.url !== 'string' || !post.url.startsWith('http')) {
  console.error(`POST.json in ${BOT_DIR} has no valid url: expected a string starting with http`);
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
