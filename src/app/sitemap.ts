import { getPosts } from '@/app/utils/utils'
import { baseURL } from '@/app/resources'

export default async function sitemap() {
    const blogs = getPosts(['src', 'app', 'blog', 'posts', 'content']).map((post) => ({
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    const works = getPosts(['src', 'app', 'work', 'projects', 'content']).map((post) => ({
        url: `${baseURL}/work/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    const routes = ['', '/blog', '/work'].map((route) => ({
        url: `${baseURL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...blogs, ...works]
}