// Writes the entry: one funny line of at most 200 characters.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "We told the kids we couldn't afford a dog, so we got a Roomba and named it Biscuit. He has run away from home four times and once came back with a sock that isn't ours.";
const limit = 200;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
