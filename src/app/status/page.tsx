import LegalPage from '../LegalPage'

export default function StatusPage() {
  return <LegalPage title="Service status" tag="Operations · Information" pgNum="AliceLabs · Manual status information" intro="This page is not connected to a monitoring service and does not report live availability." sections={[
    { heading: "Availability not verified", body: ["We do not publish uptime or operational guarantees from this static page. Product websites and integrations may have independent availability."] },
    { heading: "Report a problem", body: ["Contact contact@alicelabs.site with the affected URL, the time of the issue and a description. Do not include passwords or private customer data."] },
    { heading: "Project support", body: ["Support scope, response times and service commitments are defined in each project's agreement."] }
  ]} />
}
