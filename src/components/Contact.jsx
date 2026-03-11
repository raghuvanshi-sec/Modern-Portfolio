import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner">
        <motion.div className="section-label" style={{ justifyContent: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          Open to Opportunities
        </motion.div>
        <motion.h2 className="contact-big" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          Let's Work<br/><span>Together.</span>
        </motion.h2>
        <motion.p className="contact-sub" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          Actively seeking entry-level roles in cybersecurity, software engineering, or security operations. Whether it's a startup or an enterprise team, I'd love to hear from you.
        </motion.p>
        
        <motion.div className="contact-btns" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          <a href="mailto:satyamraghuvanshi220ct@gmail.com" className="btn-main">Send a Message ↗</a>
          <a href="https://satyamraghuvanshi-portfolio.netlify.app" target="_blank" rel="noreferrer" className="btn-sec">View Portfolio</a>
        </motion.div>

        <motion.div className="contact-links" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.a href="https://linkedin.com/in/satyam-0x" target="_blank" rel="noreferrer" className="clink" variants={itemVariants}>LinkedIn</motion.a>
          <motion.a href="https://github.com/raghuvanshi-sec" target="_blank" rel="noreferrer" className="clink" variants={itemVariants}>GitHub</motion.a>
          <motion.a href="mailto:satyamraghuvanshi220ct@gmail.com" className="clink" variants={itemVariants}>Email</motion.a>
          <motion.a href="tel:+919505494384" className="clink" variants={itemVariants}>+91 9505494384</motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
