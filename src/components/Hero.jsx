const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg-text">SATYAM</div>
      <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
        <p className="hero-tag">Cybersecurity &amp; Full-Stack Engineer · Bhopal, India</p>
        <h1 className="hero-name">Satyam<span>.</span></h1>
        <div className="hero-bottom">
          <p className="hero-role">
            <strong>Web Developer &amp; Cybersecurity Enthusiast</strong><br />
            Building AI-driven security tools and full-stack applications that protect and perform.
          </p>
          <div className="hero-scroll">
            <div className="scroll-arrow"></div>
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
