import type { FC } from 'react';
import Tag from '../Tag';
import type { BlogPost } from '@/src/utils/blog';
import Link from 'next/link';

type BlogListProps = {
  posts: BlogPost[]
};

const BlogList: FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Idées, tutoriels et aperçus sur le développement en tout genre.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <time className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag} variant="GRAY" content={tag} />
                  ))}
                </div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
            >
              En lire plus
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
