import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });
  
  return rss({
    title: 'MDMY Blog',
    description: 'Articles, tutorials, and insights on technology, design, and digital innovation.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...(post.data.heroImage && { image: post.data.heroImage }),
    })),
    customData: `<language>en-us</language>`,
  });
}