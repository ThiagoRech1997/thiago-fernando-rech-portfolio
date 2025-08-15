export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  challenges?: string;
  learnings?: string;
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  year: number;
  category: 'mobile' | 'web' | 'desktop' | 'ai' | 'iot';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ToneForge - Pedaleira Digital Profissional",
    description: "Pedaleira digital profissional para Android com processamento de áudio em tempo real. 9 efeitos profissionais, latência ultra-baixa (<3ms), looper multi-track, afinador preciso e suporte MIDI.",
    image: "/toneforge.svg",
    technologies: ["Java", "C++", "Android", "JNI", "Audio DSP", "MIDI"],
    challenges: "Implementar processamento de áudio em tempo real com latência ultra-baixa, integração entre Java e C++ via JNI, e otimização de performance para dispositivos móveis.",
    learnings: "Processamento de áudio digital, programação nativa Android, otimização de performance, integração de bibliotecas nativas e desenvolvimento de interfaces de usuário para músicos.",
    githubUrl: "https://github.com/ThiagoRech1997/ToneForge",
    liveUrl: "https://thiagorech1997.github.io/toneforge-landing/",
    year: 2024,
    category: "mobile"
  },
  {
    id: 2,
    title: "Farm Management System",
    description: "Sistema completo para gerenciamento de fazenda com controle de animais, ninhadas, pesagens e vacinas. Projeto fullstack com NestJS e Next.js.",
    image: "🌾",
    technologies: ["TypeScript", "NestJS", "Next.js", "SQLite", "Prisma"],
    challenges: "Criar uma arquitetura escalável para gerenciamento de dados complexos de fazenda, implementar sistema de permissões e garantir performance com grandes volumes de dados.",
    learnings: "Arquitetura de microserviços, TypeScript avançado, ORM com Prisma, desenvolvimento fullstack e boas práticas de desenvolvimento backend.",
    githubUrl: "https://github.com/ThiagoRech1997/farm",
    year: 2024,
    category: "web"
  },
  {
    id: 3,
    title: "Análise Estatística de Rede YOLO",
    description: "Projeto de análise estatística aplicando YOLO (You Only Look Once) para detecção de objetos e análise de rede neural.",
    image: "YOLO",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "NumPy"],
    challenges: "Implementar e otimizar algoritmos de detecção de objetos, processar grandes volumes de dados de imagem e interpretar resultados estatísticos complexos.",
    learnings: "Visão computacional, deep learning, processamento de imagens, análise estatística e otimização de algoritmos de IA.",
    githubUrl: "https://github.com/ThiagoRech1997/Yolo-network-statistical-analysis",
    year: 2023,
    category: "ai"
  },
  {
    id: 4,
    title: "Sistema de Loja de Eletrônicos",
    description: "Sistema gerenciador de banco de dados para loja de eletrônicos, desenvolvido em C# como projeto acadêmico na UTFPR.",
    image: "Loja",
    technologies: ["C#", "SQL Server", "MVC", "Entity Framework", "ASP.NET"],
    challenges: "Desenvolver um sistema completo de gestão comercial, implementar padrão MVC, criar interface intuitiva e garantir integridade dos dados.",
    learnings: "Desenvolvimento com C#, padrões de arquitetura MVC, Entity Framework, SQL Server e desenvolvimento de aplicações desktop.",
    githubUrl: "https://github.com/ThiagoRech1997/LojaEletronicos",
    year: 2023,
    category: "desktop"
  },
  {
    id: 5,
    title: "Sistema de Monitoramento IoT",
    description: "Sistema de monitoramento remoto usando Arduino e Raspberry Pi para coleta de dados de sensores e visualização em tempo real.",
    image: "📡",
    technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT", "Node.js"],
    challenges: "Integrar diferentes plataformas (Arduino, Raspberry Pi), implementar comunicação MQTT, criar dashboard em tempo real e garantir estabilidade do sistema.",
    learnings: "IoT, comunicação entre dispositivos, protocolos MQTT, desenvolvimento de dashboards e integração de hardware com software.",
    githubUrl: "https://github.com/ThiagoRech1997/iot-monitoring",
    year: 2023,
    category: "iot"
  },
  {
    id: 6,
    title: "API REST para Gestão de Usuários",
    description: "API REST completa para gestão de usuários com autenticação JWT, validação de dados e documentação Swagger.",
    image: "🔐",
    technologies: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
    challenges: "Implementar sistema de autenticação seguro, criar documentação automática da API, implementar validação robusta e garantir segurança dos dados.",
    learnings: "Desenvolvimento de APIs REST, autenticação JWT, documentação de APIs, segurança de aplicações e boas práticas de desenvolvimento backend.",
    githubUrl: "https://github.com/ThiagoRech1997/user-management-api",
    year: 2024,
    category: "web"
  }
];

export const projectCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'ai', label: 'IA/Machine Learning' },
  { value: 'iot', label: 'IoT' }
];

export const projectYears = [
  { value: 'all', label: 'Todos os anos' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' }
]; 