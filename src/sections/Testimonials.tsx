import type { FC } from 'react';
import testimonials from '../data/testimonials';
import { User } from 'lucide-react';
import Title from '../components/Title';
import useObserver from '../hooks/useObserver';

const Testimonials: FC = () => {
  const { elementRef, isVisible } = useObserver();

  return (
    <section
      id="testimonials"
      ref={elementRef}
      className="my-48 lg:my-64"
    >
      <Title title="Ils parlent de moi" emoji="📣" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={
              `
                bg-gray-100 dark:bg-gray-800 rounded-4xl p-6 opacity-0 ${isVisible ? 'animate-section-show' : ''}
                animation-delay-${index}
              `
            }
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex justify-center items-center">
                <User className="stroke-indigo-800 dark:stroke-indigo-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.role}
                  {' '}
                  -
                  {' '}
                  {testimonial.company}
                </p>
              </div>
            </div>
            <blockquote className="text-gray-700 dark:text-gray-400 font-light italic mb-4">
              "
              {testimonial.text}
              "
            </blockquote>
            {testimonial.linkedinUrl && (
              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="cursor-pointer"
              >
                <img
                  className="h-7 w-auto grayscale hover:grayscale-0 transition-all dark:brightness-200"
                  src="/logos/linkedin.svg"
                  alt="Logo de LinkedIn"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
