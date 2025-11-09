import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Pasteur Michel Desrosiers',
      role: 'Pasteur Principal',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces',
      quote: "J'ai eu le privilège de travailler avec Jean Benoit lors d'une formation sur le leadership d'église. Sa façon claire d'expliquer et ses enseignements pratiques ont aidé notre église à grandir et à former de nouveaux leaders. C'est un vrai mentor, passionné par le développement des autres.",
      rating: 5,
    },
    {
      name: 'Sarah Thompson',
      role: 'Coordinatrice World Map',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces',
      quote: "Travailler avec Jean Benoit dans le programme de leadership World Map a été une expérience marquante. Son expertise, son suivi rigoureux et sa sensibilité culturelle ont rendu la collaboration fluide et enrichissante. Sa passion pour aider les autres à grandir est vraiment inspirante.",
      rating: 5,
    },
    {
      name: 'Pasteur Sylla Lafrant',
      role: 'Coordinateur Club d\'Évangélisation',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces',
      quote: "Lors des projections d'évangélisation avec la Société Biblique Haïtienne, j'ai été marqué par l'approche authentique de Jean Benoit. Il crée de vrais moments de connexion et guide avec un cœur de serviteur. Son leadership inspire la confiance et l'engagement de toute l'équipe. Grâce à son exemple et à ses conseils, je coordonne aujourd'hui un club d'évangélisation pour enfants, inspiré de sa méthode.",
      rating: 5,
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused]);

  return (
    <section 
      id="temoignages" 
      className="section-spacing bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Témoignages</span>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Ce Qu'ils Disent de <span className="text-gradient">Mon Travail</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des témoignages authentiques de collaborateurs et leaders transformés
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Testimonial Card */}
          <div className="mb-12">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-strong hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 bg-gradient-to-br from-white to-primary/5">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
                {/* Left: Image & Info */}
                <div className="flex flex-col items-center lg:items-start space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50" />
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-strong transform hover:scale-105 transition-transform duration-300">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{testimonials[activeIndex].role}</p>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1 justify-center lg:justify-start">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Quote */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    <p className="relative z-10">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="group rounded-full w-14 h-14 bg-white border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative transition-all duration-300 transform hover:scale-105 ${
                    activeIndex === index ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-80'
                  }`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  <div className={`w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 shadow-medium hover:shadow-strong ${
                    activeIndex === index
                      ? 'border-primary ring-4 ring-primary/20'
                      : 'border-muted-foreground/30'
                  }`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="group rounded-full w-14 h-14 bg-white border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};