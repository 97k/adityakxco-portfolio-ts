import { Avatar, Button, Flex, Heading, Icon, IconButton, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss'
import FileDisplay from '@/components/FileDisplay';
import ImageDisplay from '@/components/ImageDisplay';
import { AboutContent } from '@/types/content';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    // const t = await getTranslations();
    const {person, about, social } = renderContent();
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/blog`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function About(
    { params: {locale}}: { params: { locale: string }}
) {
    const {person, about, social } = renderContent();
    const aboutContent = about as AboutContent;
    
    const structure = [
        { 
            title: aboutContent.intro.title,
            display: aboutContent.intro.display,
            items: []
        },
        { 
            title: aboutContent.work.title,
            display: aboutContent.work.display,
            items: aboutContent.work.experiences.map(experience => experience.company)
        },
        { 
            title: aboutContent.studies.title,
            display: aboutContent.studies.display,
            items: aboutContent.studies.institutions.map(institution => institution.name)
        },
        { 
            title: aboutContent.technical.title,
            display: aboutContent.technical.display,
            items: aboutContent.technical.skills.map(skill => skill.title)
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: aboutContent.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: aboutContent.work.experiences[0]?.company || ''
                        },
                    }),
                }}
            />
            { aboutContent.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={aboutContent} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                <Flex
                    className={styles.blockAlign}
                    fillWidth maxWidth={40} direction="column">
                    <Flex
                        id={aboutContent.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        {aboutContent.calendar.display && (
                            <Flex
                                className={styles.blockAlign}
                                style={{
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    border: '1px solid var(--brand-alpha-medium)',
                                    width: 'fit-content'
                                }}
                                alpha="brand-weak" radius="full"
                                fillWidth padding="4" gap="8" marginBottom="m"
                                alignItems="center">
                                <Flex paddingLeft="12">
                                    <Icon
                                        name="calendar"
                                        onBackground="brand-weak"/>
                                </Flex>
                                <Flex
                                    paddingX="8">
                                    Schedule a call
                                </Flex>
                                <IconButton
                                    href={aboutContent.calendar.link}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronRight"/>
                            </Flex>
                        )}
                        
                        <Flex
                            fillWidth
                            justifyContent="space-between"
                            alignItems="flex-start"
                            wrap
                            gap="16">
                            <Flex
                                direction="column"
                                gap="8">
                                <Heading
                                    className={styles.textAlign}
                                    variant="display-strong-xl">
                                    {person.name}
                                </Heading>
                                <Text
                                    className={styles.textAlign}
                                    variant="display-default-xs"
                                    onBackground="neutral-weak">
                                    {person.role}
                                </Text>
                                
                                {social.length > 0 && (
                                    <Flex
                                        className={styles.blockAlign}
                                        paddingTop="12" gap="8" wrap>
                                        {social.map((item) => (
                                            item.link && (
                                                <Button
                                                    key={item.name}
                                                    href={item.link}
                                                    prefixIcon={item.icon}
                                                    label={item.name}
                                                    size="s"
                                                    variant="tertiary"/>
                                            )
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                            
                            {aboutContent.avatar.display && (
                                <Flex
                                    direction="column" gap="12" alignItems="center">
                                    <Avatar
                                        src={person.avatar}
                                        size="xl"/>
                                    <Flex
                                        gap="8"
                                        alignItems="center">
                                        <Icon
                                            onBackground="accent-weak"
                                            name="globe"/>
                                        {person.location}
                                    </Flex>
                                    {person.languages.length > 0 && (
                                        <Flex
                                            wrap
                                            gap="8"
                                            justifyContent="center">
                                            {person.languages.map((language, index) => (
                                                <Tag
                                                    key={index}
                                                    size="l">
                                                    {language}
                                                </Tag>
                                            ))}
                                        </Flex>
                                    )}
                                </Flex>
                            )}
                        </Flex>
                    </Flex>

                    { aboutContent.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {aboutContent.intro.description}
                        </Flex>
                    )}

                    { aboutContent.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={aboutContent.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {aboutContent.work.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {aboutContent.work.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${experience.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex
                                            as="ul"
                                            direction="column" gap="16">
                                            {experience.achievements.map((achievement, index) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {experience.files && (
                                            <FileDisplay files={experience.files} title="Related Documents" />
                                        )}
                                        {experience.images.length > 0 && (
                                            <ImageDisplay images={experience.images} paddingLeft="40" />
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    { aboutContent.studies.display && (
                        <>
                            <Heading
                                as="h2"
                                id={aboutContent.studies.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {aboutContent.studies.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l" marginBottom="40">
                                {aboutContent.studies.institutions.map((institution, index) => (
                                    <Flex
                                        key={`${institution.name}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            id={institution.name}
                                            variant="heading-strong-l">
                                            {institution.name}
                                        </Text>
                                        <Text
                                            variant="heading-default-xs"
                                            onBackground="neutral-weak">
                                            {institution.description}
                                        </Text>
                                        {institution.files && (
                                            <FileDisplay files={institution.files} title="Academic Documents" />
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    { aboutContent.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={aboutContent.technical.title}
                                variant="display-strong-s" marginBottom="40">
                                {aboutContent.technical.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l">
                                {aboutContent.technical.skills.map((skill, index) => (
                                    <Flex
                                        key={`${skill.title}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            variant="heading-strong-l">
                                            {skill.title}
                                        </Text>
                                        <Text
                                            variant="body-default-m"
                                            onBackground="neutral-weak">
                                            {skill.description}
                                        </Text>
                                        {skill.files && (
                                            <FileDisplay files={skill.files} title="Technical Resources" />
                                        )}
                                        {skill.images.length > 0 && (
                                            <ImageDisplay images={skill.images} />
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}