import type { FC } from 'react';

import { notFound } from 'next/navigation';

import { getPostBySlug, getPostSlugs } from '@/src/utils/blog';
import BlogPost from '@/src/components/blog/BlogPost';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
};

const generateStaticParams = () => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

const BlogPostPage: FC<BlogPostPageProps> = async ({ params }) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      content={post.content}
      tags={post.tags}
    />
  );
};

export default BlogPostPage;
export { generateStaticParams };
