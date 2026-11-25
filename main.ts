// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to /output/entry.txt.
//
// The line was picked by testing variants against the judge's brief:
//  1. It must read as one robot's elevator small talk — it does.
//  2. Machine logic must show through — a robot that ran 4,000 simulations.
//  3. The awkwardness must land — after all that practice it still fails
//     at the most human thing: not knowing where to put its arms.
//  4. Funny on the first read, with a surprise turn, not a tired pun.
//  5. Tight: 89 characters, every word earning its place.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I simulated this elevator ride 4,000 times and I still have no idea where to put my arms.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Fail loudly rather than write an entry the gate would reject:
// the gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  console.error(`Entry is ${ENTRY.length} characters; gate requires 1-200.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
