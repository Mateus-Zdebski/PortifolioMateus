import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, carrinho de compras, pagamentos integrados e gestão de estoque em tempo real.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com drag-and-drop, notificações em tempo real, colaboração em equipe e sincronização em nuvem.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Dashboard analítico para redes sociais com métricas em tempo real, gráficos interativos, agendamento de posts e relatórios detalhados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Next.js", "GraphQL", "MongoDB", "Chart.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "Assistente virtual com IA para atendimento ao cliente, integração com múltiplos canais, análise de sentimentos e respostas automatizadas.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    tags: ["Python", "OpenAI", "React", "WebSocket"],
    github: "#",
    demo: "#"
  },
  {
    title: "Fitness Tracker",
    description: "App de fitness com acompanhamento de exercícios, planos de treino personalizados, métricas de saúde e gamificação de objetivos.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
    tags: ["React Native", "Node.js", "Redis", "Charts"],
    github: "#",
    demo: "#"
  },
  {
    title: "Crypto Portfolio",
    description: "Gerenciador de portfólio de criptomoedas com dados em tempo real, alertas de preço, análise de mercado e histórico de transações.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Express", "CoinGecko API", "D3.js"],
    github: "#",
    demo: "#"
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
