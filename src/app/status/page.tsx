import LegalPage from '../LegalPage'

export default function StatusPage() {
  return <LegalPage title="System Status" tag="Operations · Status" pgNum="AliceLabs LLC · Real-time" sections={[
    { heading: "All Systems Operational", body: ["All 7 live sites are operational and responding.", "Last check: September 2026"] },
    { heading: "Live Sites", body: ["opensam.us — OPERATIONAL", "marketnow.site — OPERATIONAL", "alicelabs.energy — OPERATIONAL", "sg-turismo.com — OPERATIONAL", "equastore.com — OPERATIONAL", "angrycactus.site — OPERATIONAL", "floranova.life — OPERATIONAL"] },
    { heading: "Infrastructure", body: ["GitHub: alicelabs-llc org — 21 public repos, all accessible", "Firebase Hosting: inversion-al project — OPERATIONAL", "Firebase Hosting: alicelabs-ads project — OPERATIONAL", "Docs: docs.alicelabs.site — OPERATIONAL"] },
    { heading: "Build", body: ["Build Revision: v11.0 [STABLE]", "Cloud Sync: ACTIVE", "Status endpoint: https://status.alicelabs.site"] }
  ]} />
}
