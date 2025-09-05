import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Zap, 
  Settings,
  FileCode,
  Braces,
  User,
  Briefcase,
  GraduationCap,
  Contact
} from 'lucide-react';
import SkillIcon from '../components/SkillIcon';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import ContactInfo from '../components/ContactInfo';

const Portfolio: React.FC = () => {
  const skills = [
    { icon: Code2, name: 'C#', proficiency: 90 },
    { icon: Settings, name: '.NET', proficiency: 85 },
    { icon: Database, name: 'PL/SQL', proficiency: 80 },
    { icon: Server, name: 'API REST', proficiency: 85 },
    { icon: Zap, name: 'Dapper', proficiency: 75 },
    { icon: FileCode, name: 'Entity Framework', proficiency: 80 },
    { icon: Braces, name: 'TypeScript', proficiency: 70 },
  ];

  const experienceData = {
    title: "Desenvolvedor .NET",
    company: "Hino Sistemas",
    period: "Out 2021 — Presente",
    location: "Limeira",
    description: [
      "Desenvolvi e mantive aplicações em C# e .NET para otimizar a funcionalidade de um sistema ERP e melhorar a experiência do usuário.",
      "Colaborei com equipes multifuncionais para coletar e analisar requisitos, resultando em entregáveis de negócios com soluções técnicas eficientes.",
      "Implementei procedimentos de testes e revisei o código para assegurar a qualidade e o alto desempenho da base de código.",
      "Participei ativamente da resolução de problemas e ofereci suporte técnico, garantindo a estabilidade e o bom funcionamento do sistema.",
      "Adquiri vasta experiência sobre a regra de negócio no desenvolvimento de funcionalidades customizadas."
    ]
  };

  const educationData = {
    degree: "Superior",
    institution: "Universidade Paulista",
    period: "Jan 2022 — Dec 2024",
    location: "Limeira",
    field: "Análise e Desenvolvimento de Sistemas"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center animate-slide-in-up">
            <div className="mb-8 animate-float">
              <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full p-1 shadow-[var(--shadow-glow)]">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <User size={60} className="text-primary" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Gabriel</span>
              <br />
              <span className="text-foreground">Fernandes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Desenvolvedor .NET
            </p>
            
            <div className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              <p>
                Com 4 anos de experiência, sou um desenvolvedor de software 
                altamente motivado e especializado no ecossistema .NET. Destaco-me 
                na resolução de problemas complexos, tendo desenvolvido e mantido 
                funcionalidades-chave para um sistema ERP que impactaram diretamente 
                a eficiência do negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16 space-y-20">
        
        {/* About Section */}
        <section id="sobre" className="animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <User size={32} />
              Sobre
            </h2>
          </div>
          
          <div className="card-professional p-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Com proficiência em <span className="text-primary font-semibold">C#</span>, 
              <span className="text-primary font-semibold"> PL/SQL</span>, 
              <span className="text-primary font-semibold"> Dapper</span> e 
              <span className="text-primary font-semibold"> Entity Framework</span>, 
              busco criar soluções robustas e de alta performance. Minha paixão está em 
              transformar desafios complexos em soluções elegantes e eficientes.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <Code2 size={32} />
              Habilidades
            </h2>
            <p className="text-muted-foreground">Tecnologias e ferramentas que domino</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill) => (
              <SkillIcon
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <Briefcase size={32} />
              Experiência Profissional
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              title={experienceData.title}
              company={experienceData.company}
              period={experienceData.period}
              location={experienceData.location}
              description={experienceData.description}
              isLast={true}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="formacao" className="animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <GraduationCap size={32} />
              Formação
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <EducationCard
              degree={educationData.degree}
              institution={educationData.institution}
              period={educationData.period}
              location={educationData.location}
              field={educationData.field}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <Contact size={32} />
              Contato
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;