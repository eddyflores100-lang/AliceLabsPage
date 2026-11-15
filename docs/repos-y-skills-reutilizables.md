# AliceLabs — Reutilización de repositorios y skills existentes (14-11-2026)

## Decisión de arquitectura
**Integrar software existente antes de escribir una implementación nueva.** Este documento no significa que los repositorios estén instalados o desplegados. La integración requiere pruebas, credenciales y cumplimiento de licencias.

## Repositorios comprobados en GitHub
| Necesidad | Fuente original | Estado comprobado | Decisión |
|---|---|---|---|
| Agente de búsqueda de empleo | https://github.com/ai-job-search-dev/ai-job-search | Repo público, licencia MIT, directorios `.agents`, `.claude`, `job_scraper`, `tests` | Reutilizar comandos y flujos; adaptar configuración al mercado objetivo |
| Extracción web | https://github.com/firecrawl/firecrawl | Repo público, licencia AGPL-3.0; carpetas `skills`, `firecrawl-skills`, `firecrawl-workflows` | Evaluar API/SDK o despliegue propio; revisar obligaciones AGPL antes de ofrecer como servicio |
| Automatización y pruebas de navegador | https://github.com/microsoft/playwright | Repo público, Apache-2.0; `packages`, `tests`, `examples` | Reutilizar Playwright como componente, no clonar todo el monorepo |
| Analítica de producto | https://github.com/PostHog/posthog | Repo público, licencia detectada como NOASSERTION por GitHub; contiene configuraciones de agentes | Evaluar SDK/servicio y licencias específicas antes de integrar |
| Conexiones con herramientas externas | https://github.com/ComposioHQ/composio | Repo público, MIT; `harness`, `python`, `docs`, `examples` | Reutilizar SDK y autenticación autorizada |

## Skills: ubicación real
- AI Job Search: `.agents/` y `.claude/` (verificar archivos internos antes de ejecutar).
- Firecrawl: `skills/`, `firecrawl-skills/`, `firecrawl-workflows/`.
- Composio: `.agents/`, `.claude/` y `harness/`.
- Playwright: automatización y pruebas existentes; no suponer que cada directorio es una skill instalable.
- PostHog: analítica y SDK; no asumir licencia uniforme de todos sus componentes.

## Aplicación a los seis enlaces
1. Herramientas de agentes: reutilizar Firecrawl, Playwright, PostHog y Composio; Perplexity requiere comprobar API/condiciones por separado.
2. Empleo: reutilizar `ai-job-search` MIT, no reescribir su lógica central.
3. Meta Ads: buscar SDK/API oficial y plantillas existentes; no se identificó un repo específico en el reel.
4. Contenido orgánico: es una metodología, no un repositorio identificado.
5. Claude/YouTube: la portada no identifica un repositorio ni demuestra la cifra publicitaria; pendiente de identificar sistema.
6. Cuatro sistemas IA de @digitalpractico: texto y cinco imágenes recuperadas, pero todavía no se identificaron los cuatro sistemas por nombre.

## Orden de ejecución
1. Inspeccionar documentación y skills de los repositorios originales.
2. Seleccionar componentes mínimos compatibles con el stack de AliceLabs.
3. Crear configuración de integración, sin duplicar motores existentes.
4. Ejecutar tests y controles de seguridad.
5. Desplegar solo tras verificación de secretos, permisos, licencias y flujos reales.

## Alcance verificado
Este es un inventario y plan de reutilización, **no** una afirmación de instalación, ejecución, clonación, despliegue o conexión a cuentas externas.
