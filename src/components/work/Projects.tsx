import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/components';

interface TeamMember {
    avatar: string;
    name: string;
}

interface Project {
    slug: string;
    content: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        images: string[];
        image?: string;
        team?: TeamMember[];
        label?: string;
    };
}

interface Avatar {
    src: string;
}

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    description: string;
    content: string;
    avatars: Avatar[];
    label: string;
}

interface ProjectsProps {
    range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
    const allProjects = getPosts(['src', 'app', 'work', 'projects', 'content']) as Project[];

    const sortedProjects = allProjects.sort((a: Project, b: Project) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((project: Project) => (
                <ProjectCard
                    key={project.slug}
                    href={`work/${project.slug}`}
                    images={project.metadata.images}
                    title={project.metadata.title}
                    description={project.metadata.summary}
                    content={project.content}
                    label={project.metadata.label || "Read Case Study"}
                    avatars={project.metadata.team?.map((member: TeamMember) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
    );
}