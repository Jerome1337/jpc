import { useEffect, useState, type FC } from 'react';
import { handleSectionClick } from '../utils';
import { ArrowUp } from 'lucide-react';

const GoToTop: FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      setShowScrollButton(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={
        `fixed bottom-4 right-4 z-50 opacity-0 ${showScrollButton ? 'block animate-fade-in' : 'animate-fade-out'}`
      }
    >
      <button
        className="rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-m font-semibold text-white
          hover:bg-indigo-500 focus-visible:outline-indigo-600 transition duration-300 ease-in-out
          dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-lg"
        onClick={(event) => {
          handleSectionClick(event, 'hero');
        }}
        aria-label="Retour en haut de page"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default GoToTop;
