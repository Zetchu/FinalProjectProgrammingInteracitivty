// src/constants/faqs.js
export const FAQ_ITEMS = [
  {
    id: 'pricing',
    questionText: 'How is pricing calculated?',
    anwserText: `Our pricing combines seats and usage so teams can start small and scale predictably. Every plan includes a monthly pool of inference credits that cover prompts, completions, and tool calls. If your team exceeds the pool, overage is billed per 1K tokens at a transparent rate shown on your billing page.

You can mix monthly and annual seats in the same workspace, and reassign seats at any time without penalty. Annual billing includes a discount and locks in rates for 12 months. Usage is pooled across all members, which prevents unexpected spikes from a single user. We also provide soft and hard usage caps, budget alerts, and detailed cost reports by project and environment.

Not sure where to start? Most teams begin with 5–10 seats and the Starter usage tier, then raise limits once they finalize workflows.`,
  },
  {
    id: 'data-privacy',
    questionText: 'Do you train on my data? How is data retained?',
    anwserText: `No—your prompts, files, and outputs are **never** used to train or fine-tune foundation models unless you explicitly opt in to private fine-tuning. By default, data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We support customer-managed keys on Enterprise.

Retention is configurable: choose standard (30 days), short (7 days), or zero-retention processing for sensitive workloads. With zero-retention, payloads are processed ephemerally and not stored in our logs. You can also enable regional data residency to keep content within the EU or US.

Admins can export or purge data by project, user, or time window, and set workspace-wide policies for PII redaction and prompt masking. We sign DPAs and provide SCCs for international transfers.`,
  },
  {
    id: 'security',
    questionText: 'What security and compliance controls are available?',
    anwserText: `We provide SSO/SAML, SCIM user provisioning, granular role-based access control (RBAC), API allowlists, audit logs, and secrets management with rotation reminders. Projects can be isolated by environment (dev/stage/prod) with separate keys and rate limits.

Our platform runs on hardened infrastructure with network segmentation, least-privilege access, automated vulnerability scanning, and continuous monitoring. We undergo regular third-party penetration tests and maintain comprehensive security documentation.

Compliance: we operate under mature controls aligned to SOC 2 Type II, and we support GDPR/UK GDPR obligations with a DPA, SCCs, and data-subject request tooling. On Enterprise, we can review your vendor assessment, provide a shared responsibility matrix, and support custom security requirements.`,
  },
  {
    id: 'integrations',
    questionText: 'What can I integrate with? Do you have SDKs and webhooks?',
    anwserText: `Yes—use our REST API, streaming endpoints over Server-Sent Events or WebSockets, and official SDKs for JavaScript/TypeScript and Python. We ship first-party integrations for Slack (slash commands + bot workflows), GitHub Actions (CI checks, PR assistants), and Zapier (no-code automations).

Webhooks are available for run.status changes, usage events, and content moderation outcomes. You can register multiple endpoints with secret verification and retry policies. For data pipelines, we support batch jobs, file ingestion, and vector store connectors.

Most customers start by wrapping our SDK in their own service layer to centralize logging, retries, and prompt templates. We include examples for React, Next.js, Node, Flask/FastAPI, and queue workers.`,
  },
  {
    id: 'reliability',
    questionText: 'What uptime/SLA and performance should we expect?',
    anwserText: `Our historical uptime is 99.95% with multi-AZ failover and automatic traffic shaping during regional incidents. Business and Enterprise plans include a 99.9% SLA with priority incident updates and a dedicated status page feed.

Performance: typical p95 latency for short generation requests is under 800 ms for prompts <1K tokens. Longer tasks are streamed in chunks so your UI can render partial results immediately. You can pin a specific model version for deterministic behavior, or enable “safe rollback” to revert automatically if a new version underperforms.

We recommend setting client-side timeouts and retries with jitter, and enabling our idempotency keys to avoid duplicate work during transient network issues.`,
  },
];
