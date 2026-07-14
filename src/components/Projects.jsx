import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Leave Management & Company Policy Chatbot",
      tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "Ollama/Llama 3", "Redis", "MySQL", "LangSmith"],
      description: "A conversational AI system answering company-policy queries through RAG and performing leave-related actions via tool calling. Implemented semantic search using embeddings and designed active-flow memory for follow-up messages.",
      github: "#",
      live: "#"
    },
    {
      title: "VideoForge - Local AI Text-to-Video",
      tech: ["React", "FastAPI", "Ollama", "PyTorch", "ModelScope", "SQLite", "FFmpeg"],
      description: "Privacy-first text-to-video system generating video locally without third-party APIs. Planned backend pipeline for prompt processing, model execution, progress streaming, and output management.",
      github: "#",
      live: "#"
    },
    {
      title: "Frontend Real User Monitoring (RUM) System",
      tech: ["JavaScript SDK", "Collector API", "PostgreSQL", "React Dashboard"],
      description: "Frontend monitoring system to capture page views, core web vitals (LCP, INP, CLS), JS errors, and device data. Proposed lightweight SDK and dashboard to debug real-user performance.",
      github: "#",
      live: "#"
    },
    {
      title: "Employee Management System",
      tech: ["MERN Stack", "JWT", "REST APIs", "MongoDB"],
      description: "An admin-oriented CRUD web application with authentication, secure employee data handling, and responsive React pages.",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt 
              key={index} 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.02} 
              transitionSpeed={2500} 
              className="project-tilt-wrapper"
            >
              <motion.div 
                className="project-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image-placeholder">
                  <div className="image-overlay"></div>
                  <span>{project.title.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="btn-outline btn" aria-label="GitHub">
                      <FaGithub size={18} /> Code
                    </a>
                    <a href={project.live} className="btn-primary btn" aria-label="Live Demo">
                      <ExternalLink size={18} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
