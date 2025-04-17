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
        title: `adityakx.co`,
        description: `I’m Aditya K, an AI Solutions Architect building scalable AI systems and automation solutions—discover my projects like Sweat, insights on AI agents, and hire me for freelancing or consultancy.`,
        headline: <>I design AI-powered systems that just work</>,
        subline: <>Leveraging Technology to Solve Real-World Problems Thoughtfully</>
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
                    company: 'TaskHuman India',
                    timeframe: "2022 - 2025",
                    role: "Data Scientist and Architect",
                    achievements: [
                        "AI Concierge (In Progress): Currently building an AI agent using state machines to manage conversational user requests efficiently.",
                        "Search System: Designed and implemented a search system powered by Elasticsearch and sentence embeddings, enabling semantic similarity to deliver relevant results for freeform user queries",
                        "Streamlined releases by integrating Poetry for dependency management and developing a custom CLI tool to automate image pushes to AWS ECR, simplifying the process for the team",
                        "Redeployed the data science architecture on AWS ECS, containerizing APIs and introducing Infrastructure as Code (IaC) using AWS CDK in Python.",
                        "Enhanced coding standards with Slack alerts, proper logging, and Makefile usage; developed sentiment analysis tools and custom automation scripts to support team workflows.",
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
                    role: "Software Engineer",
                    achievements: [
                        "Contributed to security compliance by encrypting all traffic and securing APIs behind authentication layers.",
                        "Improved application performance by 40%",
                        "Improved code quality by adopting a modular architecture (e.g., MVC) and reducing redundancy through an in-house, installable Python library shared across APIs"
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
                    role: "Software Engineer",
                    achievements: [
                        "Developed diagnostic tools",
                        "Implemented telemedicine features",
                        "Optimized data processing pipelines"
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
                    role: "Software Engineer",
                    achievements: [
                        "Built enterprise solutions",
                        "Built deep learning models to detect and summarize car damage (e.g., dents, scratches, broken parts) from images.",
                        "Developed classical machine learning models to identify employees at risk of attrition, supporting HR decision-making.",
                        "Developed app using pytesseract to extract text from images."
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
                    title: 'Python',
                    description: <>Expert in building scalable AI systems, automating workflows, and creating data-driven solutions</>,
                    files: [],
                    images: [
                        // {
                        //     src: '/images/projects/project-01/cover-04.jpg',
                        //     alt: 'Project image',
                        //     width: 16,
                        //     height: 9
                        // },
                    ]
                },
                {
                    title: 'AI & Machine Learning',
                    description: <>Designs intelligent systems through finetuning, evaluations, and hybrid search, enabling advanced search capabilities, intuitive user experiences, and conversational AI agents.</>,
                    files: [],
                    images: []
                },
                {
                    title: 'Cloud & DevOps',
                    description: <>Orchestrates scalable deployments on AWS (ECS, ECR, CDK), leveraging Docker and Infrastructure as Code to build resilient, automated cloud architectures.</>,
                    files: [],
                    images: []
                },
                {
                    title: 'Architecture & Design',
                    description: <>Crafts modular architectures (MVC), state machines, and APIs to ensure scalability, maintainability, and efficiency in AI-driven solutions.</>,
                    files: [],
                    images: []
                },
                {
                    title: 'Automation & Tools',
                    description: <>Streamlines development pipelines using dependency management tools like uv and Poetry, custom CLI tools, Makefiles, Slack alerts, advanced logging, and microservices to boost team productivity and operational excellence.</>,
                    files: [],
                    images: []
                },
                {
                    title: 'Data & Analysis',
                    description: <>Harnesses Elasticsearch, sentiment analysis, and computer vision to deliver data-driven solutions that enhance search accuracy and uncover insights.</>,
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