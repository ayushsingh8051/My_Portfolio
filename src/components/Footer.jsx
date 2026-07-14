import './Footer.css';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="text-gradient">Ayush Kumar</h2>
            <p>AI Engineer & Full Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons-footer">
              <a href="https://github.com/ayushsingh8051" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/ayush-kumar-45b4331a9" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:tkdayush120934@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ayush Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
