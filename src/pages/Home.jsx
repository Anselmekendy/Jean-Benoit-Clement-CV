import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}