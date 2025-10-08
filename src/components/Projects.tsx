import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Fokus Alura",
    description: "Aplicativo web para gerenciamento de tempo e produtividade baseado na técnica Pomodoro.",
    image: "https://mateus-zdebski.github.io/imagens/Fofusalura.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mateus-Zdebski/Fokus_alura",
    demo: "https://github.com/Mateus-Zdebski/Fokus_alura"
  },
  {
    title: "Igreja Ucraniana",
    description: "Portfólio para a Igreja Ucraniana São Nicolau.",
    image: "https://mateus-zdebski.github.io/imagens/igreja.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Mateus-Zdebski/igreja_sao_nicolau_html_css",
    demo: "https://saonicolau.joinville.br/"
  },
  {
    title: "Loja de Veículos",
    description: "Sistema para gerenciamento de vendas e estoque de uma loja de veículos.",
    image: "https://mateus-zdebski.github.io/imagens/senaiultimoprojeto.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Mateus-Zdebski/LojaVeiculos",
    demo: "https://github.com/Mateus-Zdebski/LojaVeiculos"
  },
  {
    title: "Loja de Veículo Motob",
    description: "Sistema para gerenciamento de vendas e estoque de uma loja de veículos (em construção).",
    image: "https://mateus-zdebski.github.io/imagens/Motob%20-%20Car%20Dealer%20And%20Automotive%20HTML5%20Template%20-%20Brave%2011_03_2025%2014_06_20.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Mateus-Zdebski",
    demo: "https://motob.byethost12.com/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-16">
          Meus Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden cyber-border group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-secondary">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs md:text-sm bg-primary/20 text-primary border border-primary/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary text-secondary hover:bg-secondary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/80 text-accent-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
