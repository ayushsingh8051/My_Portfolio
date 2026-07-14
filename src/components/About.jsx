import { motion } from 'framer-motion';
import { Terminal, Database, Code, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
  const skills = [
    {
      title: "AI/LLM",
      icon: <Cpu size={32} />,
      items: ["RAG", "LangChain", "ChromaDB", "Ollama", "Llama 3", "LangSmith"]
    },
    {
      title: "Backend",
      icon: <Terminal size={32} />,
      items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT"]
    },
    {
      title: "Frontend",
      icon: <Code size={32} />,
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Figma"]
    },
    {
      title: "Databases/Tools",
      icon: <Database size={32} />,
      items: ["MySQL", "MongoDB", "Redis", "SQLite", "Git", "PostgreSQL"]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Full Stack & AI Engineer</h3>
            <p>
              I am a BCA graduate and a passionate AI Engineer & Full Stack Developer based in New Delhi, India. 
              My journey involves building reliable AI products, advanced RAG pipelines, and intelligent backend services.
            </p>
            <p>
              With hands-on experience in LLM applications, vector databases, and full-stack development, 
              I specialize in bridging the gap between cutting-edge AI models and functional, modern web applications.
            </p>
            
            <div className="education-box">
              <h4>Education</h4>
              <ul>
                <li><strong>BCA (2023 - 2026):</strong> L.N. Mishra Institute of Social Development and Economic Change</li>
                <li><strong>Intermediate (2020 - 2022):</strong> Global International School</li>
              </ul>
            </div>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Tilt key={skill.title} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                <motion.div 
                  className="skill-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.title}</h4>
                  <div className="skill-tags">
                    {skill.items.map(item => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
