import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio declares a static GitHub Pages build", async () => {
  const config = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
  const viteConfig = await readFile(new URL("../vite.config.ts", import.meta.url), "utf8");
  const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const buildScript = await readFile(new URL("../scripts/build-github-pages.mjs", import.meta.url), "utf8");

  assert.match(config, /GITHUB_PAGES_BUILD/);
  assert.match(config, /output:\s*"export"/);
  assert.equal(packageJson.scripts["build:pages"], "node scripts/build-github-pages.mjs");
  assert.match(buildScript, /GITHUB_PAGES_BUILD:\s*"true"/);
  assert.match(buildScript, /spawnSync\(process\.execPath/);
  assert.match(buildScript, /resolve\("node_modules\/vinext\/dist\/cli\.js"\)/);
  assert.match(viteConfig, /isGitHubPagesBuild/);
  assert.match(viteConfig, /isGitHubPagesBuild \? \[vinext\(\)\]/);

  const workflow = await readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");
  assert.match(workflow, /actions\/upload-pages-artifact/);
  assert.match(workflow, /actions\/deploy-pages/);
  assert.match(workflow, /path:\s*\.\/dist\/client/);
});

test("portfolio preview uses a native image compatible with the Vinext runtime", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.doesNotMatch(page, /from ["']next\/image["']/);
  assert.match(page, /<img src=\{project\.previewImage\}/);
});
