import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-16">
          Entre em Contato
        </h2>
        
        <div className="glass-card p-8 md:p-12 space-y-8">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            Vamos conversar sobre seu projeto e como posso ajudar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Localização</h3>
                  <p className="text-foreground/70">Joinville, SC, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <a href="mailto:mateus.zdebski02@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                    mateus.zdebski02@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Telefone</h3>
                  <a href="tel:+5547997598910" className="text-foreground/70 hover:text-primary transition-colors">
                    +55 (47) 99759-8910
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all"
                asChild
              >
                <a href="mailto:mateus.zdebski02@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary/10"
                asChild
              >
                <a href="https://wa.me/5547997598910" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-8 border-t border-border/50">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
              asChild
            >
              <a href="https://github.com/Mateus-Zdebski" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <footer className="pt-12 text-center text-muted-foreground text-sm">
          <p>© 2025 Mateus Zdebski. Desenvolvido com 💜 e React</p>
        </footer>
      </div>
    </section>
  );
};
