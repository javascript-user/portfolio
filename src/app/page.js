'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TechBuddy from '@/components/TechBuddy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), { ssr: false });

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <TechBuddy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
