import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Project Development Intern",
      company: "PaySprint",
      period: "May 2026 - Aug 2026",
      points: [
        "Building an AI assistant/chatbot for business/product support and leave-management workflows using FastAPI, LangChain and RAG.",
        "Developed RAG pipeline with PDF ingestion, chunking, embeddings, ChromaDB vector search and Ollama/Llama 3 response generation.",
        "Added Redis short-term memory and MySQL long-term storage to maintain chat sessions, active workflows and user context.",
        "Designed intent routing and tool-calling logic for policy search, leave request capture, date handling and database actions.",
        "Used LangSmith-style tracing and evaluation concepts to debug responses, monitor retrieval quality and improve prompt behavior."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "North Bihar Power Distribution Company Limited",
      period: "Jan 2026 - Mar 2026",
      points: [
        "Developed a full-stack Employee Management System using the MERN stack.",
        "Implemented JWT-based authentication and authorization for secure user login and access control.",
        "Built RESTful APIs using Node.js and Express.js for employee data CRUD operations.",
        "Designed responsive React.js UI and integrated MongoDB for efficient data handling."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glass">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company} </h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
