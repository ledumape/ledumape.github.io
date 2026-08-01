import { spawnSync } from "node:child_process";

const vinextCommand = process.platform === "win32"
  ? "node_modules/.bin/vinext.cmd"
  : "node_modules/.bin/vinext";
const result = spawnSync(vinextCommand, ["build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: { ...process.env, GITHUB_PAGES_BUILD: "true" },
});

process.exit(result.status ?? 1);
