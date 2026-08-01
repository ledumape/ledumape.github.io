import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const textFiles = [
  "app/page.tsx",
  "app/layout.tsx",
  "PRODUCT.md",
  "DESIGN.md",
  "README.md",
  "docs/superpowers/plans/2026-08-01-github-pages-portfolio.md",
];

test("public portfolio text does not contain dash punctuation", async () => {
  for (const file of textFiles) {
    const content = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(content, /[—–]/, file);
  }
});
