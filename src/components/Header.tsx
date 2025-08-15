"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Removido HeaderProps pois não há mais props obrigatórias

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header`}>
      <div className="container navbar">
        <div className="logo">TR</div>
        
        <div className="nav-controls">
          
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
          <li><a href="#contato" onClick={closeMobileMenu}>Contato</a></li>
        </ul>
      </div>
    </header>
  );
} 