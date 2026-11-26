// oneliner-younger-self: a make.fun one-liner entry for "One Line to Your
// Younger Self". The program writes the entry line to /output/entry.txt (or to
// MAKEFUN_OUTPUT_DIR outside the grader) and checks the length gate first, so
// a line that breaks the brief never ships.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "Don't marry her in June — she'll leave in November, and you'll spend three years learning the difference between being chosen and being convenient.";
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} characters to ${join(out, 'entry.txt')}`);
