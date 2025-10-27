import { InlineCode } from "@/once-ui/components";

const createContent = () => {
    const person = {
        firstName: 'Aditya',
        lastName: 'K',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role: "AI Solutions Architect",
        avatar: '/images/avatar.jpg',
        location: 'Asia/Kolkata',
        languages: []
    }

    const newsletter = {
        display: true,
        title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
        description: <>Get notified when I publish new content. No spam, unsubscribe at any time.</>
    }

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/97k',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/adityakxco/',
        },
        {
            name: 'X',
            icon: 'x',
            link: 'https://x.com/adityakxco',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:97k.work@gmail.com',
        },
    ]

    const home = {
        label: "Home",
        title: `adityak 🧑‍💻`,
        description: `I’m Aditya, software engineer at core with six years of experience delivering production-grade, AI-driven applications. Welcome to my digital garden, here I write for fun and hire me for freelancing or consultancy.`,
        headline: <>I design AI-powered systems that just work</>,
        subline: <>Leveraging Technology to Solve Business Problems Thoughtfully</>
    }

    const about = {
        label: "About",
        title: "About",
        description: `I&apos;m ${person.name}, an ${person.role} based in ${person.location}`,
        // description: <>I believes in the power of simplicity. My passion is building AI that works for people, not just algorithms.</>,
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com/adityakxco'
        },
        intro: {
            display: true,
            title: "Introduction",
            description: <>I believe in the power of simplicity. My passion is building AI that works for people, not just algorithms.</>
        },
        work: {
            display: true,
            title: "Work Experience",
            experiences: [
                {
                    company: 'TaskHuman',
                    timeframe: "2022 - 2025",
                    role: "Data Scientist and Architect",
                    achievements: [
                        "Architected and deployed an agentic AI concierge (Burr + Haystack + vector DB) to automate 60% of customer queries, enabling near-instant responses and reducing annual support costs by >$10k.",
                        "Fine-tuned a custom sentence-embedding model using domain-specific examples (logs, manual dataset), improved search relevance by∼40% and outperforming generic models.",
                        "Engineered a hybrid retrieval stack (BM25 + dense vectors + API + DB) to improve top-5 result relevance and engagement metrics, slashing zero-result queries by ∼80%.",
                        "Automated AI regression testing by integrating a multi-stage evaluation framework into the CI/CD pipeline, which validates agentic workflows for tool correctness and response quality using LLM-as-a-Judge and ground-truth comparisons.",
                        "Designed and implemented Data Science CI/CD using Terraform & GithubActions; reduced pipeline build time from 15→2 minutes (-87%) & saved >20 developer-hours/week through automation and caching."
                    ],
                    images: [
                        // {
                        //     src: '/images/projects/project-01/cover-01.jpg',
                        //     alt: 'Once UI Project',
                        //     width: 16,
                        //     height: 9
                        // }
                    ],
                    files: []
                },
                {
                    company: 'MoreYeahs',
                    timeframe: "2021 - 2022",
                    role: "Data Scientist I",
                    achievements: [
                        "Pioneered the company’s first semantic search (Sentence Encoder) engine, replacing a legacy keyword system to improve search slashing zero-result queries by∼80%.",
                        "Authored a proprietary Python library from scratch that standardized ETL, featurization, and model interfaces; integrated into 3 internal product APIs and shortened time-to-production for new features by∼ 25%.",
                        "Engineered key security controls for SOC2 compliance, implementing API-level JWT authentication and enforcing traffic encryption (SSL/TLS) to pass all technical security audits",
                    ],
                    images: []
                    //     {
                    //         src: '/images/projects/project-01/cover-01.jpg',
                    //         alt: 'Once UI Project',
                    //         width: 16,
                    //         height: 9
                    //     }
                    // ]
                },
                {
                    company: 'NeuroEquilibrium',
                    timeframe: "2020 - 2022",
                    role: "Machine Learning Engineer",
                    achievements: [
                        "Engineered a marker-less human Gait Test (Detectron2) for the detection of neurological disorder, validated on 50 patients, achieving 95% detection accuracy and enabling a new diagnostic product.",
                        "Developed a serverless GCP backend (Cloud Functions/Run + Pub/Sub + BigQuery + CloudStorage) handling 1,000s of daily assessments from 700+ clinics in India, reducing infrastructure costs by 40%.",
                    ],
                    files: [
                        {
                            name: "Diagnostic Report Sample",
                            path: "/files/workex_neuro_report.pdf",
                            type: "pdf"
                        }
                    ],
                    images: []
                },
                {
                    company: 'Celebal Tech',
                    timeframe: "2019 - 2020",
                    role: "Associate Data Scientist",
                    achievements: [
                        "Architected a YOLO CV pipeline for car part identification & damage classification, automating 80% of manual classification and reducing claims processing time.",
                        "Contributed to an HR analytics project by engineering a predictive model to identify employees at risk of attrition.",
                    ],
                    images: [],
                    files: []
                },
                {
                    company: 'Fossasia',
                    timeframe: "2017 - 2018",
                    role: "Open Source Contributor",
                    achievements: [
                        "Contributed to the development of the Phimpme photo editor Android app.",
                        "Participated in discussions and promoted open source projects in college events.",
                    ],
                    images: [
                        {
                            src: '/images/workex/fossasia_1.jpg',
                            alt: 'Fun chat with Fossasia people',
                            width: 16,
                            height: 9
                        }
                    ],
                    files: []
                }
            ]
        },
        technical: {
            display: true,
            title: "Technical Skills",
            skills: [
                {
                    title: "Python",
                    description: <>Expert in Python for production-grade AI, from authoring proprietary libraries and standardizing ETL to building serverless backends and robust APIs (FastAPI, Pydantic).</>,
                  "files": [],
                    images: []
                },
                {
                    title: "AI & Machine Learning",
                    description: <>Building and deploying end-to-end AI systems, including RAG-based agentic AI (Burr, Haystack), custom-tuned embedding models, and hybrid search (BM25 + dense) to drive measurable lifts in relevance.</>,
                    files: [],
                    images: []
                },
                {
                  "title": "Cloud & DevOps (MLOps)",
                  "description": <>Architecting multi-cloud (AWS, GCP, Azure) MLOps pipelines using IaC (Terraform, CDK) and CI/CD (GitHub Actions) to automate builds, slashing deployment times by 85%+ and saving developer hours.</>,
                    files: [],
                    images: []
                },
                {
                    title: "AI System Architecture",
                    description: <>Designing production-grade AI system architectures, including distributed retrieval stacks (Vector DBs, Elasticsearch), agentic workflows (Haystack), and scalable, serverless microservices.</>,
                    files: [],
                    images: []
                },
                {
                  "title": "Automation & Tooling",
                    description: <>Boosting team productivity by streamlining development pipelines with custom libraries, Makefiles, advanced logging, and automated Slack alerts, saving 20+ developer-hours weekly.</>,
                    files: [],
                    images: []
                },
                {
                  "title": "Data, CV & Evaluation",
                    description: <>Leveraging Computer Vision (YOLO, Detectron2) for diagnostic products and implementing rigorous, multi-stage evaluation frameworks (LLM-as-a-Judge, A/B testing) to validate and measurably improve AI model performance.</>,
                    files: [],
                    images: []
                }
            ]
        },
        studies: {
            display: true,
            title: "Education",
            institutions: [
                {
                    name: "JECRC, Jaipur",
                    description: "Bachelor of Technology in Computer Science (2016-2020)",
                },
                {
                    name: "St. Edmund's School",
                    description: "High School, Science with Maths (2014-2016)",
                }
            ]
        },
    }

    const blog = {
        label: "Blog",
        title: "Blog Posts",
        description: `Discover my latest experiments, fun lessons, and insights from building in public—where I share the highs, lows, and everything I learn along the way.`
    }

    const work = {
        label: "Work",
        title: "Projects",
        description: `Selected projects by ${person.name}`
    }

    return {
        person,
        newsletter,
        social,
        home,
        about,
        blog,
        work
    }
}

export const renderContent = () => createContent();