import type { FC } from 'react';
import technologies from '../data/technologies';
import Title from '../components/Title';
import useObserver from '../hooks/useObserver';

const Competences: FC = () => {
  const { elementRef, isVisible } = useObserver();

  return (
    <section
      id="competences"
      ref={elementRef}
      className={`my-48 lg:my-64 opacity-0 ${isVisible ? 'animate-section-show' : ''}`}
      aria-labelledby="competences-heading"
    >
      <div>
        <Title id="competences-heading" title="Expertise Grands Comptes" emoji="🏢" />
        <p className="font-light lg:mx-24 mb-18 text-center text-gray-600 dark:text-gray-400 text-xl">
          Applications web scalables qui réduisent vos coûts techniques long terme
          {' '}
          et améliorent vos performances business.
        </p>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">
              🏋️
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Décathlon
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CRM interne 500+ utilisateurs
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
              Application cloud native
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl not-only:border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">
              🛋
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Boulanger
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Refonte e-commerce Qwik.js
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
              React, GraphQL, SSR
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">
              👗
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Kiabi
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Modernisation de la plateforme de vente
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
              Augmentation de la conversion
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">
              🏠
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Qimpl
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Co-fondateur SaaS gestion locative
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
              Incubé Euratechnologies
            </p>
          </div>
        </div>
      </div>

      {/* Technology carousel */}
      <div
        className="flex relative h-[176px] w-[99vw] overflow-x-hidden left-[calc(-50vw_+_50%)] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        aria-label="Technologies maîtrisées"
        role="region"
      >
        <div className="sr-only">
          Cette section présente un défilement automatique des technologies que je maîtrise.
        </div>
        {[0, 1, 2].map((key) => (
          <ul
            key={key}
            className="flex items-center justify-center md:justify-start animate-infinite-scroll"
            aria-hidden={key !== 0}
          >
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-col items-center justify-center group mx-8 hover:scale-110 focus-within:scale-110 transition duration-200 bg-gray-100 dark:bg-gray-800 p-12 rounded-4xl"
              >
                <div className="w-16 h-16 flex items-center">
                  <img
                    src={tech.icon}
                    alt={`Logo de ${tech.name}`}
                    className="object-contain grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 transition duration-200"
                    width="64"
                    height="64"
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Competences;
