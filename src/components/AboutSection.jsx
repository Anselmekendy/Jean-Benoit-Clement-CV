import React from 'react';
import { Card, CardContent } from './ui/card';

export const AboutSection = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Enseignement Biblique',
      description: 'Formation solide ancrée dans les Écritures pour un leadership authentique et transformateur.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Développement de Leaders',
      description: 'Accompagnement personnalisé pour équiper et autonomiser les futurs leaders d\'église.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Impact Communautaire',
      description: 'Stratégies concrètes pour un engagement missionnaire efficace et durable.',
    },
  ];

  return (
    <section id="apropos" className="section-spacing bg-background relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[var(--gradient-subtle)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header with decorative line */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">Mon Parcours</span>
                <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">À Propos de Moi</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Je suis Jean Benoit Clément, j'aide les églises à former des leaders
            </p>
          </div>

          {/* Main content with better visual hierarchy */}
          <div className="mb-16">
            <Card className="border-primary/20 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    Engagé dans l'évangélisation et la formation, j'accompagne les églises locales en leur
                    fournissant éducation et ressources. Avec une expertise en leadership et en enseignement
                    biblique, j'ai occupé divers rôles de formateur et coordonnateur.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    À travers le{' '}
                    <span className="font-semibold text-foreground">Ministère de la Pierre Vivante Haïti</span>,
                    je contribue à former des leaders et à équiper les croyants pour un impact durable dans leurs
                    communautés et au-delà.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Cards with improved spacing */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Mes Valeurs Fondamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-primary/10 overflow-hidden"
              >
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  {/* Icon with gradient background */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action with improved design */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/5 rounded-full border border-primary/20 hover:bg-primary/10 transition-all cursor-pointer group">
            <span className="text-primary font-medium">Découvrez comment nous pouvons collaborer</span>
            <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};