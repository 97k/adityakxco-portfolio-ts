import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';

export async function generateMetadata(
	{}: { params: { locale: string }}
) {
    const { home } = renderContent();
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}`,
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

export default function Home() {
    const { home, about, person, newsletter } = renderContent();
    return (
        <Flex
            maxWidth="m" fillWidth gap="xl"
            direction="column" alignItems="center">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title,
                        description: home.description,
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />
            <Flex
                fillWidth
                direction="column"
                paddingY="l" gap="m">
                    <Flex
                        direction="column"
                        fillWidth maxWidth="s" gap="m">
                        <RevealFx
                            translateY="4">
                            <Heading
                                wrap="balance"
                                variant="display-strong-l">
                                {home.headline}
                            </Heading>
                        </RevealFx>
                        <RevealFx
                            translateY="8" delay={0.2}>
                            <Flex fillWidth>
                                <Text
                                    wrap="balance"
                                    onBackground="neutral-weak"
                                    variant="heading-default-xl">
                                    {home.subline}
                                </Text>
                            </Flex>
                        </RevealFx>
                        <RevealFx translateY="12" delay={0.4}>
                            <Flex fillWidth>
                                <Button
                                    id="about"
                                    data-border="rounded"
                                    href="/about"
                                    variant="tertiary"
                                    size="m">
                                    <Flex
                                        gap="8"
                                        alignItems="center">
                                        {about.avatar.display && (
                                            <Avatar
                                                style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
                                                src={person.avatar}
                                                size="m"/>
                                            )}
                                            About
                                            <Arrow trigger="#about"/>
                                    </Flex>
                                </Button>
                            </Flex>
                        </RevealFx>
                    </Flex>
                
            </Flex>
            <RevealFx translateY="16" delay={0.6}>
                <Projects range={[1,1]}/>
            </RevealFx>
            {routes['/blog'] && (
                <Flex
                    fillWidth gap="24"
                    mobileDirection="column">
                    <Flex flex={1} paddingLeft="l">
                        <Heading
                            as="h2"
                            variant="display-strong-xs"
                            wrap="balance">
                            Latest from the blog
                        </Heading>
                    </Flex>
                    <Flex
                        flex={3} paddingX="20">
                        <Posts range={[1,2]} columns="2"/>
                    </Flex>
                </Flex>
            )}
            <Projects range={[2]}/>
            {/* Newsletter section commented out for future use
            { newsletter.display &&
                <Mailchimp newsletter={newsletter} />
            } */}
            <Flex 
                direction="column" 
                alignItems="center" 
                gap="12" 
                marginTop="xl"
                style={{
                    borderTop: '1px solid var(--color-border-neutral-weak)',
                    paddingTop: 'var(--space-xl)',
                    maxWidth: '600px',
                    textAlign: 'center'
                }}>
                <Text variant="heading-default-s">
                    Fun fact: I believe in the power of simplicity, both in code and life! 🌟
                </Text>
                <Text 
                    variant="body-default-m"
                    onBackground="neutral-weak">
                    What's your approach to problem-solving? Let's chat about it on 𝕏!
                </Text>
                <Button
                    href="https://twitter.com/adityakxco"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="tertiary"
                    size="m"
                    prefixIcon="twitter">
                    Connect @adityakxco
                </Button>
            </Flex>
        </Flex>
    );
}
