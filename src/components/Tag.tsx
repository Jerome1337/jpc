import { type FC } from 'react';

type TagProps = {
  content: string
};

const Tag: FC<Readonly<TagProps>> = ({ content }) => (
  <span className="border-1 border-indigo-300 bg-indigo-100 text-indigo-400 dark:border-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 text-xs rounded-full py-1 px-2">
    {content}
  </span>
);

export default Tag;
