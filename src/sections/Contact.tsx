import { Mail, MapPinned, Phone } from 'lucide-react';
import { useEffect, useRef, useState, type FC } from 'react';
import useObserver from '../hooks/useObserver';

const Contact: FC = () => {
  const parts = ['06', '50', '01', '08', '94'];
  const user = 'hello';
  const domain = 'jeromepogeant.com';

  const bookCallRef = useRef<HTMLAnchorElement | null>(null);
  const handEmojiRef = useRef<HTMLSpanElement | null>(null);

  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const { elementRef, isVisible } = useObserver();

  useEffect(() => {
    const calculateAngle = () => {
      if (bookCallRef.current && handEmojiRef.current) {
        const bookCallRect = bookCallRef.current.getBoundingClientRect();
        const handEmojiRect = handEmojiRef.current.getBoundingClientRect();

        // Calculate centers of each element
        const bookCallCenterX = bookCallRect.left + (bookCallRect.width / 2);
        const bookCallCenterY = bookCallRect.top + (bookCallRect.height / 2);
        const handEmojiCenterX = handEmojiRect.left + (handEmojiRect.width / 2);
        const handEmojiCenterY = handEmojiRect.top + (handEmojiRect.height / 2);

        // Calculate angle between centers
        const angle = Math.atan2(
          bookCallCenterY - handEmojiCenterY,
          bookCallCenterX - handEmojiCenterX,
        ) * (180 / Math.PI);

        setRotationAngle(angle);
      }
    };

    // Calculate on initial render
    calculateAngle();

    // Recalculate on resize
    window.addEventListener('resize', calculateAngle);

    return () => {
      window.removeEventListener('resize', calculateAngle);
    };
  }, []);

  return (
    <section id="contact" ref={elementRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-48 lg:my-64">
        <div
          className={
            `
              bg-gray-50 dark:bg-gray-800 rounded-4xl p-10 lg:p-12
              opacity-0 ${isVisible ? 'animate-section-show' : ''}
            `
          }
          role="contentinfo"
          aria-labelledby="contact-title"
        >
          <h2
            id="contact-title"
            className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100"
          >
            Avançons ensemble
            <span className="ml-2" aria-hidden="true">
              🚀
            </span>
          </h2>
          <p className="mb-2 text-lg font-light text-gray-600 dark:text-gray-400">
            Curieux de découvrir comment le web peut transformer votre activité ?
          </p>
          <p className="mb-8 text-lg font-light text-gray-600 dark:text-gray-400">
            Prenons un moment pour échanger, que vous ayez un projet précis ou simplement des questions.
            {' '}
            <span
              ref={handEmojiRef}
              className="inline-block ml-1"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
              aria-hidden="true"
            >
              👉
            </span>
          </p>
          <a
            ref={bookCallRef}
            href="https://calendly.com/pogeantjerome/30min"
            className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-m font-semibold text-white
            hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
            dark:bg-indigo-500 dark:hover:bg-indigo-400"
            aria-label="Réserver un appel de 15 minutes"
          >
            Réservez un appel
          </a>
        </div>

        <div
          className={
            `
              flex flex-col justify-around gap-12 lg:gap-0
              opacity-0 ${isVisible ? 'animate-section-show' : ''}
              animation-delay-1
            `
          }
          role="list"
          aria-label="Informations de contact"
        >
          <div className="flex gap-6" role="listitem">
            <span
              className="flex items-center justify-center bg-gray-50 rounded-full w-12 h-12 dark:bg-gray-800"
              aria-hidden="true"
            >
              <Phone className="stroke-gray-600 dark:stroke-gray-400" />
            </span>
            <div>
              <p className="text-lg font-light text-gray-700 dark:text-gray-300">
                Téléphone
              </p>
              <a
                className="text-xl font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-indigo-800 dark:text-white dark:hover:text-indigo-100"
                href={`tel:${parts.join('')}`}
                aria-label={`Appeler le numéro ${parts.join(' ')}`}
              >
                {parts.join(' ')}
              </a>
            </div>
          </div>
          <div className="flex gap-6" role="listitem">
            <span
              className="flex items-center justify-center bg-gray-50 rounded-full w-12 h-12 dark:bg-gray-800"
              aria-hidden="true"
            >
              <Mail className="stroke-gray-600 dark:stroke-gray-400" />
            </span>
            <div>
              <p className="text-lg font-light text-gray-700 dark:text-gray-300">
                Email
              </p>
              <a
                className="text-xl font-semibold text-gray-900 transition duration-300 ease-in-out hover:text-indigo-800 dark:text-white dark:hover:text-indigo-100"
                href={`mailto:${user}@${domain}`}
                aria-label={`Envoyer un email à ${user}@${domain}`}
              >
                {user}
                @
                {domain}
              </a>
            </div>
          </div>
          <div className="flex gap-6" role="listitem">
            <span
              className="flex items-center justify-center bg-gray-50 rounded-full w-12 h-12 dark:bg-gray-800"
              aria-hidden="true"
            >
              <MapPinned className="stroke-gray-600 dark:stroke-gray-400" />
            </span>
            <div>
              <p className="text-lg font-light text-gray-700 dark:text-gray-300">
                Localisation
              </p>
              <a
                className="text-xl font-semibold text-gray-900 transition duration-300 ease-in-out
              hover:text-indigo-800 dark:text-white dark:hover:text-indigo-100"
                href="https://maps.app.goo.gl/ruBtsv3wjjQvCSb98"
                aria-label="Voir la localisation sur Google Maps"
              >
                Lille, France
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
