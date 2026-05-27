import { FaServer } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { AiOutlineCloud } from 'react-icons/ai'
import { MdHomeRepairService } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'

const data = [
    {
        id: 1,
        icon: <FaServer/>,
        title: 'Backend Engineering',
        desc: "Designing and building scalable microservices, REST APIs, and event-driven systems. Specialised in ACID-compliant transaction handling, distributed systems, and production-grade reliability with circuit breakers and fault-tolerance patterns."
    },
    {
        id: 2,
        icon: <RiReactjsLine/>,
        title: 'Full Stack Development',
        desc: "End-to-end product delivery from React and Next.js frontends through to NestJS, Spring Boot, and Node.js backends — covering data modelling, API design, and deployment across the full software development lifecycle."
    },
    {
        id: 3,
        icon: <AiOutlineCloud/>,
        title: 'Cloud & DevOps',
        desc: "Cloud-native infrastructure on AWS and GCP using Docker, Kubernetes, Terraform, and CI/CD pipelines. Prometheus and Grafana for observability and monitoring. On-call incident response and production operations."
    },
    {
        id: 4,
        icon: <MdHomeRepairService/>,
        title: 'System Design & Architecture',
        desc: "Translating business requirements into clean, maintainable architecture — clean architecture principles, event-driven patterns, microservices design, technical documentation, and cross-functional delivery leadership."
    },
    {
        id: 5,
        icon: <BiBrain/>,
        title: 'AI/ML Engineering',
        desc: "Building production AI systems — RAG pipelines with LangChain, OpenAI, and Pinecone, LLM orchestration and benchmarking infrastructure, and ML model integration (Scikit-Learn, XGBoost) for real-time decision-making. Bridging backend engineering with intelligent productionisation at scale."
    }
]

export default data;
