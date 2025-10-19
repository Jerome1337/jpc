'use client';

import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Page inconnue 🫣
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        La page que vous recherchez n'existe pas.
      </p>
      <div className="flex gap-5 justify-center items-center">
        <Link
          href="/"
          className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold cursor-pointer text-white
        hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
        dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Retourner à l'accueil
        </Link>
        <Link
          href="/blog"
          className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300 cursor-pointer"
        >
          Voir le blog
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
