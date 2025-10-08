export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-12">
          Sobre Mim
        </h2>
        
        <div className="glass-card p-8 md:p-12 space-y-6">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Olá! Sou um desenvolvedor iniciante e entusiasta de tecnologia, focado em 
            desenvolvimento web e eletrônica.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Estou no início da minha jornada profissional na área de tecnologia, combinando 
            conhecimentos de desenvolvimento web e eletroeletrônica. Com formação técnica em 
            Desenvolvimento de Sistemas pelo Senai e estudando em Eletroeletrônica pelo IFSC, 
            busco aplicar estes conhecimentos em projetos criativos e inovadores.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Meu objetivo é transformar ideias em realidade através da tecnologia, 
            unindo desenvolvimento web e eletrônica para criar soluções completas.
          </p>
        </div>
      </div>
    </section>
  );
};
