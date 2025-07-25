import React, { useState } from 'react';
import { FaBrain, FaProjectDiagram, FaCogs, FaUsers, FaSearch, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const services = [
  {
    id: 'knowledge',
    title: 'Knowledge Management',
    icon: FaBrain,
    description: 'Centralize your team’s knowledge with a powerful, searchable repository. Connect documents, notes, and web clippings into a unified knowledge graph.',
    limits: '10,000 documents / 1,000,000 text blocks',
    status: 'available'
  },
  {
    id: 'search',
    title: 'Semantic Search',
    icon: FaSearch,
    description: 'Go beyond keywords with our vector-based search. Find the most relevant information instantly, no matter how it’s phrased.',
    limits: '100,000 queries per month',
    status: 'available'
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    icon: FaCogs,
    description: 'Automate tagging, categorization, and summarization. Let our AI do the heavy lifting so you can focus on what matters.',
    limits: '5,000 automation runs per month',
    status: 'beta'
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    icon: FaUsers,
    description: 'Share knowledge, manage projects, and collaborate in real-time. Our platform is built for teams of all sizes.',
    limits: 'Up to 50 users per workspace',
    status: 'available'
  },
  {
    id: 'security',
    title: 'Private & Secure',
    icon: FaShieldAlt,
    description: 'With on-device processing and end-to-end encryption, your data is always private and secure. No compromises.',
    limits: 'Unlimited local data',
    status: 'backlog'
  }
];

const Solutions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <div className="mosaique-container">
      <div className="mosaique-content-wrapper">
        <div className="mosaique-header">
          <h1 className="mosaique-title">Our Solutions</h1>
          <p className="mosaique-subtitle">
            A suite of powerful, integrated tools designed to help you and your team manage knowledge effortlessly.
          </p>
        </div>

        <div className={`main-service-card ${currentService.status === 'backlog' ? 'disabled' : ''}`}>
          <div className="service-content">
            <div className="service-main-header">
              <div className="service-icon-wrapper">
                <currentService.icon size={32} className="service-icon" />
              </div>
              <h2 className="service-title">{currentService.title}</h2>
            </div>
            <p className="service-description">{currentService.description}</p>
            
            <div className="service-footer">
                <button className="get-started-button">Get Started</button>
                <div className="service-limits">
                    <span className="service-limits-label">Limits:</span>
                    <span className="service-limits-value">{currentService.limits}</span>
                </div>
            </div>

          </div>
        </div>

        <div className="service-navigation">
          <button className="nav-button" onClick={handlePrev}><FaChevronLeft /></button>
          <div className="nav-dots">
            {services.map((_, index) => (
              <button 
                key={index} 
                className={`nav-dot ${currentIndex === index ? 'active' : ''}`} 
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <button className="nav-button" onClick={handleNext}><FaChevronRight /></button>
        </div>

        <div className="service-overview-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-overview-card ${currentIndex === index ? 'active' : ''} ${service.status === 'backlog' ? 'disabled' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
                <div className="service-overview-header">
                    <service.icon size={16} className="service-overview-icon" />
                    <h3 className="service-overview-title">{service.title}</h3>
                </div>
                <p className="service-overview-description">{service.description}</p>
                <span className={`service-status-badge ${service.status}`}>{service.status}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Solutions;
