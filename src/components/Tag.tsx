import { type FC } from 'react';

type TAG_VARIANT = 'BLUE' | 'GRAY';

type TagProps = {
  content: string
  variant?: TAG_VARIANT
};

const Tag: FC<Readonly<TagProps>> = ({ content, variant = 'BLUE' }) => (
  <span
    className={`${
      variant === 'BLUE'
        ? `border-1 border-indigo-300 bg-indigo-100 text-indigo-400 dark:border-indigo-600 dark:bg-indigo-900
        dark:text-indigo-300`
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
    } text-xs rounded-full py-1 px-2`}
  >
    {content}
  </span>
);

export default Tag;
