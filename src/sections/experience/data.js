const data = [
    {
        id: 1,
        role: "Senior Platform Engineer",
        company: "Bespoke Labs",
        location: "California, United States",
        period: "02/2026 – Present",
        bullets: [
            "Design and operate Kubernetes-based infrastructure for large-scale LLM benchmarking and AI evaluation workflows across high-throughput distributed environments.",
            "Own CI/CD automation, observability tooling (Prometheus, Grafana), and deployment reliability — reducing environment drift and improving deployment consistency.",
            "Act as technical point of contact for incident resolution, applying systematic root cause analysis to maintain platform health and minimise downtime."
        ],
        stack: ["Kubernetes", "Python", "Prometheus", "Grafana", "CI/CD", "AWS", "Docker"]
    },
    {
        id: 2,
        role: "Senior Software Engineer",
        company: "Andela",
        location: "New York, United States",
        period: "02/2025 – Present",
        bullets: [
            "Lead full-stack engineering for global client platforms supporting 10k+ active users — covering design, implementation, testing, deployment, and production support.",
            "Reduced average API request latency by 25% and cut production incidents by ~30% through backend optimisation and architectural refactoring.",
            "Drive delivery with user story writing, backlog management, sprint planning, and acceptance criteria — coordinating across product, design, and engineering."
        ],
        stack: ["Java", "Python", "NestJS", "TypeScript", "React", "Node.js", "AWS", "Docker", "GCP", "Jira", "Confluence", "Figma"]
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "Stax — Karabo Fintech",
        location: "Lagos, Nigeria",
        period: "02/2022 – 10/2025",
        bullets: [
            "Built a double-entry wallet and ledger system using Spring Boot and PostgreSQL — ACID-compliant processing of 100k+ monthly transactions at under 200ms response time.",
            "Engineered a dynamic payment routing engine cutting processing latency by 30%, with Resilience4j circuit breakers achieving 99.9% payment success rate and uptime.",
            "Developed React-based internal dashboards for real-time transaction monitoring and automated reconciliation jobs for financial auditability."
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Resilience4j", "Docker", "AWS", "Swagger", "Linear", "GitHub"]
    },
    {
        id: 4,
        role: "Software Engineer",
        company: "Reliance Health",
        location: "Lagos, Nigeria",
        period: "01/2019 – 01/2022",
        bullets: [
            "Designed APIs and microservices for telemedicine, EHR, and patient management serving 50k+ active patients across Africa with 99.9% platform uptime.",
            "Built HIPAA-compliant data flows across relational and NoSQL databases — reducing consultation scheduling errors by 25% through precise validation and error handling.",
            "Integrated payment gateways and insurance claims systems, cutting reimbursement delays by 30% and enabling data-driven improvements via monitoring pipelines."
        ],
        stack: ["Java", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS", "Python", "Docker"]
    }
]

export default data
