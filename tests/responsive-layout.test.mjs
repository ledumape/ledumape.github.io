import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("mobile layout keeps navigation and project actions reachable", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const mobileRules = css.match(/@media \(max-width:760px\)\{([\s\S]*?)\}\r?\n@media \(prefers-reduced-motion:reduce\)/)?.[1] ?? "";

  assert.match(mobileRules, /\.nav-links\{display:flex/);
  assert.match(mobileRules, /\.project\{grid-template-columns:1fr/);
  assert.match(mobileRules, /\.project-footer\{[\s\S]*flex-direction:column/);
  assert.match(css, /safe-area-inset-bottom/);
  assert.match(layout, /viewportFit:\s*"cover"/);
});
