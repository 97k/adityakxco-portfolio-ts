import { InlineCode } from "@/once-ui/components";

const createContent = () => {
    const person = {
        firstName: 'Aditya',
        lastName: 'K',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role: "Software Engineer",
        avatar: '/images/avatar.jpg',
        location: 'Asia/Kolkata',
        languages: ['English', 'Hindi']
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
            link: 'https://x.com/think_ad',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:97k.work@gmail.com',
        },
    ]

    const home = {
        label: "Home",
        title: `Hi, I&apos;m ${person.name}`,
        description: `I&apos;m a ${person.role} based in India`,
        headline: <>Building digital products with a focus on user experience</>,
        subline: <>Passionate about creating intuitive and impactful solutions</>
    }

    const about = {
        label: "About",
        title: "About",
        description: `I&apos;m ${person.name}, a ${person.role} based in ${person.location}`,
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
            description: <>I&apos;m a software engineer with a passion for building great products. I focus on creating intuitive user experiences and scalable solutions.</>
        },
        work: {
            display: true,
            title: "Work Experience",
            experiences: [
                {
                    company: 'TaskHuman',
                    timeframe: "2022 - Present",
                    role: "Senior Software Engineer",
                    achievements: [
                        "Led development of key platform features",
                        "Improved application performance by 40%",
                        "Implemented real-time communication features"
                    ],
                    images: [
                        {
                            src: '/images/projects/project-01/cover-01.jpg',
                            alt: 'Once UI Project',
                            width: 16,
                            height: 9
                        }
                    ]
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
                    images: []
                },
                {
                    company: 'Celebal Tech',
                    timeframe: "2019 - 2020",
                    role: "Software Engineer",
                    achievements: [
                        "Built enterprise solutions",
                        "Implemented cloud infrastructure",
                        "Developed data analytics tools"
                    ],
                    images: []
                }
            ]
        },
        technical: {
            display: true,
            title: "Technical Skills",
            skills: [
                {
                    title: 'Next.js',
                    description: <>Expert in building modern web applications with Next.js, focusing on performance and SEO</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                }
            ]
        },
        studies: {
            display: true,
            title: "Education",
            institutions: [
                {
                    name: "Jaipur Engineering College and Research Centre",
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
        description: `Articles and thoughts by ${person.name}`
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