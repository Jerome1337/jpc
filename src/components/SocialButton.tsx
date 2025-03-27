import type { FC } from 'react';

type SocialButtonProps = {
  url: string
  name: string
  icon: string
};

const SocialButton: FC<Readonly<SocialButtonProps>> = ({ url, name, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitez mon profil ${name}`}
      className="cursor-pointer flex p-2 rounded-xl bg-gray-100 hover:bg-gray-200dark:bg-white
      dark:hover:bg-gray-300 transition-all duration-200"
    >
      <img
        className="h-6 w-auto transition-all"
        src={icon}
        alt={`Logo ${name}`}
        width="24"
        height="24"
      />
    </a>
  );
};

export default SocialButton;
