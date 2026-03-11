import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Cybersecurity & Threat Analysis",
    desc: "Identifying vulnerabilities through network scanning, binary analysis, and active threat modelling — turning offensive knowledge into defensive systems that hold."
  },
  {
    num: "02",
    title: "Full-Stack Development",
    desc: "Building end-to-end applications with the MERN stack — from clean React frontends to robust Node.js backends with MongoDB and RESTful API architecture."
  },
  {
    num: "03",
    title: "AI-Driven Security Tools",
    desc: "Applying Machine Learning, NLP, and Computer Vision to automate detection of phishing, malicious URLs, QR codes, and suspicious emails in real time."
  },
  {
    num: "04",
    title: "Security Research & Documentation",
    desc: "Conducting deep-dive vulnerability research, low-level binary analysis, and translating complex security findings into structured, actionable documentation."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Services = () => {
  return (
    <section id="services">
      <div className="section">
        <div className="section-label">What I Do</div>
        <motion.h2 
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          Core<br/><em>Capabilities</em>
        </motion.h2>

        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((svc, index) => (
            <motion.div className="service-card" key={index} variants={itemVariants}>
              <div className="svc-num">{svc.num}</div>
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
