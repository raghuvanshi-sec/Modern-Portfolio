import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const About = () => {
  return (
    <section id="about">
      <div className="section">
        <div className="about-grid">
          <div>
            <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              About Me
            </motion.div>
            <motion.h2 
              className="section-heading" 
              style={{ marginBottom: '2rem' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
            >
              Design<br/>meets<br/><em>Security.</em>
            </motion.h2>
            
            <div className="about-text">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                I am a <strong>Computer Science undergraduate</strong> specializing in cybersecurity and full-stack development — with hands-on experience in threat analysis, network scanning, binary-level analysis, and secure web technologies.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.1 }}>
                My work lives at the intersection of offensive security thinking and clean engineering. I build tools that don't just function, they <strong>protect</strong> — from AI phishing detectors to gamified security platforms.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.2 }}>
                Actively seeking entry-level roles in <strong>cybersecurity, software engineering, or security operations</strong> where analytical thinking and problem-solving skills contribute to secure, scalable systems.
              </motion.p>
            </div>

            <div className="about-stats">
              <motion.div className="stat-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.1 }}>
                <div className="stat-num">9</div>
                <div className="stat-label">Projects Built</div>
              </motion.div>
              <motion.div className="stat-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.2 }}>
                <div className="stat-num">1</div>
                <div className="stat-label">Internship</div>
              </motion.div>
              <motion.div className="stat-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.3 }}>
                <div className="stat-num">7.1</div>
                <div className="stat-label">CGPA</div>
              </motion.div>
              <motion.div className="stat-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants} transition={{ delay: 0.4 }}>
                <div className="stat-num">'27</div>
                <div className="stat-label">Graduating</div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="about-img-wrap"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
          >
            <div className="about-img-box">
              <img src="/projects/profile.jpg" alt="Satyam Raghuvanshi" className="about-photo" />
              <div className="about-badge">
                <div className="ab-name" style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "var(--neon)", paddingBottom: "0.2rem" }}>Satyam Raghuvanshi</div>
                <div className="ab-role">Web Developer &amp; Cybersecurity Enthusiast</div>
                <div className="ab-loc">📍 Bhopal, India · B.E. CSE 2027</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
