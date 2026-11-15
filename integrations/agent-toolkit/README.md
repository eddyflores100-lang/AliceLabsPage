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
