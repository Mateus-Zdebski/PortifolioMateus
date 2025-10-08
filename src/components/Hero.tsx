import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10 space-y-8 animate-slide-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold neon-text">
            Seu Nome
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-secondary">
            Full Stack Developer
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Desenvolvedor apaixonado por criar experiências digitais únicas e inovadoras
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all"
          >
            Ver Projetos
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            Entrar em Contato
          </Button>
        </div>

        <div className="pt-16 animate-float">
          <button
            onClick={() => scrollToSection('about')}
            className="text-secondary hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </section>
  );
};
