import type { FC } from 'react';
import sections from '../data/sections';
import { handleSectionClick } from '../utils';
import socials from '../data/socials';
import SocialButton from '../components/SocialButton';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 w-full px-8 py-20" role="contentinfo" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl flex flex-col justify-between gap-8 md:items-center md:flex-row">
        <a href="#" aria-label="Retour en haut de la page">
          <img
            src="/logo.svg"
            alt="Logo Jérôme Pogeant"
            className="w-52 block dark:hidden"
            width="208"
            height="52"
          />
          <img
            src="/logo-invert.svg"
            alt="Logo Jérôme Pogeant"
            className="w-52 hidden dark:block"
            width="208"
            height="52"
          />
        </a>

        <nav aria-label="Navigation du pied de page">
          <ul className="flex flex-col md:flex-row gap-4 font-light">
            {sections.map((section) => (
              <li key={section.name}>
                <a
                  href={`#${section.id}`}
                  onClick={(event) => handleSectionClick(event, section.id)}
                  className="cursor-pointer font-mono text-sm text-gray-900 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  aria-current={window.location.hash === `#${section.id}` ? 'page' : undefined}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div aria-hidden="true" className="max-w-7xl block border-t-1 mx-auto my-12 border-gray-200 dark:border-gray-700" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between align-middle gap-6 md:gap-0">
          <div className="flex justify-center gap-4">
            <h2 className="sr-only">
              Réseaux sociaux
            </h2>
            <ul className="flex gap-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <SocialButton url={social.url} name={social.name} icon={social.icon} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center font-mono text-sm text-gray-900 dark:text-gray-200">
            <p>
              <span aria-label="Copyright">
                ©
              </span>
              {' '}
              Jérôme Pogeant -
              {' '}
              {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
