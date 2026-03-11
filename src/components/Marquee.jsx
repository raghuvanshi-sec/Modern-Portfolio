const Marquee = () => {
  const items = [
    "Threat Analysis", "Nmap", "Binary Analysis", "JavaScript", "MERN Stack", 
    "Machine Learning", "NLP", "Computer Vision", "Node.js", "MongoDB", 
    "React", "Linux", "REST APIs", "Git & GitHub", "Phishing Detection", "Network Recon"
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, index) => (
          <div className="marquee-item" key={`orig-${index}`}>
            <span className="marquee-dot"></span>{item}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <div className="marquee-item" key={`dup-${index}`}>
            <span className="marquee-dot"></span>{item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
