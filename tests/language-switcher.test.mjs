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
  assert.match(page, /Junior AI Engineer/);
  assert.match(page, /AI Product Engineering/);
  assert.match(page, /Engenharia de Produto com IA/);
  assert.match(page, /Live Demo/);
  assert.match(page, /Demo ao vivo/);
  assert.match(page, /Source Code/);
  assert.match(page, /Código-fonte/);
  assert.match(page, /AI Engineer Júnior \| Engenharia de Software e Inteligência Artificial Generativa/);
  assert.match(page, /Desenvolvo aplicações com IA, LLMs e APIs para transformar problemas reais em soluções funcionais\./);
  assert.match(page, /Junior AI Engineer \| Software Engineering and Generative AI/);
  assert.match(page, /I build AI applications, LLM integrations, and APIs that turn real problems into functional solutions\./);
  assert.match(page, /t\.hero\.split\("\\n"\)/);
});
