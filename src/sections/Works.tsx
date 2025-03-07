import type { FC } from 'react';
import projects from '../data/projects';
import { Lightbulb } from 'lucide-react';
import Title from '../components/Title';
import Tag from '../components/Tag';
import useObserver from '../hooks/useObserver';

const Works: FC = () => {
  const { elementRef, isVisible } = useObserver();

  return (
    <section
      ref={elementRef}
      id="works"
      className={`my-48 lg:my-64 opacity-0 ${isVisible ? 'animate-section-show' : ''}`}
    >
      <Title title="Mes Réalisations" emoji="✨" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="rounded-4xl bg-gray-100 dark:bg-gray-800 p-6"
              role="listitem"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              {project.description.map((t) => (
                <p className="text-gray-700 dark:text-gray-400 font-light my-6">
                  {t}
                </p>
              ))}

              <div
                className="flex gap-2 flex-wrap"
                role="list"
                aria-label={`Technologies utilisées pour ${project.title}`}
              >
                {project.technologies.map((technologie) => (
                  <Tag key={technologie} content={technologie} />
                ))}
              </div>
            </div>
          );
        })}
        <div
          className="rounded-4xl bg-gray-100 dark:bg-gray-800 p-6 flex flex-col gap-6 justify-center items-center"
          role="listitem"
        >
          <div
            className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-full w-20 h-20 flex justify-center items-center"
            aria-hidden="true"
          >
            <Lightbulb size={40} className="stroke-indigo-800 dark:stroke-indigo-300" />
          </div>
          <p className="font-semibold text-xl text-center text-gray-800 dark:text-gray-100">
            Un projet, un question ?
          </p>
          <p className="font-light md:max-w-lg lg:max-w-1/2 text-xl text-center text-gray-700 dark:text-gray-400">
            N'hésitez pas à me contacter afin qu'on échange ensemble sur vos besoins. 🤩
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
