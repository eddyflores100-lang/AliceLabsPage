import test from "node:test";
import assert from "node:assert/strict";
import { normalizeUrl, firecrawlScrape, posthogCapture, composioListToolkits, browserAudit } from "./index.mjs";

test("URLs reject non-web protocols and credentials", () => {
  assert.throws(() => normalizeUrl("file:///etc/passwd"));
  assert.throws(() => normalizeUrl("https://user:pass@example.com/"));
  assert.equal(normalizeUrl("https://example.com"), "https://example.com/");
});
test("Firecrawl sends authenticated scrape request", async () => {
  const data = await firecrawlScrape("https://example.com", { apiKey: "test", fetchImpl: async (url, opts) => {
    assert.match(url, /firecrawl/);
    assert.equal(opts.method, "POST");
    assert.equal(JSON.parse(opts.body).url, "https://example.com/");
    return { ok: true, json: async () => ({ success: true, data: { markdown: "# Example" } }) };
  } });
  assert.equal(data.markdown, "# Example");
});
test("PostHog sends event with consented identifier", async () => {
  assert.equal(await posthogCapture("site_audit", {}, { apiKey: "test", distinctId: "test-session", fetchImpl: async (_, opts) => {
    assert.equal(JSON.parse(opts.body).event, "site_audit");
    return { ok: true };
  } }), true);
});
test("Composio authenticates toolkit discovery", async () => {
  const x = await composioListToolkits({ apiKey: "test", fetchImpl: async (_, opts) => {
    assert.equal(opts.headers["x-api-key"], "test");
    return { ok: true, json: async () => ({ items: [] }) };
  } });
  assert.deepEqual(x, { items: [] });
});
test("Playwright adapter supports injected browser", async () => {
  let closed = false;
  const result = await browserAudit("https://example.com", { chromium: { launch: async () => ({
    newPage: async () => ({
      goto: async () => ({ status: () => 200 }),
      url: () => "https://example.com/",
      title: async () => "Example",
      locator: (selector) => ({ allTextContents: async () => selector === "h1" ? ["Hello"] : [], count: async () => 1 }),
    }),
    close: async () => { closed = true; },
  }) } });
  assert.equal(result.status, 200);
  assert.deepEqual(result.headings, ["Hello"]);
  assert.equal(closed, true);
});
