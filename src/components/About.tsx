export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center neon-text mb-12">
          Sobre Mim
        </h2>
        
        <div className="glass-card p-8 md:p-12 space-y-6">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. 
            Especializado em criar soluções web modernas e eficientes, sempre buscando 
            aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Com experiência em desenvolvimento full-stack, trabalho com as tecnologias 
            mais modernas do mercado para criar aplicações escaláveis, responsivas e 
            com excelente performance.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Meu objetivo é transformar ideias em realidade através do código, 
            criando experiências digitais que fazem a diferença.
          </p>
        </div>
      </div>
    </section>
  );
};
