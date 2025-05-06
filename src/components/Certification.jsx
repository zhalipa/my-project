import React from 'react';
import './Cert.css'; 
import Navbar from './navbar'; 

// Correct way to import images (use unique variable names)
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import p6 from "../assets/img/p6.jpg";
import p7 from "../assets/img/p7.jpg";
import p8 from "../assets/img/p8.jpg";
import p9 from "../assets/img/p9.jpg";
import p10 from "../assets/img/p10.jpg";
import p11 from "../assets/img/p11.jpg";
import p12 from "../assets/img/p12.jpg";
import p13 from "../assets/img/p13.jpg";
import p14 from "../assets/img/p14.jpg";
import p15 from "../assets/img/p15.jpg";
import p16 from "../assets/img/p16.jpg";

const Certifications = () => {
  // Use the imported images directly
  const certificationImages = [
    p1, p2, p3, p4, p5, p6, p7, p8,
    p9, p10, p11, p12, p13, p14, p15, p16
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        <Navbar />
        <h2 className="section-title">My Certifications</h2>
        
        <div className="certifications-grid">
          {certificationImages.map((image, index) => (
            <div className="certification-item" key={index}>
              <img 
                src={image} 
                alt={`React Certification ${index + 1}`} 
                className="certification-image"
              />
              <div className="certification-overlay">
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;