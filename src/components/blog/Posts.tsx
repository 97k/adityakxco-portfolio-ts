import { getPosts } from '@/app/utils/utils';
import { Grid } from '@/once-ui/components';
import Post from './Post';

interface BlogPost {
    slug: string;
    content: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
    };
}

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
}

export interface PostProps {
    post: BlogPost;
    thumbnail?: boolean;
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false
}: PostsProps) {
    const allBlogs = getPosts(['src', 'app', 'blog', 'posts', 'content']) as BlogPost[];

    const sortedBlogs = allBlogs.sort((a: BlogPost, b: BlogPost) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={`repeat(${columns}, 1fr)`} mobileColumns="1col"
                    fillWidth marginBottom="40" gap="m">
                    {displayedBlogs.map((post: BlogPost) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}