import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: 'Société Biblique Haïtienne',
      period: '2020 - À nos jours',
      role: 'Coordonnateur - Évangélisation par projection (hand to hand)',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=400&fit=crop',
      description: "En tant que Coordonnateur – Évangélisation par projection (hand to hand), le rôle consistait à organiser les projections de films pour partager l'Évangile, coordonner l'équipe et le matériel, et encourager le contact direct avec les participants afin de lier impact visuel et relation humaine.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Share Word Global',
      period: '2016 - 2023',
      role: "Coordonnateur et Formateur - Croissance de l'église",
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=400&fit=crop',
      description: "Le rôle consistait à organiser et superviser des activités visant à renforcer l'évangélisation et le développement de l'Église, former des équipes locales, et accompagner les membres afin de favoriser une croissance spirituelle et communautaire durable.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'World Map',
      period: '2013 - 2020',
      role: 'Formateur et Coordonnateur - Programme de leadership et de documentation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      description: "Le rôle consistait à former et accompagner des participants dans le développement de leurs compétences en leadership, tout en coordonnant les activités du programme et en assurant une bonne organisation de la documentation pour soutenir l'apprentissage et le suivi.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Réalisations Marquantes</span>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Projets</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborations et initiatives qui ont marqué mon parcours dans le ministère et la formation
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-strong transition-all duration-300 group border-primary/10"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image - 2/5 width on large screens */}
                  <div className="lg:col-span-2 relative overflow-hidden h-64 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
                    
                    {/* Icon badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary shadow-medium">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content - 3/5 width on large screens */}
                  <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="text-primary font-bold text-sm">
                        {project.title} - {project.period}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                      {project.role}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-20">
          <Card className="overflow-hidden shadow-strong border-0">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-primary via-primary to-secondary p-12 md:p-16 text-center text-primary-foreground">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-block mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Construisons quelque chose ensemble.
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Vous avez un projet de formation, d'évangélisation ou de développement de leadership ? Discutons de la manière dont nous pouvons collaborer.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-white text-primary border-0 hover:bg-white/90 hover:scale-105 text-lg px-8 py-6 shadow-medium transition-all"
                  >
                    Contactez-moi
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}