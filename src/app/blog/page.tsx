"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

// Dados mockados dos posts - em produção, isso viria de um CMS ou API
const blogPosts = [
  {
    id: 1,
    title: "Desenvolvimento de APIs REST com Node.js e Express",
    excerpt: "Aprenda como criar APIs RESTful robustas e escaláveis usando Node.js, Express e boas práticas de desenvolvimento.",
    content: "Conteúdo completo do post...",
    date: "2025-01-15",
    readTime: "8 min",
    tags: ["Node.js", "Express", "API", "Backend"],
    slug: "apis-rest-nodejs-express"
  },
  {
    id: 2,
    title: "Otimização de Performance em Bancos de Dados SQL",
    excerpt: "Técnicas avançadas para otimizar consultas SQL e melhorar a performance de bancos de dados em produção.",
    content: "Conteúdo completo do post...",
    date: "2025-01-10",
    readTime: "12 min",
    tags: ["SQL", "Performance", "Database", "Otimização"],
    slug: "otimizacao-performance-sql"
  },
  {
    id: 3,
    title: "Introdução ao Docker para Desenvolvedores",
    excerpt: "Guia prático para começar com Docker: containers, imagens e orquestração de aplicações.",
    content: "Conteúdo completo do post...",
    date: "2025-01-05",
    readTime: "10 min",
    tags: ["Docker", "Containers", "DevOps", "Deploy"],
    slug: "introducao-docker-desenvolvedores"
  },
  {
    id: 4,
    title: "Arquitetura Hexagonal: Princípios e Implementação",
    excerpt: "Entenda os conceitos da arquitetura hexagonal e como aplicá-la em projetos reais para melhorar a manutenibilidade.",
    content: "Conteúdo completo do post...",
    date: "2024-12-28",
    readTime: "15 min",
    tags: ["Arquitetura", "Clean Code", "Design Patterns", "SOLID"],
    slug: "arquitetura-hexagonal-principios"
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Blog</h1>
          <p>Artigos sobre desenvolvimento, tecnologia e experiências profissionais</p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-card-header">
                <div className="blog-meta">
                  <span className="blog-date">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="blog-read-time">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="blog-card-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>

              <div className="blog-card-footer">
                <Link href={`/blog/${post.slug}`} className="read-more">
                  Ler mais
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-newsletter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Fique por dentro das novidades</h3>
          <p>Inscreva-se para receber novos artigos diretamente no seu email</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Seu email"
              className="newsletter-input"
            />
            <button className="btn">Inscrever-se</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 