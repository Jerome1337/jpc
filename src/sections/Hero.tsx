import type { FC } from 'react';

import { handleSectionClick } from '../utils';
import useObserver from '../hooks/useObserver';

const Hero: FC = () => {
  const { elementRef, isVisible } = useObserver();

  return (
    <section
      id="hero"
      ref={elementRef}
      className={`relative isolate h-dvh opacity-0 ${isVisible ? 'animate-section-show' : ''}`}
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="grid grid-cols-1 h-full items-center content-center justify-center gap-8 lg:gap-16 lg:mx-12 lg:justify-center lg:grid-cols-2 pt-[250px] md:pt-0">
        <div className="flex flex-col gap-3 justify-center text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            Je suis Jérôme
            <span className="animate-wave inline-block ml-4" aria-hidden="false">
              👋
            </span>
          </p>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-balance text-gray-900 dark:text-white">
            Développeur d'App Web Scalables
          </h1>
          <p className="mt-4 md:mt-6 font-semibold text-pretty text-indigo-600 dark:text-indigo-400 sm:text-xl/8">
            Applications web scalables & durables
          </p>
          <p className="mb-2 font-medium text-gray-600 dark:text-gray-300 text-lg">
            9 ans d'expérience
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium">
              Grands Comptes
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
              IA Enthousiaste
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
              SaaS
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
              Freelance
            </span>
          </div>
          <p className="mb-4 md:mb-8 font-light text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
            Je développe des applications web qui supportent votre croissance business
            avec des plateformes applicatives qui perdurent.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={(event) => {
                handleSectionClick(event, 'contact');
              }}
              className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold cursor-pointer text-white
                hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
                dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Discutons de votre projet
            </button>
            <button
              type="button"
              onClick={(event) => {
                handleSectionClick(event, 'works');
              }}
              className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Découvrir mon expertise
            </button>
          </div>
        </div>
        <div className="flex justify-center order-first lg:order-last">
          {' '}
          <div className="relative">
            <img
              src="/profile-picture.jpeg"
              alt="Photo de profil"
              className="max-w-36 md:max-w-56 lg:max-w-xs rounded-full bg-gray-50 object-cover dark:bg-gray-800"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
