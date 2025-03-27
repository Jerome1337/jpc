import type { MouseEvent } from 'react';

const handleSectionClick = (e: MouseEvent, id: string): void => {
  e.preventDefault();

  const element = document.getElementById(id);

  if (element) {
    const navHeight = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export { handleSectionClick };
