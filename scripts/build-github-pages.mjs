import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const result = spawnSync(process.execPath, [resolve("node_modules/vinext/dist/cli.js"), "build"], {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES_BUILD: "true" },
});

process.exit(result.status ?? 1);
