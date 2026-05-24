import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  return rss({
    title: 'drinkcode',
    description: '개발 기록 블로그',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.created.valueOf() - a.data.created.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.created,
        link: `/${post.data.urlPath}`,
        categories: post.data.tags,
      })),
  });
}
