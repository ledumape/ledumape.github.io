import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Leonardo's portfolio and both projects", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Leonardo Penna/);
  assert.match(html, /Signal/);
  assert.match(html, /bip6tohevy/);
  assert.match(html, /Prompt2Project/);
  assert.match(html, /Engenharia da Computação/);
  assert.match(html, /github\.com\/ledumape/);
  assert.match(html, /github\.com\/ledumape\/signal-job-radar/);
  assert.match(html, /github\.com\/ledumape\/bip6tohevy/);
  assert.match(html, /prompt2project\.vercel\.app/);
  assert.match(html, /github\.com\/ledumape\/prompt2project/);
  assert.match(html, /projects\/prompt2project\/01-new-idea\.png/);
  assert.match(html, /projects\/signal\/cover\.png/);
  assert.doesNotMatch(html, /projects\/bip6tohevy\/cover\.png/);
  assert.match(html, /Captura real da tela inicial do Signal/);
  assert.doesNotMatch(html, /Imagem conceitual do bip6tohevy/);
});
