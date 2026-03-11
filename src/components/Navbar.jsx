import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }} // Appears after loader
      style={{
        mixBlendMode: scrolled ? 'normal' : 'difference',
        background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none'
      }}
    >
      <a href="#" className="nav-logo">Satyam<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">Resume ↗</a></li>
        <li><a href="https://satyamraghuvanshi-portfolio.netlify.app" target="_blank" rel="noreferrer" className="nav-links-secondary">Portfolio</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
