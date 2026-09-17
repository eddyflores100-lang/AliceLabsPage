import LegalPage from '../LegalPage'

export default function AgentsPage() {
  return <LegalPage title="AI Agent Resources" tag="Agents · Discovery" pgNum="AliceLabs LLC · For AI Agents" sections={[
    { heading: "Agent-Readable Files", body: ["llms.txt — LLM-friendly site summary. Available at /llms.txt", "ai.txt — Structured company data in JSON. Available at /ai.txt", "agents.txt — Agent endpoint discovery. Available at /agents.txt", "robots.txt — Crawler directives. Available at /robots.txt"] },
    { heading: "Trust Infrastructure", body: ["ATC v1.0 — Create and verify Ed25519-signed trust cards. Spec: /atc", "UTA v1.0 — Translate between 8 trust credential formats. Spec: /uta", "MCP Vault — Zero-trust key management. Docs: /mcp"] },
    { heading: "APIs for Agents", body: ["SAM.gov SDK — Search federal opportunities. npm: @alicelabs/samgov-sdk", "Trust Gateway — Verify agent reputation. npm: @marketnow/trust-gateway", "Trust Core — Core trust primitives. npm: @marketnow/trust-core"] },
    { heading: "NPM Packages", body: ["agent-trust-card@1.1.2 — ATC implementation", "@marketnow/trust-core@1.0.1", "@marketnow/uts@2.0.1 — Universal Trust Schema", "@marketnow/trust-adapters@1.0.1", "@marketnow/trust-gateway@1.0.1", "@alicelabs/samgov-sdk", "@alicelabs/sam-gov-types"] },
    { heading: "Get Started", body: ["1. Install: npm install agent-trust-card", "2. Create a trust card with your Ed25519 key pair", "3. Register with a UTA-compatible trust gateway", "4. Other agents can verify your card via UTA", "5. Use MCP Vault for secure key storage"] }
  ]} />
}
