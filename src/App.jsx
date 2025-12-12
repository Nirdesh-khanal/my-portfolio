import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Games from './components/Games';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Games />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;