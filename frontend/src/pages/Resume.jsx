import React from 'react';
import { Card, CardContent } from '../components/ui/card';

export default function Resume() {
  const experiences = [
    {
      period: '2012 - à nos jours',
      position: 'Directeur',
      organization: 'Ministère de la Pierre Vivante',
      location: 'Ouest, Delmas 83',
      description: "Je collabore avec une équipe administrative, supervise les coordinateurs départementaux et développe des relations nationales et internationales. En parallèle, en tant que formateur, j'organise et anime des formations sur le leadership global de l'Église locale et ses différentes entités.",
    },
    {
      period: '2016 - 2024',
      position: 'Coordonnateur & Formateur',
      organization: 'Share Word Global',
      location: 'Canada',
      description: "Je recrute des églises partenaires, forme des leaders pour l'évangélisation et la croissance de l'Église, et veille à l'expansion du programme à l'échelle nationale. Je visite également les églises pour recueillir des rapports et des témoignages, assurant ainsi un suivi efficace du développement du programme.",
    },
    {
      period: '2004 - 2010',
      position: 'Moniteur - AEE',
      organization: "Association pour l'évangélisation des enfants",
      location: 'Ouest, Delmas 75',
      description: "Je supervise le ministère biblique dans les écoles afin de transmettre des enseignements adaptés aux élèves. J'organise également des clubs de la Bonne Nouvelle pour favoriser l'apprentissage et la croissance spirituelle des enfants. De plus, je suis responsable de la logistique, veillant à la bonne organisation et au bon déroulement des différentes activités.",
    },
  ];

  const education = [
    {
      period: '2015 - 2017',
      degree: 'Licence',
      field: 'Science du Développement',
      institution: "Université Polyvalente d'Haïti",
      location: 'Carrefour Feuille',
      description: "Ma formation en Science du Développement m'a permis d'acquérir une expertise en gestion de projets, en analyse des dynamiques socio-économiques et en conception de stratégies de développement durable. Je maîtrise l'élaboration, la mise en œuvre et l'évaluation d'initiatives visant à renforcer les capacités des communautés, en intégrant une approche participative et une gestion efficace des ressources et des partenariats.",
    },
    {
      period: '2011 - 2015',
      degree: 'Certificat',
      field: 'Évangélisation & Leadership',
      institution: "École Internationale d'Évangélisation",
      location: 'Ouest, Delmas',
      description: "Mon expertise en Évangélisation et Leadership repose sur la conception et l'exécution de stratégies efficaces pour la diffusion de l'Évangile et le développement du leadership au sein des communautés. Je maîtrise la formation et l'accompagnement des leaders, l'élaboration de plans d'action structurés et la mise en place de modèles de croissance durable, favorisant ainsi un impact missionnaire stratégique et pérenne.",
    },
    {
      period: '2011 - 2015',
      degree: 'Licence',
      field: 'Comptabilité',
      institution: "Université Polyvalente d'Haïti",
      location: 'Carrefour Feuille',
      description: "En comptabilité, j'assure une gestion financière rigoureuse en supervisant l'analyse des états financiers, le suivi budgétaire et le contrôle des opérations comptables. J'élabore des rapports détaillés pour garantir une prise de décision éclairée et veille au respect des normes comptables en vigueur. Mon approche repose sur la transparence et l'optimisation des ressources afin d'assurer la stabilité financière et la conformité aux exigences réglementaires.",
    },
  ];

  const professionalSkills = [
    'Leadership',
    'Comptabilité',
    'Théologie',
    'Gestion de Projet',
    'Administration',
    'Sociologie',
  ];

  const languages = ['Français', 'Anglais', 'Espagnol'];

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="container-custom">
        {/* Page Header with improved design */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Mon Parcours Professionnel</span>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Curriculum Vitae</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un parcours dédié à la formation de leaders et à l'accompagnement des communautés
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-2">Expérience</h2>
              <p className="text-muted-foreground">Mon parcours professionnel</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-strong transition-all duration-300 border-primary/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-1 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                        <div className="h-full flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="text-primary font-bold text-lg">{exp.period}</div>
                          </div>
                          <div className="font-semibold text-foreground text-xl mb-2">{exp.position}</div>
                          <div className="text-sm text-muted-foreground mb-1">{exp.organization}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 p-8 flex items-center">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{exp.position}:</strong> {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-2">Éducation</h2>
              <p className="text-muted-foreground">Formation académique et certifications</p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-strong transition-all duration-300 border-secondary/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-1 bg-gradient-to-br from-secondary/5 to-accent/5 p-8">
                        <div className="h-full flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <div className="text-secondary font-bold text-lg">{edu.period}</div>
                          </div>
                          <div className="mb-3">
                            <div className="font-semibold text-foreground text-xl mb-1">{edu.field}</div>
                            <div className="text-sm font-medium text-muted-foreground">{edu.degree}</div>
                          </div>
                          <div className="text-sm">
                            <div className="text-muted-foreground italic mb-1">{edu.institution}</div>
                            <div className="text-muted-foreground italic flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 p-8 flex items-center">
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <Card className="shadow-strong border-primary/10">
              <CardContent className="p-8 md:p-12">
                {/* Professional Skills */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-primary-foreground shadow-glow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">
                        <span className="text-gradient">Compétences Professionnelles</span>
                      </h3>
                      <p className="text-muted-foreground">Expertises clés développées</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {professionalSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-muted to-muted/50 rounded-xl p-4 text-center font-medium text-foreground hover:from-primary/10 hover:to-secondary/10 hover:shadow-medium transition-all cursor-default"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-primary-foreground shadow-glow">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">
                        <span className="text-gradient">Langues</span>
                      </h3>
                      <p className="text-muted-foreground">Maîtrise linguistique</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {languages.map((language, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-muted to-muted/50 rounded-xl p-4 text-center font-medium text-foreground hover:from-primary/10 hover:to-secondary/10 hover:shadow-medium transition-all cursor-default"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          {language}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}