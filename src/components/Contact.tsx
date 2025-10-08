import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-16">
          Vamos Trabalhar Juntos
        </h2>
        
        <div className="glass-card p-8 md:p-12 space-y-8">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Estou sempre aberto a novos projetos e oportunidades interessantes. 
            Se você tem uma ideia ou quer discutir uma parceria, não hesite em entrar em contato!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all w-full sm:w-auto"
              asChild
            >
              <a href="mailto:seu.email@exemplo.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-6">Conecte-se comigo nas redes sociais</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary transition-colors p-3 rounded-lg hover:bg-secondary/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors p-3 rounded-lg hover:bg-accent/10"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <footer className="pt-12 text-muted-foreground text-sm">
          <p>© 2024 Seu Nome. Desenvolvido com 💜 e React</p>
        </footer>
      </div>
    </section>
  );
};
