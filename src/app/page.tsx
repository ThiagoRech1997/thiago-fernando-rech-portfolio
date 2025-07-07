import Image from "next/image";

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
            <p>Back-End Developer | Python, JavaScript, C#, Java | SQL Server, Oracle, Postgres</p>
            <p>Git, GitHub, GitLab, DevOps, Docker | MVC, Hexagonal Architecture</p>
            <a href="#contato" className="btn">Entre em contato</a>
          </div>
          <div className="hero-image">
            <Image
              src="/profile.png"
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
              <p>Back-End Developer com experiência sólida em desenvolvimento de software, atuando como DBA/ETL na área financeira, garantindo a performance, disponibilidade e integridade de sistemas críticos. Experiência com Microsoft SQL Server, Oracle, PostgreSQL, Python, JavaScript, TypeScript, C# e Java, com foco em automação de processos, desenvolvimento backend e sustentação de dados bancários.</p>
              <p>Capacidade comprovada em otimização de queries SQL, resolução de incidentes críticos, manutenção de pipelines ETL e integração de sistemas via REST APIs. Forte compromisso com boas práticas de desenvolvimento, segurança da informação e eficiência operacional. Experiência com tecnologias modernas como Docker, Git, GitHub, GitLab e metodologias DevOps.</p>
              <p>Formado em Ciência da Computação pela Universidade Tecnológica Federal do Paraná, com vasta experiência em pesquisa acadêmica e projetos práticos. Contribuidor ativo da comunidade open source com 37 repositórios no GitHub e reconhecimento como Pull Shark e Arctic Code Vault Contributor.</p>
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
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">GitLab</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">MVC</span>
                <span className="skill-tag">Arquitetura Hexagonal</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">Composer</span>
                <span className="skill-tag">Ubuntu</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">Unreal Engine</span>
                <span className="skill-tag">Arduino</span>
                <span className="skill-tag">Raspberry Pi</span>
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

      <section className="section" style={{backgroundColor: "#f8f9fa"}}>
        <div className="container">
          <div className="section-header">
            <h2>Conquistas e Reconhecimentos</h2>
            <p>Marcos importantes na minha jornada profissional</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <h3>Pull Shark x2</h3>
              <p>Reconhecimento do GitHub por contribuições significativas em pull requests</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">❄️</div>
              <h3>Arctic Code Vault Contributor</h3>
              <p>Contribuidor do Arctic Code Vault - arquivo de código preservado para futuras gerações</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">📚</div>
              <h3>37 Repositórios</h3>
              <p>Portfólio diversificado com projetos em Python, C#, JavaScript, Shell e mais</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🌟</div>
              <h3>84 Stars</h3>
              <p>Projetos reconhecidos pela comunidade de desenvolvedores</p>
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
              <div className="project-image" style={{width: '100%', height: 180, position: 'relative'}}>
                <Image src="/toneforge.svg" alt="Arte do ToneForge" fill style={{objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              </div>
              <div className="project-content">
                <h3 className="project-title">ToneForge - Pedaleira Digital Profissional</h3>
                <p>Pedaleira digital profissional para Android com processamento de áudio em tempo real. 9 efeitos profissionais, latência ultra-baixa (&lt;3ms), looper multi-track, afinador preciso e suporte MIDI.</p>
                <div className="project-tags">
                  <span className="project-tag">Java</span>
                  <span className="project-tag">C++</span>
                  <span className="project-tag">Android</span>
                  <span className="project-tag">JNI</span>
                  <span className="project-tag">Audio DSP</span>
                  <span className="project-tag">MIDI</span>
                </div>
                <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                  <a href="https://thiagorech1997.github.io/toneforge-landing/" target="_blank" rel="noopener noreferrer" className="btn">Ver página do ToneForge</a>
                  <a href="https://github.com/ThiagoRech1997/ToneForge" target="_blank" rel="noopener noreferrer" className="btn" style={{backgroundColor: "#6c757d"}}>Ver no GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🌾</div>
              <div className="project-content">
                <h3 className="project-title">Farm Management System</h3>
                <p>Sistema completo para gerenciamento de fazenda com controle de animais, ninhadas, pesagens e vacinas. Projeto fullstack com NestJS e Next.js.</p>
                <div className="project-tags">
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">NestJS</span>
                  <span className="project-tag">Next.js</span>
                  <span className="project-tag">SQLite</span>
                </div>
                <a href="https://github.com/ThiagoRech1997/farm" target="_blank" rel="noopener noreferrer" className="btn">Ver no GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">YOLO</div>
              <div className="project-content">
                <h3 className="project-title">Análise Estatística de Rede YOLO</h3>
                <p>Projeto de análise estatística aplicando YOLO (You Only Look Once) para detecção de objetos e análise de rede neural.</p>
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">YOLO</span>
                  <span className="project-tag">OpenCV</span>
                </div>
                <a href="https://github.com/ThiagoRech1997/Yolo-network-statistical-analysis" target="_blank" rel="noopener noreferrer" className="btn">Ver no GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">Loja</div>
              <div className="project-content">
                <h3 className="project-title">Sistema de Loja de Eletrônicos</h3>
                <p>Sistema gerenciador de banco de dados para loja de eletrônicos, desenvolvido em C# como projeto acadêmico na UTFPR.</p>
                <div className="project-tags">
                  <span className="project-tag">C#</span>
                  <span className="project-tag">SQL Server</span>
                  <span className="project-tag">MVC</span>
                </div>
                <a href="https://github.com/ThiagoRech1997/LojaEletronicos" target="_blank" rel="noopener noreferrer" className="btn">Ver no GitHub</a>
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
              <a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank" rel="noopener noreferrer">thiago-fernando-rech</a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <a href="https://github.com/ThiagoRech1997" target="_blank" rel="noopener noreferrer">ThiagoRech1997</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2025 Thiago Fernando Rech. Todos os direitos reservados.</p>
          <ul className="social-links">
            <li><a href="https://github.com/ThiagoRech1997" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/thiago.rech1/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="http://lattes.cnpq.br/4521927510441276" target="_blank" rel="noopener noreferrer">Lattes</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
