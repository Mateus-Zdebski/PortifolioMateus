import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: <Code className="w-8 h-8" />,
    name: "HTML/CSS",
    description: "Desenvolvimento de interfaces web responsivas e modernas",
    color: "from-primary to-secondary"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    name: "JavaScript",
    description: "Desenvolvimento de funcionalidades interativas para aplicações web",
    color: "from-secondary to-accent"
  },
  {
    icon: <Server className="w-8 h-8" />,
    name: "PHP",
    description: "Desenvolvimento de aplicações e sistemas para web",
    color: "from-accent to-primary"
  },
  {
    icon: <Database className="w-8 h-8" />,
    name: "MySQL",
    description: "Gerenciamento e manipulação de banco de dados",
    color: "from-primary to-accent"
  },
  {
    icon: <Code className="w-8 h-8" />,
    name: "Java",
    description: "Desenvolvimento de aplicações desktop e servidores",
    color: "from-secondary to-primary"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    name: "Arduino",
    description: "Projetos de eletrônica e automação com microcontroladores",
    color: "from-accent to-secondary"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-16">
          Skills & Tecnologias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 cyber-border group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4 group-hover:animate-pulse`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                {skill.name}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {skill.description}
              </p>

              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
