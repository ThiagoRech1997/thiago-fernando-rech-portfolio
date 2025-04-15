import Image from "next/image";
import Profile from "../asset/profile.png";

export default function Home() {
  return (
    <div>
      <header>
        <div className="container navbar">
          <div className="logo">TR</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="container" style={{ display: "flex", alignItems: "center" }}>
          <div className="hero-content">
            <h1>Thiago Fernando Rech</h1>
            <p>Desenvolvedor Back-End | DBA/ETL | Especialista em SQL Server</p>
            <p>Transformando dados em soluções de negócios eficientes</p>
            <a href="#contato" className="btn">Entre em contato</a>
          </div>
          <div className="hero-image">
            <Image
              src={Profile}
              alt="Thiago Fernando Rech"
              width={400}
              height={400}
              style={{ borderRadius: "50%" }} // se quiser estilo avatar
            />
          </div>
        </div>
      </section>
      <section id="sobre" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Sobre Mim</h2>
            <p>Conheça um pouco da minha trajetória e habilidades</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>Engenheiro de Software com atuação sólida como DBA/ETL na área financeira, garantindo a performance, disponibilidade e integridade de sistemas críticos. Experiência com Microsoft SQL Server, Python e TypeScript, com foco em automação de processos, desenvolvimento backend e sustentação de dados bancários.</p>
              <p>Capacidade comprovada em otimização de queries SQL, resolução de incidentes críticos, manutenção de pipelines ETL e integração de sistemas via REST APIs. Forte compromisso com boas práticas de desenvolvimento, segurança da informação e eficiência operacional.</p>
              <p>Formado em Ciência da Computação pela Universidade Tecnológica Federal do Paraná, com vasta experiência em pesquisa acadêmica e projetos práticos.</p>
            </div>
            <div className="skills">
              <h3>Habilidades Técnicas</h3>
              <div>
                <span className="skill-tag">SQL Server</span>
                <span className="skill-tag">Oracle</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">ETL</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">MVC</span>
                <span className="skill-tag">Arquitetura Hexagonal</span>
              </div>

              <h3>Idiomas</h3>
              <div>
                <span className="skill-tag">Português (Nativo)</span>
                <span className="skill-tag">Inglês (Intermediário)</span>
                <span className="skill-tag">Libras (Básico)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experiencia" className="section" style={{backgroundColor: "#f0f5fa"}}>
        <div className="container">
          <div className="section-header">
            <h2>Experiência Profissional</h2>
            <p>Minha trajetória no mercado de trabalho</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Mar 2025 - Presente</div>
                <h3 className="timeline-title">Engenheiro de Software</h3>
                <div className="timeline-company">Silicon Village</div>
                <p>Atuação como engenheiro de software, aplicando conhecimentos em desenvolvimento backend e bancos de dados para soluções empresariais.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Fev 2024 - Fev 2025</div>
                <h3 className="timeline-title">Especialista em ETL</h3>
                <div className="timeline-company">Stellantis (Terceirizado pela Silicon Village)</div>
                <p>Sustentação e monitoramento de banco de dados Microsoft SQL Server, análise e otimização de queries SQL, suporte na execução e manutenção de processos ETL para operações financeiras.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Fev 2024 - Fev 2025</div>
                <h3 className="timeline-title">Estágio</h3>
                <div className="timeline-company">Silicon Village</div>
                <p>Atuação em sustentação de banco de dados, resolução de incidentes em sistemas críticos e desenvolvimento de documentação técnica.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Mar 2023 - Mar 2024</div>
                <h3 className="timeline-title">Diretor de Assuntos Gerais</h3>
                <div className="timeline-company">Centro Acadêmico de Ciência da Computação (CACOMP) - UTFPR</div>
                <p>Atuação na representação estudantil e organização de eventos acadêmicos.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">Jul 2017 - Dez 2022</div>
                <h3 className="timeline-title">Pesquisador</h3>
                <div className="timeline-company">Universidade Tecnológica Federal do Paraná</div>
                <p>Desenvolvimento de pesquisas na área de computação por mais de 5 anos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projetos" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Projetos</h2>
            <p>Alguns dos meus trabalhos mais recentes</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">Sistema ETL</div>
              <div className="project-content">
                <h3 className="project-title">Sistema de ETL para Dados Financeiros</h3>
                <p>Desenvolvimento de pipeline ETL para processamento de grandes volumes de dados financeiros com otimização de performance.</p>
                <div className="project-tags">
                  <span className="project-tag">SQL Server</span>
                  <span className="project-tag">Python</span>
                  <span className="project-tag">ETL</span>
                </div>
                <a href="#" className="btn">Ver detalhes</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">API REST</div>
              <div className="project-content">
                <h3 className="project-title">API REST para Integração de Sistemas</h3>
                <p>Desenvolvimento de API para integração entre sistemas legados e aplicações modernas, com foco em segurança e performance.</p>
                <div className="project-tags">
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">PostgreSQL</span>
                </div>
                <a href="#" className="btn">Ver detalhes</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">Dashboard</div>
              <div className="project-content">
                <h3 className="project-title">Dashboard de Monitoramento de Banco de Dados</h3>
                <p>Solução para monitoramento em tempo real de métricas de performance de bancos de dados SQL Server.</p>
                <div className="project-tags">
                  <span className="project-tag">C#</span>
                  <span className="project-tag">SQL Server</span>
                  <span className="project-tag">React</span>
                </div>
                <a href="#" className="btn">Ver detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section" style={{backgroundColor: "#f0f5fa"}}>
        <div className="container">
          <div className="section-header">
            <h2>Contato</h2>
            <p>Vamos trabalhar juntos? Entre em contato</p>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>thiagorech.1997@gmail.com</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Telefone</h3>
              <p>+55 (45) 99135-2082</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Localização</h3>
              <p>Serranópolis do Iguaçu, Paraná, Brasil</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">👨‍💻</div>
              <h3>LinkedIn</h3>
              <p>www.linkedin.com/in/thiagofernando-rech</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2025 Thiago Fernando Rech. Todos os direitos reservados.</p>
          <ul className="social-links">
            <li><a href="https://github.com/ThiagoRech1997" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank">LinkedIn</a></li>
            <li><a href="http://lattes.cnpq.br/4521927510441276" target="_blank">Lattes</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
