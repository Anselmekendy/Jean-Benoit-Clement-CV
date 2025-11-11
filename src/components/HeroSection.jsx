import React from 'react';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden" style={{ marginTop: '3px' }}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-overlay)] pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-lighter/30 border border-primary-light/40 mb-4 animate-fade-in">
              <span className="text-sm font-medium text-primary">Ministère & Formation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-up">
              Former des Leaders{' '}
              <span className="text-gradient">Pour Transformer</span>{' '}
              les Églises
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Accompagnement, éducation et équipement pour bâtir des leaders spirituels solides
              et des communautés transformées par l'Évangile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" variant="default" className="w-full sm:w-auto shadow-medium hover:shadow-strong" onClick={() => window.location.href = '#apropos'}>
                Découvrir Mon Parcours
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '#temoignages'}>
                Voir les Témoignages
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong border-4 border-white/50 max-h-[465px] sm:max-h-[450px] md:max-h-[515px]">
                <img
                  src="/Hero-Section-Image.png"
                  alt="Jean Benoit Clément"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-strong p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Années</div>
                    <div className="text-xs text-muted-foreground">d'Expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center p-3 md:p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-medium transition-all">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Années d'Expérience</div>
          </div>
          <div className="text-center p-3 md:p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-medium transition-all">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Leaders Formés</div>
          </div>
          <div className="text-center p-3 md:p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-medium transition-all">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Églises Accompagnées</div>
          </div>
        </div>
      </div>
    </section>
  );
};