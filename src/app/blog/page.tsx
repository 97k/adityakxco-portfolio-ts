import { Flex, Heading, Text } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL, renderContent } from '@/app/resources'
import { SmartLink } from '@/once-ui/components/SmartLink';

export async function generateMetadata() {
	const { blog } = renderContent();

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
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

export default function Blog() {
	const { person, blog, newsletter } = renderContent();
	return (
		<Flex
			fillWidth maxWidth="s"
			direction="column">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
						author: {
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
			<Heading
				marginBottom="l"
				variant="display-strong-s">
				{blog.title}
			</Heading>
			<Flex
				fillWidth flex={1} direction="column">
				<Posts range={[1,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Flex>
			{/* Newsletter section commented out for future use
			{newsletter.display && (
				<Mailchimp newsletter={newsletter} />
			)} */}
			<Flex 
				direction="column" 
				alignItems="center" 
				gap="12" 
				marginTop="xl"
				style={{
					borderTop: '1px solid var(--color-border-neutral-weak)',
					paddingTop: 'var(--space-xl)'
				}}>
				<Text variant="heading-default-s">
					I am active on 𝕏, let's connect!👋
				</Text>
				<SmartLink
					href="https://twitter.com/adityakxco"
					target="_blank"
					rel="noopener noreferrer">
					Follow @adityakxco
				</SmartLink>
			</Flex>
		</Flex>
	);
}