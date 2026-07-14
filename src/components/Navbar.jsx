import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className={`header ${scrolled ? 'glass header-scrolled' : ''}`}>
      <div className="container header-container">
        <motion.a 
          href="#home" 
          className="logo text-gradient"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.a>

        <nav className="navbar">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={active === link.href.substring(1) ? 'active' : ''}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActive(link.href.substring(1))}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        
        <motion.div 
          className="nav-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="/src/assets/resume.pdf" download className="btn btn-outline nav-btn">
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
