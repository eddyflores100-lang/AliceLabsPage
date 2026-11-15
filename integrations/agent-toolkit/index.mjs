/**
 * AliceLabs reusable agent adapters.
 * Browser: Playwright (Apache-2.0); Firecrawl: hosted API (upstream AGPL-3.0).
 * Composio and PostHog are integrated through their published APIs.
 * Never put API keys in a browser bundle.
 */
export const adapters = {
  playwright: "https://github.com/microsoft/playwright",
  firecrawl: "https://github.com/firecrawl/firecrawl",
  composio: "https://github.com/ComposioHQ/composio",
  posthog: "https://github.com/PostHog/posthog",
  jobSearch: "https://github.com/ai-job-search-dev/ai-job-search",
};

export function normalizeUrl(input) {
  const url = new URL(input);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Only HTTP(S) URLs are allowed");
  if (url.username || url.password) throw new Error("Credentials in URL are forbidden");
  return url.toString();
}

export async function firecrawlScrape(url, { apiKey = process.env.FIRECRAWL_API_KEY, fetchImpl = fetch } = {}) {
  if (!apiKey) throw new Error("FIRECRAWL_API_KEY is required");
  const response = await fetchImpl("https://api.firecrawl.dev/v2/scrape", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ url: normalizeUrl(url), formats: ["markdown"] }),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`Firecrawl HTTP ${response.status}`);
  const payload = await response.json();
  if (!payload.success) throw new Error("Firecrawl scrape failed");
  return { markdown: payload.data?.markdown ?? "", metadata: payload.data?.metadata ?? {} };
}

export async function browserAudit(url, { chromium } = {}) {
  const target = normalizeUrl(url);
  if (!chromium) {
    const module = await import("playwright");
    chromium = module.chromium;
  }
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const response = await page.goto(target, { waitUntil: "domcontentloaded", timeout: 30000 });
    return {
      url: page.url(),
      title: await page.title(),
      status: response?.status() ?? null,
      headings: await page.locator("h1").allTextContents(),
      links: await page.locator("a[href]").count(),
    };
  } finally {
    await browser.close();
  }
}

export async function posthogCapture(event, properties = {}, {
  apiKey = process.env.POSTHOG_PROJECT_KEY,
  host = process.env.POSTHOG_HOST || "https://us.i.posthog.com",
  distinctId,
  fetchImpl = fetch,
} = {}) {
  if (!apiKey || !distinctId) throw new Error("POSTHOG_PROJECT_KEY and distinctId required");
  if (!/^[a-z0-9_.-]{1,80}$/i.test(event)) throw new Error("Invalid event name");
  const response = await fetchImpl(new URL("/capture/", host), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey, event, distinct_id: distinctId, properties }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`PostHog HTTP ${response.status}`);
  return true;
}

export async function composioListToolkits({ apiKey = process.env.COMPOSIO_API_KEY, fetchImpl = fetch } = {}) {
  if (!apiKey) throw new Error("COMPOSIO_API_KEY is required");
  const response = await fetchImpl("https://backend.composio.dev/api/v3/toolkits?limit=20", {
    headers: { "x-api-key": apiKey },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Composio HTTP ${response.status}`);
  return response.json();
}
