import LegalPage from '../LegalPage'

export default function PrivacyPage() {
  return <LegalPage
    en={{
      title: "Privacy Policy",
      tag: "Legal · Privacy",
      pgNum: "AliceLabs LLC · Effective: September 2026",
      intro: "This Privacy Policy describes how AliceLabs LLC collects, uses, discloses, and protects personal information. We comply with US federal and state privacy laws including CCPA, CPRA, and Wyoming regulations.",
      tocLabel: "Contents",
      tocTitle1: "Table of",
      tocTitle2: "contents.",
      contentsWord: "INDEX",
      sectionsWord: "sections",
      ctaTitle: "Legal questions?",
      ctaSub: "Contact us for any legal inquiries. We respond within 5 business days.",
      ctaBtn: "contact@alicelabs.site",
      backHome: "← Back to home",
      sections: [
        { heading: "Information We Collect", body: [
          "1.1. Personal Information You Provide Voluntarily: When you contact us via email at contact@alicelabs.site, by phone at +1 (307) 381-3329, or through any contact forms, we may collect your name, email address, phone number, company name, and the content of your communication.",
          "1.2. Information Collected Automatically: alicelabs.site does NOT use Google Analytics, Facebook Pixel, or any third-party tracking technology. We do NOT collect IP addresses for tracking. We do NOT use tracking cookies. Server logs (IP, user agent, timestamp) are for security only and purged after 30 days.",
          "1.3. Information from Our Open-Source Repositories: Our public GitHub repositories may collect information as part of normal Git operations. This is governed by GitHub's Privacy Policy, not this Policy.",
          "1.4. Information from Live Production Sites: Each of our seven live sites has its own privacy practices appropriate to its function. equastore.com collects payment and shipping information; opensam.us collects no personal data.",
          "1.5. Sensitive Information: We do NOT knowingly collect Social Security numbers, driver's license numbers, financial account numbers, or health information."
        ]},
        { heading: "How We Use Your Information", body: [
          "2.1. Responding to Inquiries: We use your email and phone to respond to questions and discuss projects. We retain correspondence for 24 months, then delete it.",
          "2.2. Providing Services: If you engage us for development or consulting, we use your information to deliver services, send invoices, and provide support.",
          "2.3. Security and Fraud Prevention: Server logs monitor for malicious activity and protect our systems. This does not involve profiling or behavioral tracking.",
          "2.4. Legal Compliance: We may disclose information when required by law, court order, or government regulation.",
          "2.5. We do NOT: Sell your personal information. Rent or lease it. Use it for advertising. Share it with data brokers. Use it to train AI models without consent."
        ]},
        { heading: "Cookies and Tracking Technologies", body: [
          "3.1. alicelabs.site does NOT use cookies — not session, not analytics, not advertising. The only client-side storage is localStorage for the EN/ES language toggle, which never leaves your device.",
          "3.2. Third-Party Resources: This site loads fonts from Google Fonts and Tailwind CSS from CDN. These services may log standard request information per their own policies.",
          "3.3. Live Site Cookies: opensam.us uses session cookies for search. marketnow.site uses auth cookies. equastore.com uses Shopify e-commerce cookies. Other sites use minimal functional cookies.",
          "3.4. Browser Controls: You can control cookies through your browser settings. Since alicelabs.site uses no cookies, no action is needed."
        ]},
        { heading: "Data Security", body: [
          "4.1. Encryption: We use AES-256-GCM for encrypting sensitive data at rest, implemented through our open-source mcp-vault-server. All data in transit uses TLS 1.2+.",
          "4.2. Access Control: Zero-trust architecture. Access granted on least-privilege basis. All access is authenticated and logged.",
          "4.3. Audit Logging: All key operations are logged with timestamps, actor identity, and operation details. Logs retained 12 months.",
          "4.4. Incident Response: In the event of a breach, we notify affected individuals within 72 hours and the Wyoming Attorney General if required by law.",
          "4.5. Regular Reviews: Security practices reviewed quarterly."
        ]},
        { heading: "Data Retention", body: [
          "5.1. Email Correspondence: Retained 24 months after last interaction, then permanently deleted.",
          "5.2. Server Logs: Retained 30 days for security, then automatically purged.",
          "5.3. Project Data: Retained for the engagement plus 12 months, unless otherwise specified in contract.",
          "5.4. Deletion Requests: Contact contact@alicelabs.site to request deletion. We process within 30 days."
        ]},
        { heading: "Your Privacy Rights (US State Laws)", body: [
          "6.1. California (CCPA/CPRA): Right to know, delete, correct, and port personal information. We do not sell data, so opt-out is not applicable. Contact contact@alicelabs.site.",
          "6.2. Wyoming: Right to request access and correction of personal information.",
          "6.3. Other US States: Virginia, Colorado, Connecticut, Utah residents have similar rights.",
          "6.4. Response Time: We respond within 30 days. Extensions up to 60 additional days with notice.",
          "6.5. Non-Discrimination: We will not discriminate against you for exercising your privacy rights."
        ]},
        { heading: "Children's Privacy", body: [
          "7.1. Our services are not directed to children under 13 (under 16 for California). We do not knowingly collect information from children.",
          "7.2. If you believe we have collected information from a child, contact us immediately and we will delete it."
        ]},
        { heading: "International Data Transfers", body: [
          "8.1. AliceLabs LLC is US-based. All data is stored on US servers.",
          "8.2. If you access our services from outside the US, your information will be transferred to the US. By using our services, you consent to this transfer."
        ]},
        { heading: "Third-Party Links and Services", body: [
          "9.1. Our website links to third-party sites (GitHub, Google Fonts, live sites). We are not responsible for their privacy practices.",
          "9.2. We use: Google Fonts (fonts), GitHub (code hosting), Firebase (web hosting), Shopify (e-commerce), Stripe (payments). Each has its own privacy policy."
        ]},
        { heading: "Changes to This Policy", body: [
          "10.1. We may update this Privacy Policy. Changes will be posted on this page with an updated date.",
          "10.2. Material changes to data practices will be communicated by email or prominent notice.",
          "10.3. Continued use after changes constitutes acceptance."
        ]},
        { heading: "Contact Information", body: [
          "11.1. For questions about this Privacy Policy: AliceLabs LLC, Attn: Privacy, 30 N Gould St Ste R, Sheridan, WY 82801, USA.",
          "11.2. Email: contact@alicelabs.site. Phone: +1 (307) 381-3329.",
          "11.3. If unsatisfied with our response, you may file a complaint with the Wyoming Attorney General or the FTC."
        ]}
      ]
    }}
    es={{
      title: "Política de Privacidad",
      tag: "Legal · Privacidad",
      pgNum: "AliceLabs LLC · Vigente: Septiembre 2026",
      intro: "Esta Política de Privacidad describe cómo AliceLabs LLC recopila, utiliza, divulga y protege la información personal. Cumplimos con las leyes de privacidad federales y estatales de EE.UU., incluyendo CCPA, CPRA y regulaciones de Wyoming.",
      tocLabel: "Contenido",
      tocTitle1: "Tabla de",
      tocTitle2: "contenido.",
      contentsWord: "ÍNDICE",
      sectionsWord: "secciones",
      ctaTitle: "¿Preguntas legales?",
      ctaSub: "Contáctanos para cualquier consulta legal. Respondemos en 5 días hábiles.",
      ctaBtn: "contact@alicelabs.site",
      backHome: "← Volver al inicio",
      sections: [
        { heading: "Información que Recopilamos", body: [
          "1.1. Información Personal Proporcionada Voluntariamente: Cuando nos contactas vía email a contact@alicelabs.site, por teléfono al +1 (307) 381-3329, o mediante formularios, podemos recopilar tu nombre, email, teléfono, empresa y el contenido de tu comunicación.",
          "1.2. Información Recopilada Automáticamente: alicelabs.site NO usa Google Analytics, Facebook Pixel ni tecnología de seguimiento de terceros. NO recopilamos direcciones IP para seguimiento. NO usamos cookies de seguimiento. Los logs del servidor (IP, user agent, timestamp) son solo para seguridad y se eliminan después de 30 días.",
          "1.3. Información de Repositorios Open-Source: Nuestros repositorios públicos en GitHub pueden recopilar información como parte de las operaciones normales de Git. Esto se rige por la Política de Privacidad de GitHub, no por esta Política.",
          "1.4. Información de Sitios en Producción: Cada uno de nuestros siete sitios en vivo tiene sus propias prácticas de privacidad. equastore.com recopila información de pago y envío; opensam.us no recopila datos personales.",
          "1.5. Información Sensible: NO recopilamos conscientemente números de Seguro Social, licencias de conducir, cuentas financieras ni información de salud."
        ]},
        { heading: "Cómo Usamos tu Información", body: [
          "2.1. Respuesta a Consultas: Usamos tu email y teléfono para responder preguntas y discutir proyectos. Conservamos la correspondencia 24 meses, luego se elimina.",
          "2.2. Prestación de Servicios: Si nos contratas para desarrollo o consultoría, usamos tu información para entregar servicios, enviar facturas y brindar soporte.",
          "2.3. Seguridad y Prevención de Fraude: Los logs del servidor monitorean actividad maliciosa y protegen nuestros sistemas. Esto no implica perfilado ni seguimiento conductual.",
          "2.4. Cumplimiento Legal: Podemos divulgar información cuando lo exija la ley, una orden judicial o regulación gubernamental.",
          "2.5. NO: Vendemos tu información personal. La alquilamos. La usamos para publicidad. La compartimos con brokers de datos. La usamos para entrenar IA sin consentimiento."
        ]},
        { heading: "Cookies y Tecnologías de Seguimiento", body: [
          "3.1. alicelabs.site NO usa cookies — ni de sesión, ni analíticas, ni publicitarias. El único almacenamiento del lado del cliente es localStorage para el toggle de idioma EN/ES, que nunca sale de tu dispositivo.",
          "3.2. Recursos de Terceros: Este sitio carga fuentes de Google Fonts y Tailwind CSS desde CDN. Estos servicios pueden registrar información estándar de solicitud según sus propias políticas.",
          "3.3. Cookies de Sitios en Vivo: opensam.us usa cookies de sesión para búsqueda. marketnow.site usa cookies de autenticación. equastore.com usa cookies de Shopify. Otros sitios usan cookies funcionales mínimas.",
          "3.4. Controles del Navegador: Puedes controlar las cookies desde la configuración de tu navegador. Como alicelabs.site no usa cookies, no se requiere acción."
        ]},
        { heading: "Seguridad de Datos", body: [
          "4.1. Cifrado: Usamos AES-256-GCM para cifrar datos sensibles en reposo, implementado mediante nuestro mcp-vault-server open-source. Todos los datos en tránsito usan TLS 1.2+.",
          "4.2. Control de Acceso: Arquitectura zero-trust. Acceso concedido con privilegio mínimo. Todo acceso está autenticado y registrado.",
          "4.3. Registro de Auditoría: Todas las operaciones de claves se registran con timestamp, identidad del actor y detalles. Logs conservados 12 meses.",
          "4.4. Respuesta a Incidentes: En caso de brecha, notificamos a los afectados dentro de 72 horas y al Fiscal General de Wyoming si lo exige la ley.",
          "4.5. Revisiones Regulares: Las prácticas de seguridad se revisan trimestralmente."
        ]},
        { heading: "Retención de Datos", body: [
          "5.1. Correspondencia por Email: Conservada 24 meses después de la última interacción, luego eliminada permanentemente.",
          "5.2. Logs del Servidor: Conservados 30 días por seguridad, luego purgados automáticamente.",
          "5.3. Datos de Proyectos: Conservados por la duración del contrato más 12 meses, salvo especificación contraria.",
          "5.4. Solicitudes de Eliminación: Contacta contact@alicelabs.site para solicitar eliminación. Procesamos en 30 días."
        ]},
        { heading: "Tus Derechos de Privacidad (Leyes Estatales EE.UU.)", body: [
          "6.1. California (CCPA/CPRA): Derecho a saber, eliminar, corregir y portar información personal. No vendemos datos, por lo que la exclusión voluntaria no aplica. Contacta contact@alicelabs.site.",
          "6.2. Wyoming: Derecho a solicitar acceso y corrección de información personal.",
          "6.3. Otros Estados EE.UU.: Residentes de Virginia, Colorado, Connecticut, Utah tienen derechos similares.",
          "6.4. Tiempo de Respuesta: Respondemos en 30 días. Extensiones hasta 60 días adicionales con notificación.",
          "6.5. No Discriminación: No te discriminaremos por ejercer tus derechos de privacidad."
        ]},
        { heading: "Privacidad Infantil", body: [
          "7.1. Nuestros servicios no están dirigidos a menores de 13 años (16 para California). No recopilamos conscientemente información de menores.",
          "7.2. Si crees que hemos recopilado información de un menor, contáctanos inmediatamente y la eliminaremos."
        ]},
        { heading: "Transferencias Internacionales de Datos", body: [
          "8.1. AliceLabs LLC tiene sede en EE.UU. Todos los datos se almacenan en servidores en Estados Unidos.",
          "8.2. Si accedes a nuestros servicios desde fuera de EE.UU., tu información se transferirá a EE.UU. Al usar nuestros servicios, consientes esta transferencia."
        ]},
        { heading: "Enlaces y Servicios de Terceros", body: [
          "9.1. Nuestro sitio contiene enlaces a sitios de terceros (GitHub, Google Fonts, sitios en vivo). No somos responsables de sus prácticas de privacidad.",
          "9.2. Usamos: Google Fonts (fuentes), GitHub (hosting de código), Firebase (hosting web), Shopify (e-commerce), Stripe (pagos). Cada uno tiene su propia política de privacidad."
        ]},
        { heading: "Cambios a Esta Política", body: [
          "10.1. Podemos actualizar esta Política de Privacidad. Los cambios se publicarán en esta página con la fecha actualizada.",
          "10.2. Cambios materiales en prácticas de datos se comunicarán por email o aviso prominente.",
          "10.3. El uso continuado después de los cambios constituye aceptación."
        ]},
        { heading: "Información de Contacto", body: [
          "11.1. Para preguntas sobre esta Política: AliceLabs LLC, Attn: Privacy, 30 N Gould St Ste R, Sheridan, WY 82801, USA.",
          "11.2. Email: contact@alicelabs.site. Teléfono: +1 (307) 381-3329.",
          "11.3. Si no estás satisfecho con nuestra respuesta, puedes presentar una queja ante el Fiscal General de Wyoming o la FTC."
        ]}
      ]
    }}
  />
}
