import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="section">
        <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          My Career Journey
        </motion.div>
        <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          Professional<br/><em>Experience</em>
        </motion.h2>
        
        <div className="exp-timeline">
          <motion.div className="exp-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="exp-left">
              <div className="exp-date">Mar 2024 – Jun 2024</div>
              <div className="exp-company">InternsElite<br/>Remote</div>
            </div>
            <div className="exp-right">
              <div className="exp-title">Cybersecurity Intern</div>
              <ul className="exp-bullets">
                <li>Performed threat analysis to identify vulnerabilities and strengthen security posture.</li>
                <li>Conducted network reconnaissance and traffic analysis using Nmap for real-world scan scenarios.</li>
                <li>Analyzed and modified raw binary files to understand low-level data structures and attack surfaces.</li>
                <li>Executed website mirroring techniques for offline security testing and dependency analysis.</li>
              </ul>
              <div className="exp-tags">
                <span className="etag">Threat Analysis</span>
                <span className="etag">Nmap</span>
                <span className="etag">Binary Analysis</span>
                <span className="etag">Network Recon</span>
                <span className="etag">Website Mirroring</span>
                <span className="etag">Linux</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="exp-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.1 }}>
            <div className="exp-left">
              <div className="exp-date">Expected 2027</div>
              <div className="exp-company">Jai Narain College of Technology<br/>Bhopal, India</div>
            </div>
            <div className="exp-right">
              <div className="exp-title">B.E. — Computer Science &amp; Engineering</div>
              <ul className="exp-bullets">
                <li>Specializing in cybersecurity, full-stack development, and AI/ML applications.</li>
                <li>CGPA: 7.1 — actively building projects outside of curriculum to deepen practical skills.</li>
                <li>Developed PhishGuard, CyberQuest, Wonderlust, and FormulateBRD as portfolio projects.</li>
              </ul>
              <div className="exp-tags">
                <span className="etag">Computer Science</span>
                <span className="etag">Cybersecurity</span>
                <span className="etag">MERN Stack</span>
                <span className="etag">Machine Learning</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
