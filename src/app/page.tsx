"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin, Github, Instagram, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { projects, projectCategories, projectYears } from "@/data/projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || project.year.toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <section id="home" className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Thiago Fernando Rech</h1>
            <p>Back-End Developer | Python, JavaScript, C#, Java | SQL Server, Oracle, Postgres</p>
            <p>Git, GitHub, GitLab, DevOps, Docker | MVC, Hexagonal Architecture</p>
            <div className="hero-buttons">
              <a href="#contato" className="btn">Entre em contato</a>
              <a 
                href={process.env.NEXT_PUBLIC_CV_URL || "/curriculo-thiago-fernando-rech.pdf"} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Download size={16} />
                Baixar CV
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="Thiago Fernando Rech"
              width={400}
              height={400}
              style={{ borderRadius: "50%" }}
            />
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Sobre Mim</h2>
            <p>Conheça um pouco da minha trajetória e habilidades</p>
          </motion.div>
          
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>Back-End Developer com experiência sólida em desenvolvimento de software, atuando como DBA/ETL na área financeira, garantindo a performance, disponibilidade e integridade de sistemas críticos. Experiência com Microsoft SQL Server, Oracle, PostgreSQL, Python, JavaScript, TypeScript, C# e Java, com foco em automação de processos, desenvolvimento backend e sustentação de dados bancários.</p>
              <p>Capacidade comprovada em otimização de queries SQL, resolução de incidentes críticos, manutenção de pipelines ETL e integração de sistemas via REST APIs. Forte compromisso com boas práticas de desenvolvimento, segurança da informação e eficiência operacional. Experiência com tecnologias modernas como Docker, Git, GitHub, GitLab e metodologias DevOps.</p>
              <p>Formado em Ciência da Computação pela Universidade Tecnológica Federal do Paraná, com vasta experiência em pesquisa acadêmica e projetos práticos. Contribuidor ativo da comunidade open source com 37 repositórios no GitHub e reconhecimento como Pull Shark e Arctic Code Vault Contributor.</p>
            </motion.div>
            
            <motion.div
              className="skills"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section" style={{backgroundColor: "var(--light-bg)"}}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Experiência Profissional</h2>
            <p>Minha trajetória no mercado de trabalho</p>
          </motion.div>

          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">💻</div>
                <div className="timeline-date">Mar 2025 - Presente</div>
                <h3 className="timeline-title">Engenheiro de Software</h3>
                <div className="timeline-company">Silicon Village</div>
                <p>Atuação como engenheiro de software, aplicando conhecimentos em desenvolvimento backend e bancos de dados para soluções empresariais.</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">🗃️</div>
                <div className="timeline-date">Fev 2024 - Fev 2025</div>
                <h3 className="timeline-title">Especialista em ETL</h3>
                <div className="timeline-company">Stellantis (Terceirizado pela Silicon Village)</div>
                <p>Sustentação e monitoramento de banco de dados Microsoft SQL Server, análise e otimização de queries SQL, suporte na execução e manutenção de processos ETL para operações financeiras.</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">🎓</div>
                <div className="timeline-date">Fev 2024 - Fev 2025</div>
                <h3 className="timeline-title">Estágio</h3>
                <div className="timeline-company">Silicon Village</div>
                <p>Atuação em sustentação de banco de dados, resolução de incidentes em sistemas críticos e desenvolvimento de documentação técnica.</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">🏛️</div>
                <div className="timeline-date">Mar 2023 - Mar 2024</div>
                <h3 className="timeline-title">Diretor de Assuntos Gerais</h3>
                <div className="timeline-company">Centro Acadêmico de Ciência da Computação (CACOMP) - UTFPR</div>
                <p>Atuação na representação estudantil e organização de eventos acadêmicos.</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">🔬</div>
                <div className="timeline-date">Jul 2017 - Dez 2022</div>
                <h3 className="timeline-title">Pesquisador</h3>
                <div className="timeline-company">Universidade Tecnológica Federal do Paraná</div>
                <p>Desenvolvimento de pesquisas na área de computação por mais de 5 anos.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: "var(--light-bg)"}}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Conquistas e Reconhecimentos</h2>
            <p>Marcos importantes na minha jornada profissional</p>
          </motion.div>
          
          <div className="achievements-grid">
            <motion.div
              className="achievement-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">🏆</div>
              <h3>Pull Shark x2</h3>
              <p>Reconhecimento do GitHub por contribuições significativas em pull requests</p>
            </motion.div>
            
            <motion.div
              className="achievement-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">❄️</div>
              <h3>Arctic Code Vault Contributor</h3>
              <p>Contribuidor do Arctic Code Vault - arquivo de código preservado para futuras gerações</p>
            </motion.div>
            
            <motion.div
              className="achievement-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">📚</div>
              <h3>37 Repositórios</h3>
              <p>Portfólio diversificado com projetos em Python, C#, JavaScript, Shell e mais</p>
            </motion.div>
            
            <motion.div
              className="achievement-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">🌟</div>
              <h3>84 Stars</h3>
              <p>Projetos reconhecidos pela comunidade de desenvolvedores</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Projetos</h2>
            <p>Alguns dos meus trabalhos mais recentes</p>
          </motion.div>

          <motion.div
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="filter-group">
              <label htmlFor="category-filter">Categoria:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {projectCategories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year-filter">Ano:</label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {projectYears.map(year => (
                  <option key={year.value} value={year.value}>
                    {year.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>Nenhum projeto encontrado com os filtros selecionados.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section id="contato" className="section" style={{backgroundColor: "var(--light-bg)"}}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Contato</h2>
            <p>Vamos trabalhar juntos? Entre em contato</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <h3>Email</h3>
                <p>thiagorech.1997@gmail.com</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <h3>Telefone</h3>
                <p>+55 (45) 99135-2082</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank" rel="noopener noreferrer">
                  thiago-fernando-rech
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <h3>GitHub</h3>
                <a href="https://github.com/ThiagoRech1997" target="_blank" rel="noopener noreferrer">
                  ThiagoRech1997
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Thiago Fernando Rech. Todos os direitos reservados.</p>
          <ul className="social-links">
            <li>
              <a href="https://github.com/ThiagoRech1997" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thiago.rech1/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </li>
            <li>
              <a href="http://lattes.cnpq.br/4521927510441276" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
