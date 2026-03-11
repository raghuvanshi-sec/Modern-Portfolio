import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/raghuvanshi-sec/repos?sort=updated&per_page=15');
        const data = await response.json();
        
        const excludedRepos = ['backend', 'rest', 'my-git-info', 'raghuvanshi-sec'];
        const filteredData = data.filter(repo => !excludedRepos.includes(repo.name.toLowerCase()));
        
        const imageMap = {
          'cyberquest': '/projects/cyberquest_app_ui.png',
          'formulatebrd': '/projects/formulatebrd_app_ui.png',
          'malaria-detection': '/projects/malaria_app_ui.png',
          'modern-portfolio': '/projects/modern_portfolio_ui.png',
          'phishguard': '/projects/phishguard_app_ui.png',
          'phishhunter': '/projects/phishhunter_app_ui.png',
          'portfolio': '/projects/portfolio_project_image.png',
          'trustlayer-x': '/projects/trustlayer_app_ui.png',
          'wonderlust': '/projects/wonderlust_app_ui.png',
          'youtube-music-clone': '/projects/youtube_music_ui.png'
        };

        const formattedRepos = filteredData.map(repo => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' '),
          sub: repo.description || "No description provided.",
          tag: repo.language || "Security",
          url: repo.html_url,
          emoji: ["🚀", "⚡", "🛡️", "🔧", "💻", "🔬", "🤖"][Math.floor(Math.random() * 7)],
          image: imageMap[repo.name.toLowerCase()] || null
        }));

        setProjects(formattedRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="work">
      <div className="section">
        <div className="section-label">Selected Work</div>
        <motion.h2 
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          Featured<br/><em>Projects</em>
        </motion.h2>

        {loading ? (
          <div style={{ color: 'var(--muted)' }}>Fetching repositories...</div>
        ) : (
          <motion.div 
            className="work-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {projects.map((proj) => (
              <motion.a 
                href={proj.url} 
                target="_blank" 
                rel="noreferrer" 
                className="proj-card" 
                key={proj.id} 
                variants={itemVariants}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="proj-img" />
                ) : (
                  <div className="proj-placeholder">{proj.emoji}</div>
                )}
                <div className="proj-overlay">
                  <span className="proj-tag">{proj.tag}</span>
                  <div className="proj-overlay-title">{proj.title}</div>
                </div>
                <div className="proj-card-info">
                  <div className="proj-card-title">{proj.title}</div>
                  <div className="proj-card-sub">{proj.sub}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Work;
