import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, It's Me
          </motion.h3>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
          >
            Ayush <span className="text-gradient">Kumar</span>
          </motion.h1>
          
          <motion.h3 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            And I'm an <span className="text-gradient">AI Engineer & Full Stack Developer</span>
          </motion.h3>
          
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I build reliable AI products, automation systems, and intelligent backend services. 
            Passionate about LLMs, RAG pipelines, and creating seamless digital experiences.
          </motion.p>
          
          {/* <motion.div 
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="https://github.com/ayushsingh8051" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/ayush-kumar-45b4331a9" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:tkdayush120934@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hero-buttons"
          >
            <a href="/src/assets/resume.pdf" download className="btn btn-primary">Download Resume</a>
            <a href="#about" className="btn btn-outline">More About Me</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          
          <div className="avatar-wrapper">
            <div className="avatar-card glass">
              <div className="avatar-placeholder">
                {/* Replace src with your photo later */}
                <img src="/src/assets/profile.png" alt="Ayush Kumar" className="avatar-img" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} />
                <div className="avatar-fallback" style={{display: 'none'}}>
                  <span className="text-gradient">AK</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              className="floating-badge badge-1 glass"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span>⚛️ React</span>
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-2 glass"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <span>🤖 AI Engineer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
