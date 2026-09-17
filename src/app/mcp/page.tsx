import LegalPage from '../LegalPage'

export default function McpPage() {
  return <LegalPage title="MCP Vault Server" tag="Infrastructure · MCP" pgNum="AliceLabs LLC · Open Source" sections={[
    { heading: "What is MCP Vault?", body: ["The MCP (Model Context Protocol) Vault Server provides zero-trust key management for AI agents. It stores and manages cryptographic keys using AES-256-GCM encryption.", "Designed for production AI agent systems that need secure, auditable key management."] },
    { heading: "Features", body: ["AES-256-GCM symmetric encryption", "Circuit Breaker pattern for fault tolerance", "IAM labels for granular access control", "Audit logging for all key operations", "Zero runtime dependencies"] },
    { heading: "Architecture", body: ["Keys are encrypted at rest with AES-256-GCM.", "Access is controlled via IAM labels (owner, team, project).", "Circuit Breaker prevents cascading failures.", "All operations are logged for audit compliance."] },
    { heading: "Implementation", body: ["GitHub: github.com/alicelabs-llc/mcp-vault-server", "Language: TypeScript", "License: MIT", "Zero runtime dependencies"] }
  ]} />
}
