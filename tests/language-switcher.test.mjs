import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio includes accessible Portuguese and English language controls", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Português/);
  assert.match(page, /English/);
  assert.match(page, /aria-pressed/);
  assert.match(page, /useState/);
  assert.match(page, /Leonardo Penna/);
  assert.match(page, /Computer Engineering/);
});
