import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/src/contexts/ThemeContext';
import Navigation from '@/src/sections/Navigation';
import Footer from '@/src/sections/Footer';
import GoToTop from '@/src/components/GoToTop';

import '@/src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Jérôme Pogeant | Développeur Web Indépendant',
  description:
    'Développeur Web Full Stack spécialisé en React, Next.js et Node.js',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 relative selection:bg-indigo-100 flex flex-col">
            <Navigation />
            <main className="mx-auto max-w-7xl bg-white dark:bg-gray-900 w-full px-6 lg:px-8 flex-1 mt-30">
              {children}
            </main>
            <Footer />
            <GoToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
