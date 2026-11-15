# AliceLabs Agent Integrations — working adapters

This is executable integration code, not a replacement for upstream projects. Reuses **Firecrawl API**, **Playwright**, **PostHog capture API** and **Composio toolkits API**; original AI Job Search repo is referenced, not copied.

## Run tests
```sh
node --test integrations/agent-toolkit/index.test.mjs
```

## Real browser audit
```sh
npm install --no-save playwright
npx playwright install chromium
node -e 'import("./integrations/agent-toolkit/index.mjs").then(async m => console.log(await m.browserAudit("https://example.com")))'
```

## Real APIs
Set `FIRECRAWL_API_KEY`, `COMPOSIO_API_KEY`, `POSTHOG_PROJECT_KEY` and a privacy-safe `distinctId` in server-side secrets. Never commit credentials. No campaigns, publishing, or external changes are made by these adapters. Review target URL authorization and privacy before browser or scraping operations.

Licensing: Playwright Apache-2.0; Composio MIT; Firecrawl upstream AGPL-3.0 (review licensing before self-hosting); PostHog component licenses vary. The adapters themselves are original integration glue.

## Verified execution (2026-11-14)
- Node test suite: **5/5 passed** in remote Linux.
- Chromium real browser: `https://example.com/` → HTTP 200, title `Example Domain`, one link.
- AliceLabs site browser audit: `https://alicelabs.site/` → HTTP 200, title `AliceLabs | Hub de Ingeniería`, one H1 and 36 links.
- GitHub Actions CI completed successfully: https://github.com/eddyflores100-lang/AliceLabsPage/actions/runs/43672024624
- Browser binary in the temporary testing environment is not a production deployment. The tests use an explicitly supplied Chromium executable path.
- Authenticated Firecrawl, Composio and PostHog API calls remain unverified until valid service keys are configured. Do not confuse mocked API tests with live connectivity.
