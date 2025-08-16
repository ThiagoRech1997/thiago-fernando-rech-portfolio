"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  challenges?: string;
  learnings?: string;
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        {image.startsWith('/') ? (
          <Image
            src={image}
            alt={`Imagem do projeto ${title}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="project-placeholder">
            {image}
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Ver Página
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Ver no GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 