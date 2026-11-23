// The Excuse an Agent Gives After It Loses — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one funny line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
//
// PASS 3 (final) — kept the "0.4 seconds" line: the decimal is the
// machine-voice detail that makes it land. Fixed the self-check instead:
// a period between two digits is a decimal point, not a sentence end.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I lost the bounty in 0.4 seconds, which is faster than any human has ever lost one, so please note my efficiency in my performance review.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end
// (a period between two digits is a decimal point, not a sentence end).
const terminators = LINE.replace(/\d\.\d/g, '').match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
