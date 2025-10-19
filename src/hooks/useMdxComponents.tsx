import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import { cn } from '@/src/utils/classNames';
import Link from 'next/link';

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          'text-4xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          'text-3xl font-semibold tracking-tight mb-4 mt-8 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          'text-2xl font-semibold tracking-tight mb-3 mt-6 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          'text-xl font-semibold tracking-tight mb-2 mt-4 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          'text-lg font-semibold tracking-tight mb-2 mt-3 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          'text-base font-semibold tracking-tight mb-2 mt-3 text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),

    p: ({ className, ...props }) => (
      <p
        className={cn(
          'text-gray-700 dark:text-gray-300 leading-7 mb-4',
          className,
        )}
        {...props}
      />
    ),

    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          'list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300',
          className,
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          'list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300',
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('leading-7', className)} {...props} />
    ),

    a: ({ className, ...props }) => (
      <Link
        className={cn(
          `text-indigo-600 dark:text-indigo-400 hover:text-indigo-800
          dark:hover:text-indigo-300 underline underline-offset-4 transition-colors`,
          className,
        )}
        {...props}
      />
    ),

    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          'bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-2xl p-6 mb-6 overflow-x-auto text-sm',
          'border border-gray-200 dark:border-gray-800',
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded px-2 py-1 text-sm font-mono',
          className,
        )}
        {...props}
      />
    ),

    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          'mt-6 border-l-2 border-gray-300 dark:border-gray-700 pl-6 italic text-gray-700 dark:text-gray-300',
          className,
        )}
        {...props}
      />
    ),

    table: ({ className, ...props }) => (
      <div className="mb-6 overflow-x-auto">
        <table
          className={cn(
            'w-full border-collapse border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden',
            className,
          )}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead
        className={cn('bg-gray-50 dark:bg-gray-900', className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          `border border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900
          dark:text-gray-100`,
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          'border border-gray-200 dark:border-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300',
          className,
        )}
        {...props}
      />
    ),

    img: ({ className, ...props }) => (
      <Image
        className={cn(
          'rounded-2xl mb-6 shadow-sm border border-gray-200 dark:border-gray-800',
          className,
        )}
        {...props}
      />
    ),

    hr: ({ className, ...props }) => (
      <hr
        className={cn('border-gray-200 dark:border-gray-800 my-8', className)}
        {...props}
      />
    ),

    strong: ({ className, ...props }) => (
      <strong
        className={cn(
          'font-semibold text-gray-900 dark:text-gray-100',
          className,
        )}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em
        className={cn('italic text-gray-700 dark:text-gray-300', className)}
        {...props}
      />
    ),

    ...components,
  };
};

export { useMDXComponents };
