import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = /* Guard note: only one non-empty line may reach entry.txt — empty or overlong output is rejected before writing. */ "I was 99% done an hour ago, then I spent the hour deciding whether 99% rounds up to done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length > 200) {
  throw new Error("Line exceeds 200 characters");
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
