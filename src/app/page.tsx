import Hero from '@/src/sections/Hero';
import Services from '@/src/sections/Services';
import Works from '@/src/sections/Works';
import Competences from '@/src/sections/Competences';
import Contact from '@/src/sections/Contact';
import { FC } from 'react';

const Home: FC = () => (
  <>
    <Hero />
    <Services />
    <Works />
    <Competences />
    <Contact />
  </>
);

export default Home;
