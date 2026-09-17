import LegalPage from '../LegalPage'

export default function DocsPage() {
  return <LegalPage title="Documentation" tag="Resources · Docs" pgNum="AliceLabs LLC · September 2026" sections={[
    { heading: "Agent Trust Technology", body: ["UTA (Universal Trust Adapter) v1.0 — The USB-C of agent trust. Translates between 8 trust credential formats via canonical Universal Trust Schema (UTS v2.0.0). Spec: /uta", "ATC (Agent Trust Card) v1.0 — Ed25519-signed trust cards for AI agents. RFC 8032 signatures, RFC 8785 JCS canonical JSON. Spec: /atc", "MCP Vault Server — Zero-trust key management for AI agents. AES-256-GCM, Circuit Breaker, IAM labels. Repo: github.com/alicelabs-llc/mcp-vault-server"] },
    { heading: "GovTech SDKs", body: ["samgov-sdk — TypeScript SDK for SAM.gov Federal Opportunities API. npm: @alicelabs/samgov-sdk", "sam-gov-types — TypeScript type definitions for SAM.gov API. npm: @alicelabs/sam-gov-types", "govcon-scoring — Federal contract viability scoring engine. NAICS matching, certification alignment."] },
    { heading: "LegalTech", body: ["LegalIA — AI legal assistants for Ecuador and LatAm. RAG-based ensemble of legal models.", "ecuadorian-legal-codes — Machine-readable Ecuadorian legislation in JSON. COIP, COGEP, CC, CT, CRE, CNJ.", "autotaxflow — Automated tax workflow for Ecuador. SRI integration, proforma generation, OCR."] },
    { heading: "Security", body: ["CodeAuditor — Static analysis, vulnerability detection, continuous monitoring.", "burp-quicknotes — Bug bounty report templates for Burp Suite. SSRF, IDOR, XSS, Auth Bypass.", "supabase-rls-templates — Production-ready Row Level Security policies for Supabase."] },
    { heading: "Agent Resources", body: ["llms.txt — LLM-friendly site summary at /llms.txt", "ai.txt — Structured company data at /ai.txt", "agents.txt — Agent endpoint discovery at /agents.txt", "API Docs: https://docs.alicelabs.site"] },
    { heading: "NPM Packages", body: ["@alicelabs/samgov-sdk — SAM.gov SDK", "@alicelabs/sam-gov-types — SAM.gov types", "agent-trust-card@1.1.2 — ATC implementation", "@marketnow/trust-core@1.0.1 — Trust core", "@marketnow/uts@2.0.1 — Universal Trust Schema", "@marketnow/trust-adapters@1.0.1 — Trust adapters", "@marketnow/trust-gateway@1.0.1 — Trust gateway"] }
  ]} />
}
