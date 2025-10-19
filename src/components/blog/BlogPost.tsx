import Link from 'next/link';
import type { FC } from 'react';
import Tag from '../Tag';
import { useMDXComponents } from '@/src/hooks/useMdxComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';

type BlogPostProps = {
  title: string
  date: string
  content: string
  tags?: string[]
};

const BlogPost: FC<BlogPostProps> = ({ title, date, content, tags }) => {
  const components = useMDXComponents({});

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 transition-colors"
        >
          Retourner à la liste
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <time className="text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            {new Date(date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} content={tag} variant="GRAY" />
              ))}
            </div>
          )}
        </div>
      </div>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
};

export default BlogPost;
