import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import useScrollReveal from './hooks/useScrollReveal';

function AppContent() {
  useScrollReveal();
  
  return (
    <>
      <Header />
      <main>
        <article className="container">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </article>
      </main>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
