const Footer = () => {
  return (
    <footer>
      <div className="foot-logo">Satyam<span>.</span></div>
      <div className="foot-copy">© {new Date().getFullYear()} Satyam Raghuvanshi. All rights reserved.</div>
      <div className="foot-role">Security Engineer · Bhopal, India</div>
    </footer>
  );
};

export default Footer;
