import LegalPage from '../LegalPage'

export default function CookiesPage() {
  return <LegalPage
    title="Cookie Policy"
    tag="Legal · Cookies"
    pgNum="AliceLabs LLC · Effective Date: September 17, 2026"
    intro="This Cookie Policy explains how AliceLabs LLC uses cookies and similar tracking technologies on our websites. We believe in radical transparency: alicelabs.site uses ZERO cookies. This document exists to formally document that fact and to provide information about cookies used on our live production sites."
    sections={[
      {
        heading: "What Are Cookies?",
        body: [
          "Cookies are small text files stored on your device when you visit a website. They are widely used to make websites function efficiently and to provide reporting information. Cookies can be categorized as: (a) Strictly necessary cookies — required for the website to function; (b) Preference cookies — remember your settings and preferences; (c) Analytics cookies — collect information about how visitors use the site; (d) Marketing cookies — used to deliver relevant advertisements.",
          "alicelabs.site does NOT use any of these categories. We have designed our corporate website to function without any cookies, tracking pixels, or client-side storage (except for a language preference toggle stored in localStorage, which never leaves your device)."
        ]
      },
      {
        heading: "Cookies on alicelabs.site",
        body: [
          "2.1. alicelabs.site does NOT set any cookies. There are no session cookies, no authentication cookies, no analytics cookies, no advertising cookies, and no third-party cookies.",
          "2.2. We do NOT use: Google Analytics, Google Tag Manager, Facebook Pixel, LinkedIn Insight Tag, Twitter Pixel, Hotjar, Mixpanel, Segment, or any other analytics or marketing tracking tool.",
          "2.3. The only client-side storage used is localStorage for the EN/ES language toggle. This data is stored on your device and is never transmitted to our servers. Clearing your browser data will remove this preference.",
          "2.4. Third-party resources loaded by this site: Google Fonts (fonts.googleapis.com) for typography and Tailwind CSS (cdn.tailwindcss.com) for styling. These services may log standard HTTP request information (IP address, timestamp, user agent) per their own privacy policies. We do not control their data practices."
        ]
      },
      {
        heading: "Cookies on Our Live Production Sites",
        body: [
          "3.1. OpenSAM (opensam.us): Uses a session cookie to remember your search preferences (NAICS codes, set-aside filters). This cookie is deleted when you close your browser. No analytics or tracking cookies are used. No third-party cookies.",
          "3.2. MarketNow (marketnow.site): Uses authentication cookies for logged-in users (agent-trust-card verification sessions). These cookies are HttpOnly, Secure, and SameSite=Strict. No analytics or tracking cookies. No third-party cookies.",
          "3.3. AliceLabs.Energy (alicelabs.energy): Uses a session cookie for dashboard preferences. No analytics. No third-party tracking.",
          "3.4. SG-Turismo (sg-turismo.com): Uses booking session cookies to remember your route selection and reservation in progress. Cookies expire after 24 hours. No analytics. No third-party tracking.",
          "3.5. Equastore (equastore.com): Operates on Shopify. Uses Shopify's standard e-commerce cookies for cart management, checkout, and session persistence. Shopify may set analytics cookies. See Shopify's Cookie Policy at shopify.com/legal/cookies for details. Payment processing via Stripe may set additional cookies. See Stripe's Privacy Policy.",
          "3.6. Angry Cactus (angrycactus.site): Uses a session cookie for print-on-demand cart management. No analytics. No third-party tracking.",
          "3.7. FloraNova (floranova.life): Uses a session cookie for plant identification preferences. No analytics. No third-party tracking."
        ]
      },
      {
        heading: "Managing Cookies",
        body: [
          "4.1. You can control and delete cookies through your browser settings. Most modern browsers allow you to: (a) View all cookies stored on your device; (b) Delete individual or all cookies; (c) Block all cookies or only third-party cookies; (d) Set preferences for specific websites; (e) Browse in 'private' or 'incognito' mode.",
          "4.2. Browser-specific instructions: Chrome: Settings > Privacy and security > Cookies. Firefox: Settings > Privacy & Security > Cookies. Safari: Preferences > Privacy > Cookies. Edge: Settings > Cookies and site permissions.",
          "4.3. Since alicelabs.site uses no cookies, no action is needed for this site. For our live production sites, disabling cookies may affect functionality (e.g., you may not be able to complete a purchase on equastore.com without session cookies)."
        ]
      },
      {
        heading: "Do Not Track Signals",
        body: [
          "5.1. alicelabs.site does not track users, so it does not need to respond to Do Not Track (DNT) signals — there is nothing to opt out of.",
          "5.2. Our live production sites respect DNT signals where technically feasible. If your browser sends a DNT: 1 header, our sites will not set non-essential cookies."
        ]
      },
      {
        heading: "Updates to This Policy",
        body: [
          "6.1. We may update this Cookie Policy if our cookie practices change. Any changes will be posted on this page with an updated 'Effective Date.'",
          "6.2. Since alicelabs.site uses no cookies, we do not anticipate material changes to this policy. However, if we add cookies in the future, we will provide clear notice and obtain consent where required by law."
        ]
      },
      {
        heading: "Contact",
        body: [
          "7.1. Questions about this Cookie Policy? Contact: AliceLabs LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA. Email: contact@alicelabs.site. Phone: +1 (307) 381-3329."
        ]
      }
    ]}
  />
}
