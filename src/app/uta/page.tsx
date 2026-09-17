import LegalPage from '../LegalPage'

export default function UtaPage() {
  return <LegalPage title="Universal Trust Adapter" tag="Protocol · UTA v1.0" pgNum="AliceLabs LLC · Open Specification" sections={[
    { heading: "What is UTA?", body: ["The Universal Trust Adapter (UTA) is the USB-C of agent trust. It translates between 8 trust credential formats via a canonical Universal Trust Schema (UTS v2.0.0).", "UTA enables AI agents using different trust systems to verify each other without changing their native format."] },
    { heading: "Supported Formats", body: ["ATC (Agent Trust Card) — our native format", "EAT-AI (Entity Attestation Token for AI)", "ZTA (Zero-Trust Architecture)", "A2A (Agent-to-Agent)", "MCP Card (Model Context Protocol)", "W3C VC (Verifiable Credentials)", "OAuth (Bearer token)", "SPIFFE (Secure Production Identity Framework)"] },
    { heading: "Architecture", body: ["12 verification stages ensure trust cards are valid, fresh, and authorized.", "Ed25519 signatures (RFC 8032) for cryptographic integrity.", "RFC 8785 JCS for canonical JSON serialization.", "23/23 conformance tests passing."] },
    { heading: "Implementation", body: ["Reference implementation: github.com/alicelabs-llc/universal-trust-adapter", "Language: TypeScript", "License: MIT", "npm: @marketnow/trust-adapters@1.0.1"] },
    { heading: "Getting Started", body: ["npm install @marketnow/trust-adapters", "import { TrustAdapter } from '@marketnow/trust-adapters'", "const adapter = new TrustAdapter({ format: 'ATC' })", "const verified = await adapter.verify(trustCard)"] }
  ]} />
}
