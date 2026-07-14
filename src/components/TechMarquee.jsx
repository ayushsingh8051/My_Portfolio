import './TechMarquee.css';

const TechMarquee = () => {
  const techStack = [
    "Python", "React.js", "FastAPI", "Node.js", "LangChain", 
    "MongoDB", "ChromaDB", "Redis", "MySQL", "PostgreSQL",
    "Tailwind CSS", "Ollama", "PyTorch", "Figma", "Git"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Double the list for seamless infinite scroll */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="marquee-item glass">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
