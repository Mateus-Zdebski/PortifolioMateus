import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-12">
          Sobre Mim
        </h2>
        
        <div className="glass-card p-8 md:p-12 space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(139,92,246,0.5)] group">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <User className="w-24 h-24 text-primary" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Olá! Sou um desenvolvedor iniciante e entusiasta de tecnologia, focado em 
              desenvolvimento web e eletrônica.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Estou no início da minha jornada profissional na área de tecnologia, combinando 
              conhecimentos de desenvolvimento web e eletroeletrônica. Com formação técnica em 
              Desenvolvimento de Sistemas pelo Senai, curso técnico em Eletroeletrônica pelo IFSC 
              e atualmente cursando Engenharia Elétrica, busco aplicar estes conhecimentos em 
              projetos criativos e inovadores.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Meu objetivo é transformar ideias em realidade através da tecnologia, 
              unindo desenvolvimento web e eletrônica para criar soluções completas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
