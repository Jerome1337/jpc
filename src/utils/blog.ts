import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  keywords: string[]
  content: string
  published: boolean
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
};

type BlogPostMetadata = Omit<BlogPost, 'content'>;

const postsDirectory = join(process.cwd(), 'src/content/blog');

const getPostSlugs = (): string[] => {
  try {
    return readdirSync(postsDirectory)
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
};

const getPostBySlug = (slug: string): BlogPost | null => {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug: realSlug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      tags: data.tags || [],
      keywords: data.keywords || [],
      published: data.published !== false,
      content,
      readingTime: stats,
    };
  } catch {
    return null;
  }
};

const getAllPosts = (): BlogPost[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost =>
      post?.published ? post.published : false)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};

const getPostsMeta = (): BlogPostMetadata[] => {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    keywords: post.keywords,
    published: post.published,
    readingTime: post.readingTime,
  }));
};

export { getPostSlugs, getPostBySlug, getAllPosts, getPostsMeta };

export type { BlogPost, BlogPostMetadata };
