"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="container navbar">
        <div className="logo">TR</div>
        
        <div className="nav-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#sobre" onClick={closeMobileMenu}>Sobre</a></li>
          <li><a href="#experiencia" onClick={closeMobileMenu}>Experiência</a></li>
          <li><a href="#projetos" onClick={closeMobileMenu}>Projetos</a></li>
          <li><a href="#blog" onClick={closeMobileMenu}>Blog</a></li>
          <li><a href="#contato" onClick={closeMobileMenu}>Contato</a></li>
        </ul>
      </div>
    </header>
  );
} 