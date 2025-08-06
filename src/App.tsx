import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navigation from './sections/Navigation';
// import Testimonials from './sections/Testimonials';
import Works from './sections/Works';
import Services from './sections/Services';
import { ThemeProvider } from './contexts/ThemeContext';
import Competences from './sections/Competences';
import GoToTop from './components/GoToTop';

const App = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-gray-900 relative selection:bg-indigo-100">
      <Navigation />
      <main className="mx-auto max-w-7xl bg-white dark:bg-gray-900 w-full px-6 lg:px-8">
        <Hero />
        <Services />
        <Works />
        {/* Do not show for now */}
        {/* <Testimonials /> */}
        <Competences />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  </ThemeProvider>
);

export default App;
