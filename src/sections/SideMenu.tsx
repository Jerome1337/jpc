'use client';

import { type Dispatch, type FC, type SetStateAction } from 'react';
import sections from '../data/sections';
import { X } from 'lucide-react';
import socials from '../data/socials';
import SocialButton from '../components/SocialButton';
import Link from 'next/link';

type SideMenuProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
};

const SideMenu: FC<Readonly<SideMenuProps>> = ({ isOpen, setIsOpen }) => (
  <div
    className={`
        fixed min-h-screen top-0 right-0 bottom-0 w-full z-50 sm:max-w-sm bg-white dark:bg-gray-900
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:hidden
      `}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900
        p-6 sm:max-w-sm"
    >
      <div className="flex items-center justify-between">
        <Link href="#">
          <span className="sr-only">
            Jérôme Pogeant | Développeur Web Indépendant
          </span>
          <img
            className="h-10 w-auto"
            src="/icon.svg"
            alt="Pictograme du logo"
          />
        </Link>
        <button
          className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">
            Close menu
          </span>
          <X />
        </button>
      </div>
      <div>
        <div className="space-y-2 py-6">
          {sections.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900
                  dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="w-full rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white
          hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
          dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer"
        >
          Parlons de votre projet
        </Link>
        <div
          aria-hidden="true"
          className="block border-t-1 mx-auto my-10 border-gray-200 dark:border-gray-700"
        />
        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.name}>
              <SocialButton
                url={social.url}
                name={social.name}
                icon={social.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SideMenu;
