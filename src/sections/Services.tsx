import type { FC } from 'react';
import { handleSectionClick } from '../utils';
import Title from '../components/Title';
import useObserver from '../hooks/useObserver';

const Services: FC = () => {
  const { elementRef, isVisible } = useObserver();

  return (
    <section
      id="services"
      ref={elementRef}
      className={`my-48 lg:my-64 opacity-0 ${
        isVisible ? 'animate-section-show' : ''
      }`}
    >
      <Title title="Transformation Digitale" emoji="🚀" />

      <div className="text-center mb-16">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Solutions robustes livrées rapidement
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
          Développements évolutifs qui réduisent vos coûts techniques long terme
          et améliorent performances business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl mb-4">
            ☁️
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Architecture Cloud Native
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Solutions scalables sur GCP/Kubernetes ou serverless avec monitoring
            avancé et haute disponibilité
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border not-even:border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl mb-4">
            🔄
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Modernisation Legacy
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Migration progressive vers des applications web modernes, sans
            interruption de service
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl mb-4">
            📊
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Leadership Technique
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Standards techniques, compréhension métier, accompagnement au
            changement
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Prêt à transformer vos défis techniques ?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Échangeons sur votre projet d'application web scalable et définissons
          ensemble l'application web adaptée à vos enjeux business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={(event) => {
              handleSectionClick(event, 'contact');
            }}
            className="rounded-2xl bg-indigo-600 px-6 py-3 text-base font-semibold cursor-pointer text-white shadow-xs
                    hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors"
          >
            Discutons de votre projet
          </button>
          <a
            href="https://calendly.com/pogeantjerome/20min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
          >
            Réserver un rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
