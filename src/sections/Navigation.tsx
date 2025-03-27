import { useState } from 'react';
import type { FC } from 'react';

import sections from '../data/sections';
import { handleSectionClick } from '../utils';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SideMenu from './SideMenu';

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Jérôme Pogeant | Développeur Web Indépendant
            </span>
            <img className="h-10 w-auto" src="/icon.svg" alt="Pictogramme du logo" />
          </a>
        </div>
        <div className="flex items-center gap-x-8">
          <div className="hidden lg:flex gap-x-8">
            {sections.map(({ id, name }) => (
              <a
                key={id}
                href={id}
                className="flex flex-col justify-center text-sm/6 font-semibold text-gray-900 dark:text-gray-200
                  hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer transition-colors"
                onClick={(event) => handleSectionClick(event, id)}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex gap-x-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900
              dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700
              transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark
                ? (
                  <Sun className="h-5 w-5" />
                )
                : (
                  <Moon className="h-5 w-5" />
                )}
            </button>
            <button
              onClick={(event) => {
                handleSectionClick(event, 'contact');
              }}
              className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white
              hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
              dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer"
            >
              Parlons de votre projet
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-gray-700
              dark:text-gray-200 cursor-pointer lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">
                Open main menu
              </span>
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navigation;
