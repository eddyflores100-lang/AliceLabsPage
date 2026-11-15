# AliceLabs LLC — Anexo de evidencia de seguridad para inversionistas
Fecha: 2026-11-14 · Versión: 1.0 · Preparado con Seed Skill desde ChatGPT

## Declaración permitida en el pitch
«AliceLabs desarrolla infraestructura para verificar confianza y riesgos de herramientas y agentes de IA. Nuestros repositorios documentan mecanismos de firmas, pruebas de conformidad y una arquitectura de auditoría por capas. Estamos consolidando resultados reproducibles y auditorías automatizadas para sustentar las afirmaciones de seguridad».

**No afirmar** «certificado», «auditado independientemente», «invulnerable» o «avalado por OpenAI, Microsoft o GitHub» sin evidencia documental independiente y verificable.

## Inventario de evidencias y límites
| Activo | Evidencia identificada | Valor para el pitch | Qué falta comprobar |
|---|---|---|---|
| UTA / ATC | README de eddyflores100-lang/universal-trust-adapter describe esquema UTS, vectores de conformidad y firmas | Arquitectura y especificación verificables | Ejecutar corpus, conservar logs, identificar SHA, verificar estado de la versión mantenida en alicelabs-llc |
| MarketNow / Sentinel | README de eddyflores100-lang/marketnow describe pipeline de 10 capas | Diferenciación de producto y controles previstos | Ejecutar tests y evaluación adversarial, demostrar controles efectivos y tasas de falsos positivos |
| Rekor | README UTA declara anclajes de transparencia | Trazabilidad criptográfica potencial | Verificar entradas, firmas, certificados y correspondencia con artefactos publicados |
| GitHub Actions | Repositorios publican referencias a CI y pruebas | Evidencia continua si los logs son públicos y reproducibles | Comprobar estado, SHA, cobertura, fallos y fechas; badges no bastan |
| Revisiones de PRs | Búsquedas iniciales no identificaron un informe formal independiente | Potencial evidencia externa | Revisar autoría, alcance, comentarios, correcciones y aprobación final |

## Protocolo de auditoría con agentes (propuesto; no desplegado por este documento)
1. **Agente inventario**: identifica repositorio, commit SHA, dependencias, superficies y modelo de amenazas.
2. **Agente análisis estático**: ejecuta herramientas SAST, SCA y detección de secretos sobre código autorizado.
3. **Agente MCP/LLM**: comprueba controles de confianza, validación de entradas, separación de instrucciones y permisos en pruebas aisladas.
4. **Agente verificador**: reproduce cada hallazgo en entorno controlado, descarta falsos positivos y comprueba correcciones.
5. **Agente reportero**: publica reporte firmado con SHA, alcance, fecha, comandos, resultados, severidad, estado de remediación y límites.

No otorgar acceso a secretos de producción a agentes de auditoría. Ejecutar pruebas dinámicas solo en entornos propios/autorizados. Mantener aprobación humana para cambios sensibles.

## Evidencia mínima por auditoría
- Repositorio y commit exacto; versión y fecha UTC.
- Herramientas/modelos y versiones; políticas de acceso y aislamiento.
- Pruebas y comandos reproducibles; artefactos y hashes.
- Hallazgos confirmados, severidad, remediación y re-test.
- Límites de cobertura y riesgos residuales.
- Diferenciar claramente auditoría automatizada interna de evaluación independiente.

## Enlaces base
- https://github.com/eddyflores100-lang/marketnow
- https://github.com/eddyflores100-lang/universal-trust-adapter
- https://github.com/eddyflores100-lang/atc-verifier
- https://github.com/eddyflores100-lang/OpenGravity
- https://github.com/eddyflores100-lang/AliceLabsPage

## Texto breve para diapositiva de seguridad
**Security by verifiable evidence.** Arquitectura de auditoría por capas, interoperabilidad de credenciales de confianza y pruebas criptográficas documentadas. Validación continua y reportes reproducibles en desarrollo. **No constituye certificación externa.**

## Próximos hitos
- Verificar versiones oficiales y repositorios migrados.
- Recopilar y comprobar ejecuciones de CI y artefactos de conformidad.
- Implantar pipeline de auditoría automatizada y publicar reportes con commit SHA.
- Auditar PRs de terceros y clasificar el grado de independencia de cada revisión.
