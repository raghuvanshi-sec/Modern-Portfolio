import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: `"Satyam showed exceptional commitment during his internship — his binary analysis work and threat reports were well beyond what we expected from an intern at his level."`,
    name: "InternsElite Mentor",
    role: "Cybersecurity · InternsElite",
    date: "June 2024"
  },
  {
    quote: `"The PhishGuard project demonstrated a rare combination of machine learning knowledge and security awareness. The real-time QR code detection alone was impressive engineering."`,
    name: "Academic Supervisor",
    role: "JNCT Bhopal · Computer Science",
    date: "2024"
  },
  {
    quote: `"Satyam's CyberQuest platform was thoughtfully designed — gamifying security education is hard, but he made the labs and challenges genuinely engaging and technically rigorous."`,
    name: "Peer Collaborator",
    role: "Full-Stack Development · Peer Review",
    date: "2024"
  },
  {
    quote: `"Strong communicator, rapid learner. Satyam consistently brought energy and precision to every task — from network scanning to writing clean, readable JavaScript."`,
    name: "Team Lead · InternsElite",
    role: "Security Operations",
    date: "June 2024"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="test-inner">
        <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          Peer Recognition
        </motion.div>
        <motion.h2 className="section-heading" style={{ marginBottom: '3rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          What People<br/><em>Say</em>
        </motion.h2>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="test-track">
          {testimonials.map((test, index) => (
            <div className="test-card" key={`orig-${index}`}>
              <div className="test-quote">{test.quote}</div>
              <div className="test-name">{test.name}</div>
              <div className="test-role">{test.role}</div>
              <div className="test-date">{test.date}</div>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {testimonials.map((test, index) => (
            <div className="test-card" key={`dup-${index}`}>
              <div className="test-quote">{test.quote}</div>
              <div className="test-name">{test.name}</div>
              <div className="test-role">{test.role}</div>
              <div className="test-date">{test.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
