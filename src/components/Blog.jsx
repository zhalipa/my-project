import React, { useState } from 'react';
import '../App.css';
import dayimage1 from "../assets/img/rizal.jpg";
import dayimage2 from "../assets/img/ssb.jpg";
import dayimage3 from "../assets/img/mqq.jpg";
import dayimage4 from "../assets/img/hy.jpg";
import dayimage5 from "../assets/img/traff.jpg";
import dayimage6 from "../assets/img/pmm.jpg";
import dayimage7 from "../assets/img/bp.jpg";
import Navbar from "./navbar";


function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const tourDays = [
    {
      id: 1,
      title: "Day 1: From Walls to Malls: A Day of Contrasts in Manila",
      date: "April 7, 2025",
      image: dayimage1, 
      summary: "Our educational tour kicked off with an arrival at...",
      fullContent: `
        <p>Our educational tour kicked off with an arrival at DJM Dormitory before diving into Manila’s rich history and vibrant present.
        We explored the storied walls of Intramuros, walked in the footsteps of heroes at Fort Santiago, and paid tribute to the national icon at Rizal Park. 
        The grandeur of Manila Cathedral left us in awe, while the bustling Mall of Asia showed us the city’s modern pulse. A perfect blend of past and present!</p>
      `
    },
    {
      id: 2,
      title: "Day 2: SBMA Deep Dive: Law Enforcement & Seaport Technology",
      date: "April 8, 2025",
      image: dayimage2,
      summary: "An early morning drive took us to Subic Bay, where we...",
      fullContent: `
        <p>An early morning drive took us to Subic Bay, where we witnessed cutting-edge operations. 
        At the SBMA Law Enforcement Communication Branch, we learned about crisis management and radio systems. 
        Later, the SBMA Seaport Department amazed us with their Vessel Traffic Management System, showcasing how technology keeps maritime trade smooth and secure.</p>
      `
    },
    {
        id: 3,
        title: "Day 3: Walking Through History & Nature’s Marvels",
        date: "April 9, 2025",
        image: dayimage3,
        summary: "A day of enlightenment! Museo ni Manuel Quezon taught us...",
        fullContent: `
          <p>A day of enlightenment! Museo ni Manuel Quezon taught us about the Philippines’ Commonwealth era, while the National Museum of Natural History dazzled us with biodiversity exhibits, from rare species to the iconic "Tree of Life" dome. A feast for the mind and eyes!</p>
        `
      },
      {
        id: 4,
        title: "Day 4: Money, Power, and Sustainable Futures",
        date: "April 10, 2025",
        image: dayimage4,
        summary: "At the Bangko Sentral ng Pilipinas, we peeked into...",
        fullContent: `
          <p>At the Bangko Sentral ng Pilipinas, we peeked into currency production and economic policies.
          The afternoon shifted to energy innovation at HYTEC Power Inc., where renewable solutions and engineering brilliance sparked discussions on sustainability.</p>
        `
      },
      {
        id: 5,
        title: "Day 5: Keeping Cities Moving: LRTA & Traffic Engineering",
        date: "April 11, 2025",
        image: dayimage5,
        summary: "We rode the LRT-2, dissecting its operations and...",
        fullContent: `
          <p>We rode the LRT-2, dissecting its operations and urban impact. 
          The Traffic Engineering Center revealed smart systems managing Metro Manila’s chaos—AI, sensors, and traffic algorithms at work! A lesson in efficient city planning.</p>
        `
      },
      {
        id: 6,
        title: "Day 6: Cool Adventures: From Strawberries to Soldier Discipline",
        date: "April 12, 2025",
        image: dayimage6,
        summary: "A sunrise arrival in Baguio led us through the...",
        fullContent: `
          <p>A sunrise arrival in Baguio led us through the Strawberry Farm, Chinese Bell Church, and the iconic Mansion House. 
          The Philippine Military Academy impressed with its discipline and cadet training—proof of leadership and patriotism in action.</p>
        `
      },
      {
        id: 7,
        title: "Day 7: Leisurely Goodbyes at Burnham & SM Baguio",
        date: "April 13, 2025",
        image: dayimage7,
        summary: "On our last day, we gathered to reflect on everything we'd experienced...",
        fullContent: `
          <p>On our last day, we gathered to reflect on everything we'd experienced during the week. Each group presented their research projects, sharing what they'd learned about the local culture.</p>
          
        `
      }
  ];
  
  
  const dayGalleries = {
      1: [dayimage1, dayimage2, dayimage3, dayimage4, dayimage5, dayimage6, dayimage7],
      2: [dayimage2, dayimage3, dayimage4],
      3: [dayimage3, dayimage4, dayimage5],
      4: [dayimage4, dayimage5, dayimage6],
      5: [dayimage5, dayimage6, dayimage7],
      6: [dayimage6, dayimage7, dayimage1],
      7: [dayimage7, dayimage1, dayimage2]
    };
  
  const handleDayClick = (day) => {
      setSelectedDay(day);
    };
  
  const handleBackClick = () => {
      setSelectedDay(null);
    };
  
  const openImageModal = (image) => {
      setSelectedImage(image);
    };
  
  const closeImageModal = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="app">
        <header className="header">
            <Navbar />
          <h1>Educational Tour Experience</h1>
          <p>A week-long journey of learning and discovery</p>
        </header>
  
        {selectedDay ? (
          <div className="day-detail">
            <button onClick={handleBackClick} className="back-button">
              &larr; Back to All Days
            </button>
            <h2>{selectedDay.title}</h2>
            <img src={selectedDay.image} alt={selectedDay.title} className="detail-image" />
            <div 
              className="content" 
              dangerouslySetInnerHTML={{ __html: selectedDay.fullContent }} 
            />


            
            <div className="gallery-section">
              <h3>Photo Gallery</h3>
              <div className="gallery-container">
                {dayGalleries[selectedDay.id]?.map((image, index) => (
                  <div 
                    key={index} 
                    className="gallery-item"
                    onClick={() => openImageModal(image)}
                  >
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="days-container">
            {tourDays.map((day) => (
              <div 
                key={day.id} 
                className="day-card"
                onClick={() => handleDayClick(day)}
              >
                <img src={day.image} alt={day.title} className="card-image" />
                <div className="card-content">
                  <h3>{day.title}</h3>
                  <p>{day.date}</p>
                  <p>{day.summary}</p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            ))}
          </div>
        )}
        
  
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={closeImageModal}>
                &times;
              </button>
              <img src={selectedImage} alt="Enlarged view" />
            </div>
          </div>
        )
    }
   
         <footer className="footer">
         <p>© {new Date().getFullYear()} Educational Tour Blog. All rights reserved.</p>
         </footer>
         </div>
        );
    }
  
  export default App;