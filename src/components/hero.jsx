import mo from '../assets/img/meee.jpg';
import '../App.css';

function Hero() {
  return (
    <div className="landing-page">
      <div className="sidebar">
        <h1>PORTFOLIO</h1>
        <div className="info">
          <h2>
            MY NAME IS <span>ZEINAB</span>
          </h2>
          <p className="role">I'M A GRAPHIC DESIGNER</p>
        </div>
      </div>

      <div className="main-content">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#works">WORKS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="content">
          <img src={mo} alt="Profile" className="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
