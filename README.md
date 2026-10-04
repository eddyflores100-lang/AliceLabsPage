# AliceLabs commercial website

Spanish/English services site built with Next.js and TypeScript. The homepage is rendered directly, with three service offers, deliverables, process, FAQ and a project brief form.

## Run and verify

```sh
npm ci
npm run dev
npm run build
npm run typecheck
```

The build exports the complete static site to `out/`. Preview with `python3 -m http.server 3000 --directory out`. Publish **the contents of out/** at the root of the configured custom domain; the repository root and historical `alicelabs.html` are not deployable entry points. `next start` is not used for a static export.

CI builds and uploads the static site artifact. It does not change the production host. Configure the existing host to use this build output before switching traffic. The configured metadata domain is `https://www.alicelabs.site`.

## Inquiry flow

Visitors select a service, describe their goal and provide indicative budget and timing. The form generates a visible summary and an encoded `mailto:` link. **Preparing the summary does not send or store a lead.** The visitor must send through their email app or copy the summary and email `contact@alicelabs.site`. No credentials or backend are required. The email inbox's deliverability must be verified separately.

No advertising scripts or analytics are loaded by the new homepage. Only the language preference is stored in localStorage; form details stay in component memory until the visitor deliberately opens email or copies them. Do not collect credentials through this form.

## Structure

- `src/app/page.tsx`: service content, bilingual UI and inquiry preparation.
- `src/app/page.module.css`: responsive homepage styles.
- `src/app/LegalPage.tsx`: shared legacy/legal renderer, compatible with both existing prop formats.
- `public/`: actual static discovery assets. Root text copies are kept aligned.
- `docs/COMMERCIAL-OPERATIONS.md`: qualification, quoting, handover and launch checks.

Historical HTML and compiled assets remain as references, outside the exported website. Product-specific UTA/ATC page content is unchanged. Existing legal text needs owner review before publishing any changed terms; this change does not invent new legal commitments.
