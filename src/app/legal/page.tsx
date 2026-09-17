import LegalPage from '../LegalPage'

export default function LegalPageRoute() {
  return <LegalPage
    title="Legal Hub"
    tag="Legal · Index"
    pgNum="AliceLabs LLC · September 2026"
    intro="This page serves as the central index for all legal documents, policies, and corporate information for AliceLabs LLC. All documents are effective as of September 2026 and are reviewed quarterly."
    sections={[
      {
        heading: "Legal Documents",
        body: [
          "Privacy Policy — How we collect, use, and protect your personal information. Covers CCPA/CPRA compliance, data security (AES-256-GCM, zero-trust), data retention, and your privacy rights. View at /privacy",
          "Terms of Service — Terms governing use of our websites and services. Covers intellectual property (MIT License, trademarks), agent trust technology licensing (UTA/ATC open specs), disclaimers, limitation of liability ($100 cap), indemnification, and Wyoming governing law. View at /terms",
          "Cookie Policy — Our cookie practices. alicelabs.site uses ZERO cookies. Per-site cookie information for all 7 live production sites. View at /cookies",
          "System Status — Real-time operational status of all sites and infrastructure. View at /status"
        ]
      },
      {
        heading: "Corporate Information",
        body: [
          "Company Name: AliceLabs LLC (Limited Liability Company)",
          "Entity Type: Wyoming LLC",
          "Filing Number: #2025-001849256",
          "Filing Date: 2025",
          "Registered Agent: Wyoming Registered Agent Service",
          "Registered Address: 30 N Gould St Ste R, Sheridan, WY 82801, USA",
          "Principal Contact: contact@alicelabs.site",
          "Phone (USA): +1 (307) 381-3329",
          "Phone (Ecuador): +593 958 917 053",
          "Governing Law: State of Wyoming, United States of America"
        ]
      },
      {
        heading: "Intellectual Property",
        body: [
          "Open-Source Code: All public repositories are released under the MIT License. See github.com/alicelabs-llc for individual repository licenses.",
          "Trademarks: 'AliceLabs,' 'AliceLabs LLC,' 'AliceLabs Innovation Hub,' 'OpenSAM,' 'MarketNow,' 'UTA' (Universal Trust Adapter), 'ATC' (Agent Trust Card), and the AliceLabs triangle logo are trademarks of AliceLabs LLC.",
          "Open Protocol Specifications: UTA v1.0 and ATC v1.0 are open specifications, free to implement without licensing fees. Reference implementations are MIT-licensed.",
          "Website Content: The content, design, and layout of alicelabs.site are © 2026 AliceLabs LLC. All rights reserved.",
          "NPM Packages: agent-trust-card@1.1.2, @marketnow/trust-core@1.0.1, @marketnow/uts@2.0.1, @marketnow/trust-adapters@1.0.1, @marketnow/trust-gateway@1.0.1, @alicelabs/samgov-sdk — all MIT licensed."
        ]
      },
      {
        heading: "Data Practices Summary",
        body: [
          "Tracking: alicelabs.site does NOT use any tracking technology. No Google Analytics, no Facebook Pixel, no cookies.",
          "Data Collection: We only collect information you voluntarily provide via email or phone contact.",
          "Data Selling: We do NOT sell, rent, or share personal data with third parties.",
          "Data Security: AES-256-GCM encryption, zero-trust architecture, audit logging via mcp-vault-server.",
          "Data Retention: Email correspondence retained 24 months, server logs 30 days, project data per contract.",
          "Privacy Rights: We honor CCPA, CPRA, and other US state privacy law requests within 30 days."
        ]
      },
      {
        heading: "Agent Trust Technology Legal Framework",
        body: [
          "UTA (Universal Trust Adapter) v1.0: Open specification, free to implement. No licensing fees. Reference implementation: MIT License. Compatible with 8 trust credential formats (ATC, EAT-AI, ZTA, A2A, MCP Card, W3C VC, OAuth, SPIFFE).",
          "ATC (Agent Trust Card) v1.0: Open specification, free to implement. No licensing fees. Uses Ed25519 signatures (RFC 8032) and JCS canonical JSON (RFC 8785). Reference implementation: MIT License. ATC v3.0 (multi-sig) in RFC Draft.",
          "MCP Vault Server: Open-source (MIT License). Zero-trust key management with AES-256-GCM. Self-host or use managed instance. No warranty — see MIT License.",
          "Contributions: All contributions to our open-source repositories are licensed under the same license as the repository (typically MIT). Contributors retain their copyright but grant a perpetual, worldwide, non-exclusive license to AliceLabs LLC."
        ]
      },
      {
        heading: "DMCA and Takedown Policy",
        body: [
          "AliceLabs LLC respects the intellectual property rights of others. If you believe that content on our sites infringes your copyright, please send a DMCA notice to: AliceLabs LLC, Attn: DMCA, 30 N Gould St Ste R, Sheridan, WY 82801, USA. Email: contact@alicelabs.site.",
          "Your notice must include: (a) Identification of the copyrighted work; (b) URL of the allegedly infringing material; (c) Your contact information; (d) A statement of good-faith belief that the use is unauthorized; (e) A statement under penalty of perjury that you are authorized to act on behalf of the copyright owner; (f) Your physical or electronic signature.",
          "We will process DMCA notices within 10 business days of receipt."
        ]
      },
      {
        heading: "Contact for Legal Matters",
        body: [
          "For all legal inquiries: AliceLabs LLC, Attn: Legal, 30 N Gould St Ste R, Sheridan, WY 82801, USA. Email: contact@alicelabs.site. Phone: +1 (307) 381-3329.",
          "For privacy concerns: contact@alicelabs.site with 'Privacy' in the subject line.",
          "For security reports: contact@alicelabs.site with 'Security' in the subject line. We acknowledge security reports within 24 hours.",
          "For DMCA notices: contact@alicelabs.site with 'DMCA' in the subject line."
        ]
      }
    ]}
  />
}
