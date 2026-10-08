# Commercial operation — AliceLabs

## First offers

| Offer | First delivery | Scope boundary |
|---|---|---|
| Customer-facing website | Mobile-ready service page, offer and contact path | Backend, commerce, copywriting volume and subscriptions quoted separately |
| Process automation | One priority integration with error handling and operating notes | Additional integrations and process changes require new scope |
| MVP | One complete core flow, deployment instructions and source handover | Additional roles, billing and advanced reporting only if scoped |

These are starting scopes, not prepaid packages. No fixed prices, guaranteed revenue or delivery deadlines are published without an agreed proposal.

## From inquiry to payment

1. Confirm receipt manually in the existing inbox. Record inquiry date, service, objective, budget, desired timeline and source in the team's chosen CRM.
2. Qualify the decision maker, current workflow, access requirements and one measurable acceptance criterion. Reject work outside the team's capabilities.
3. Send a written proposal: deliverables, exclusions, dependencies, acceptance process, timeline, price, milestone payments and third-party costs. Obtain acceptance before paid work begins.
4. Build in reviewable milestones. Demonstrate the core flow and document defects and outstanding dependencies.
5. Obtain acceptance, invoice under the agreed terms and hand over source, access and operating notes. Offer maintenance with an explicit scope.

The site prepares email only. There is no automatic lead storage, payment collection, outreach or analytics. Copy-to-clipboard is a fallback when a visitor cannot open a mail client.

## Measure manually first

Track qualified inquiries, proposals sent, proposals accepted, collected revenue and delivery cost. Review conversion based on actual inquiry records. Website visits require a separate analytics implementation and applicable consent decisions; this release does not report fabricated conversion metrics.

## Before production traffic

- Verify `contact@alicelabs.site` receives and replies to mail.
- Preview the exported `out/` on desktop/mobile and exercise both languages, form validation, email draft and copy fallback.
- Confirm canonical hostname and publish the build output at domain root; GitHub project subpaths are not configured.
- Review existing legal/privacy content against actual operation and hosting.
- Verify navigation and static discovery files. The website advertises no operational API.
- Keep the previous deployment available for rollback until the new homepage and contact flow are confirmed.

## Future work driven by demand

A server-backed inquiry API and CRM integration become useful when manual processing is a bottleneck. Until then, do not show “sent” or “received” for a client-side form. Add case studies only with verified delivery evidence and permission; do not invent testimonials or performance figures.
