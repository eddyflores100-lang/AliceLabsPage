---
name: alicelabs-agent-integrations
description: Reuse verified upstream Firecrawl, Playwright, PostHog, Composio and AI Job Search tools; test adapters before enabling customer workflows.
---

# AliceLabs integration skill

## Source-first policy
Do not rewrite upstream engines. Check the upstream repository and license, use the supported SDK/API, and only add integration glue. Never claim an API is connected without a real authenticated test.

## Upstream skills to consult
- Firecrawl: https://github.com/firecrawl/firecrawl/tree/main/skills/firecrawl-build-scrape/SKILL.md (also `firecrawl-build-search`).
- AI Job Search: https://github.com/ai-job-search-dev/ai-job-search/tree/main/.agents/skills (LinkedIn and local job-board search skills).
- Composio: https://github.com/ComposioHQ/composio/tree/main/.agents/skills (TypeScript/Python SDK skills).
- Playwright: https://github.com/microsoft/playwright (browser test framework).
- PostHog: https://github.com/PostHog/posthog (analytics SDK).

## Implemented adapter commands
```sh
node --test integrations/agent-toolkit/index.test.mjs
```
`integrations/agent-toolkit/index.mjs` exports `firecrawlScrape`, `browserAudit`, `posthogCapture`, `composioListToolkits`. All external writes require authorization and service credentials.

## Workflow
1. Confirm customer authorization, legal scope, and allowed domains.
2. Run unit tests; do not expose API keys in browser/client bundles.
3. Test one read-only operation using server-side credentials.
4. Record result, costs, failure modes, and license implications.
5. Enable production only after validation and explicit approval for ad spend or posting.

## Limits
The original Instagram carousels do not establish specific GitHub repos for the Meta Ads, YouTube or content-publishing claims. Do not attribute unverified repositories or income claims to those posts.
