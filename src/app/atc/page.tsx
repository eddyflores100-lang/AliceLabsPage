import LegalPage from '../LegalPage'

export default function AtcPage() {
  return <LegalPage title="Agent Trust Card" tag="Protocol · ATC v1.0" pgNum="AliceLabs LLC · Open Specification" sections={[
    { heading: "What is ATC?", body: ["The Agent Trust Card (ATC) is an Ed25519-signed digital certificate that proves an AI agent's identity, capabilities, and reputation.", "ATC is the native trust format of the AliceLabs ecosystem, compatible with UTA for cross-format interoperability."] },
    { heading: "Cryptographic Specs", body: ["Signature algorithm: Ed25519 (RFC 8032)", "Canonical JSON: RFC 8785 JCS (JSON Canonicalization Scheme)", "Key format: Ed25519 public key (32 bytes), private key (64 bytes)", "Card format: JWS (JSON Web Signature) compact serialization"] },
    { heading: "Card Structure", body: ["Each ATC contains: issuer (DID), subject (agent ID), issued_at (timestamp), expires_at (timestamp), capabilities (array), reputation_score (0-100), signature (Ed25519)."] },
    { heading: "Verification", body: ["12 verification stages: signature validity, issuer trust, expiry check, capability validation, reputation threshold, revocation check, and more.", "All 23 conformance tests passing. Test vectors and CA keys available in the repo."] },
    { heading: "Implementation", body: ["npm install agent-trust-card@1.1.2", "GitHub: github.com/alicelabs-llc/universal-trust-adapter", "ATC v3.0 RFC Draft (multi-sig) in development"] }
  ]} />
}
