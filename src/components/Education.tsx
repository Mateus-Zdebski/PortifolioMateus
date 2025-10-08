import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Curso de Eletroeletrônica",
    institution: "IFSC",
    year: "2024",
    description: "Iniciei curso técnico que abordou fundamentos de elétrica e Arduino."
  },
  {
    title: "Curso de Desenvolvimento de Sistemas",
    institution: "Senai",
    year: "2023",
    description: "Curso técnico que abordou fundamentos de programação, desenvolvimento web e banco de dados MySQL."
  },
  {
    title: "Ensino Médio",
    institution: "Colégio Estadual Prof Juracy Maria Brosig",
    year: "2023",
    description: "Concluí o ensino médio."
  },
  {
    title: "Ensino Fundamental",
    institution: "Escola Municipal Prof Ada Santanna da Silveira",
    year: "2020",
    description: "Concluí o ensino fundamental."
  },
  {
    title: "Office 2016 e Administração",
    institution: "Jumper Cursos",
    year: "2016",
    description: "Concluí curso básico de administração e ferramentas do Office 2016."
  }
];

export const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-16">
          Minha Jornada
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.8)] z-10" />
                
                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 cyber-border group hover:scale-105 transition-transform duration-300">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-3 ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <GraduationCap className="w-4 h-4" />
                      <span>{item.year}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-foreground/80 font-medium mb-3">
                      {item.institution}
                    </p>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>

                    <div className={`mt-4 h-1 bg-gradient-to-r ${
                      index % 2 === 0 ? 'from-transparent via-primary to-transparent' : 'from-transparent via-secondary to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
