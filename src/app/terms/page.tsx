import LegalPage from '../LegalPage'

export default function TermsPage() {
  return <LegalPage
    title="Terms of Service"
    tag="Legal · Terms"
    pgNum="AliceLabs LLC · Effective Date: September 17, 2026 · Last Revised: September 17, 2026"
    intro="These Terms of Service ('Terms') constitute a legally binding agreement between you ('User,' 'you,' or 'your') and AliceLabs LLC ('Company,' 'we,' 'us,' or 'our') governing your access to and use of alicelabs.site and all related properties. By accessing or using any of our websites, services, or open-source repositories, you agree to be bound by these Terms. If you do not agree, you must not access or use our services."
    sections={[
      {
        heading: "Acceptance of Terms",
        body: [
          "1.1. By accessing alicelabs.site or any of our live properties (opensam.us, marketnow.site, alicelabs.energy, sg-turismo.com, equastore.com, angrycactus.site, floranova.life), you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
          "1.2. If you are accessing our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.",
          "1.3. Our open-source repositories on GitHub (github.com/alicelabs-llc) are governed by their respective licenses (typically the MIT License) and GitHub's Terms of Service. These Terms do not override or modify the terms of any open-source license.",
          "1.4. We may modify these Terms at any time. We will post the updated Terms on this page and update the 'Last Revised' date. Your continued use of our services after changes take effect constitutes acceptance of the modified Terms."
        ]
      },
      {
        heading: "Description of Services",
        body: [
          "2.1. AliceLabs LLC provides open-source infrastructure for AI agent trust, government APIs, legal technology, and security research. Our services include: (a) alicelabs.info — corporate website; (b) OpenSAM (opensam.us) — federal contract intelligence platform; (c) MarketNow (marketnow.site) — trust infrastructure for AI agents; (d) AliceLabs.Energy (alicelabs.energy) — energy infrastructure platform; (e) SG-Turismo (sg-turismo.com) — tourism platform for Ecuador; (f) Equastore (equastore.com) — wellness e-commerce; (g) Angry Cactus (angrycactus.site) — lifestyle brand; (h) FloraNova (floranova.life) — botanical care platform.",
          "2.2. We also provide: open-source software repositories on GitHub; npm packages including @alicelabs/samgov-sdk, agent-trust-card, @marketnow/trust-core, @marketnow/uts, @marketnow/trust-adapters, @marketnow/trust-gateway; protocol specifications including UTA (Universal Trust Adapter) v1.0 and ATC (Agent Trust Card) v1.0; and consulting/development services to select clients.",
          "2.3. We reserve the right to modify, suspend, or discontinue any service at any time without notice. We will not be liable for any modification, suspension, or discontinuance."
        ]
      },
      {
        heading: "Intellectual Property Rights",
        body: [
          "3.1. Open-Source Code: All code in our public GitHub repositories is released under the MIT License unless otherwise specified in the repository. Under the MIT License, you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the condition that the copyright notice and permission notice be included in all copies.",
          "3.2. Company Trademarks: 'AliceLabs,' 'AliceLabs LLC,' 'AliceLabs Innovation Hub,' 'OpenSAM,' 'MarketNow,' 'UTA' (Universal Trust Adapter), 'ATC' (Agent Trust Card), and the AliceLabs triangle logo are trademarks of AliceLabs LLC. You may not use these trademarks without our express written permission, except as permitted under the MIT License for attribution purposes.",
          "3.3. Protocol Specifications: The UTA v1.0 and ATC v1.0 specifications are open and free to implement. We do not charge licensing fees for implementing these protocols. However, the reference implementations in our GitHub repositories are governed by the MIT License.",
          "3.4. Website Content: The content on alicelabs.site (text, graphics, design, layout) is copyright © 2026 AliceLabs LLC. All rights reserved. You may not reproduce, distribute, or create derivative works from the website content without our express written permission.",
          "3.5. Third-Party Intellectual Property: Our services may include third-party software, libraries, and content governed by their respective licenses. You must comply with all such license terms."
        ]
      },
      {
        heading: "User Conduct and Obligations",
        body: [
          "4.1. You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to: (a) Use our services to violate any law, regulation, or third-party right; (b) Attempt to gain unauthorized access to our systems, accounts, or data; (c) Interfere with or disrupt the integrity of our services; (d) Upload or transmit viruses, malware, or harmful code; (e) Scrape, crawl, or index our websites without permission (AI agents may access llms.txt and robots.txt as specified); (f) Use our services to send unsolicited communications; (g) Impersonate any person or entity.",
          "4.2. For AI Agents: We welcome AI agents to access our agent-readable files (llms.txt, ai.txt, agents.txt) and to implement our open protocols (UTA, ATC). Agents must identify themselves accurately in their user agent string and respect the rate limits specified in robots.txt.",
          "4.3. For OpenSAM Users: OpenSAM (opensam.us) provides access to federal contracting data from SAM.gov. This data is in the U.S. public domain. You are responsible for verifying all opportunity details on SAM.gov before taking action."
        ]
      },
      {
        heading: "Agent Trust Technology License",
        body: [
          "5.1. UTA (Universal Trust Adapter) v1.0: The specification is open and free to implement. The reference implementation (TypeScript) is licensed under MIT. You may implement UTA in any language without paying licensing fees to AliceLabs LLC.",
          "5.2. ATC (Agent Trust Card) v1.0: The specification is open and free to implement. The reference implementation (agent-trust-card npm package) is licensed under MIT. ATC v3.0 (multi-signature) is currently in RFC Draft stage.",
          "5.3. UTS (Universal Trust Schema) v2.0.0: The canonical schema for trust data is open and free to use. The npm package (@marketnow/uts) is licensed under MIT.",
          "5.4. MCP Vault Server: The implementation is open-source under MIT License. You may self-host it or use our managed instance. No warranty is provided — see the MIT License for details.",
          "5.5. Contributions: We welcome contributions to our open-source repositories. By contributing, you agree that your contributions will be licensed under the same license as the repository (typically MIT)."
        ]
      },
      {
        heading: "Disclaimers",
        body: [
          "6.1. No Warranty: Our services are provided 'AS IS' and 'AS AVAILABLE' without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.",
          "6.2. No Guarantee of Results: We do not guarantee that our services will meet your requirements, that they will be uninterrupted, error-free, or secure, or that the results obtained from using our services will be accurate or reliable.",
          "6.3. OpenSAM Data: Federal contracting data displayed on opensam.us is sourced from SAM.gov and is provided 'as is' without warranty. We are not responsible for errors, omissions, or delays in SAM.gov data.",
          "6.4. Third-Party Content: Our services may contain links to or integrate with third-party content. We do not endorse and are not responsible for third-party content.",
          "6.5. No Professional Advice: Information on our sites does not constitute legal, financial, or professional advice. For federal contracting decisions, consult a qualified attorney or contract specialist."
        ]
      },
      {
        heading: "Limitation of Liability",
        body: [
          "7.1. To the maximum extent permitted by law, AliceLabs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation: loss of profits, loss of data, loss of business, loss of goodwill, or any other intangible losses, arising out of or in connection with your use of our services.",
          "7.2. Our total aggregate liability arising out of or relating to these Terms or our services shall not exceed the amount you have paid us in the twelve (12) months preceding the claim, or one hundred US dollars ($100 USD), whichever is greater.",
          "7.3. The limitations in this section apply even if we have been advised of the possibility of such damages and regardless of the theory of liability (contract, tort, negligence, or otherwise).",
          "7.4. Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you."
        ]
      },
      {
        heading: "Indemnification",
        body: [
          "8.1. You agree to indemnify, defend, and hold harmless AliceLabs LLC, its officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any third-party right, including intellectual property rights; (d) your implementation of our open protocols (UTA, ATC) in a manner that infringes third-party rights."
        ]
      },
      {
        heading: "Governing Law and Dispute Resolution",
        body: [
          "9.1. Governing Law: These Terms are governed by and construed in accordance with the laws of the State of Wyoming, United States of America, without regard to its conflict of law provisions.",
          "9.2. Jurisdiction: Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Sheridan County, Wyoming, and you hereby irrevocably consent to the personal jurisdiction and venue therein.",
          "9.3. Alternative Dispute Resolution: Before filing a lawsuit, the parties agree to attempt to resolve the dispute through good-faith negotiation. If the dispute is not resolved within 30 days, either party may pursue mediation through a mutually agreed-upon mediator. If mediation fails, either party may pursue litigation.",
          "9.4. Class Action Waiver: You agree that any dispute will be resolved individually, not as part of a class action or representative proceeding.",
          "9.5. Wyoming LLC Information: AliceLabs LLC is registered in Wyoming, Filing #2025-001849256, with registered office at 30 N Gould St Ste R, Sheridan, WY 82801."
        ]
      },
      {
        heading: "Termination",
        body: [
          "10.1. We may terminate or suspend your access to our services at any time, with or without cause or notice, if we believe you have violated these Terms.",
          "10.2. You may stop using our services at any time. If you have an account on any of our live sites, you may request account deletion by contacting the respective site.",
          "10.3. Upon termination, all provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
          "10.4. Termination does not affect any rights or obligations accrued prior to termination."
        ]
      },
      {
        heading: "General Provisions",
        body: [
          "11.1. Entire Agreement: These Terms, together with our Privacy Policy, constitute the entire agreement between you and AliceLabs LLC regarding the use of our services.",
          "11.2. Severability: If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",
          "11.3. Waiver: No waiver of any provision of these Terms will be effective unless in writing and signed by an authorized representative of AliceLabs LLC.",
          "11.4. Assignment: You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.",
          "11.5. Force Majeure: We are not liable for any failure or delay in performance due to causes beyond our reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, government actions, or failures of third-party services (including GitHub, SAM.gov, or internet infrastructure)."
        ]
      },
      {
        heading: "Contact Information",
        body: [
          "12.1. For questions about these Terms, please contact: AliceLabs LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA. Email: contact@alicelabs.site. Phone: +1 (307) 381-3329.",
          "12.2. For legal notices, please send to the address above with 'Attn: Legal' on the envelope or subject line.",
          "12.3. For DMCA takedown notices, please send to the same address with 'DMCA Notice' in the subject line. Include the allegedly infringing material URL, your contact information, and a good-faith belief statement as required by 17 U.S.C. § 512."
        ]
      }
    ]}
  />
}
