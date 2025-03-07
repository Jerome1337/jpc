import { type FC } from 'react';

type TitleProps = {
  title: string
  id?: string
  emoji?: string
};

const Title: FC<Readonly<TitleProps>> = ({ title, id, emoji }) => (
  <h2 id={id} className="text-gray-900 dark:text-gray-100 text-center text-3xl font-bold mb-12">
    {title}
    {emoji && (
      <span className="ml-4" aria-hidden="false">
        {emoji}
      </span>
    )}
  </h2>
);

export default Title;
