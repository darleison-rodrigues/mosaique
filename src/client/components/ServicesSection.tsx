import React, { useState } from 'react';
import { FaBolt, FaMicrophone } from 'react-icons/fa';
import { FaBrain, FaProjectDiagram, FaCogs, FaUsers, FaSearch, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const services = [
  {
    icon: <FaBolt color="orange" />,
    title: "Semantic Search API",
    description: "Build vector indexes for semantic search and inference tasks.",
    price: "100,000 queries",
    unit: "per month",
    status: "Available"
  },
  {
    icon: <FaProjectDiagram color="black" />,
    title: "Creator Intelligence API",
    description: "Speech-to-text and text-to-speech APIs. Your voice, your data, your control. Generate and analyze images without restrictions. Pure creative expression",
    price: "Free",
    unit: "for individuals",
    status: "Available"
  },
  {
    icon: <FaCogs color="black" />,
    title: "Self Agent",
    description: "A personal knowledge management system for individuals, leverages serverless architecture on Cloudflare, offering a cost-effective alternative for businesses, individuals, and teams.",
    price: "Free",
    unit: "for individuals",
    status: "Beta"
  },
  {
    icon: <span role="img" aria-label="cloud to edge">☁️</span>,
    title: "Cloud to Edge",
    description: "Seamlessly deploy and manage AI models from the cloud to edge devices for low-latency inference. (Coming Soon)",
    price: "Custom",
    unit: "per deployment",
    disabled: true,
    status: "Backlog"
  },
  {
    icon: <span role="img" aria-label="model training">🧪</span>,
    title: "Model Training",
    description: "Train custom AI models with your own data on our scalable infrastructure. (Coming Soon)",
    price: "Custom",
    unit: "per hour",
    disabled: true,
    status: "Backlog"
  }
];

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="mosaique-container">
      <div className="mosaique-content-wrapper">
        
        {/* Header */}
        {/* <div className="mosaique-header">
          
          
          <h1 className="mosaique-title">
            Liberation
          </h1>
          
          <p className="mosaique-subtitle">
            AI services built for developers, by developers. No gatekeepers.
          </p>
        </div> */}
    <section className="product-hero-section">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">
              The Next-Generation Knowledge System
            </h1>
            <p className="product-hero-subtitle">
              Built for individuals and teams under budget constraints, our platform leverages vector databases, knowledge graphs, and powerful small language models to redefine how you manage
              information.
            </p>
            <a href="#" className="cta-button">
              Get Smart for Free
            </a>
          </div>
        </div>
      </section>

        {/* Main Service Card */}
        <div className={`main-service-card ${services[currentService].disabled ? 'disabled' : ''}`}>
          
          {/* Service Content */}
          <div className="service-content">
            <div className="service-main-header">
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {services[currentService].icon}
                </div>
              </div>
              <h3 className="service-title">
                {services[currentService].title}
              </h3>
              {services[currentService].status && (
              <div className={`service-status-badge ${services[currentService].status.toLowerCase()}`}>
                {services[currentService].status}
              </div>
            )}
            </div>
            <div className="service-pricing">
              <p className="service-description">
                {services[currentService].description}
              </p>
            
              <div className="service-price">
                {services[currentService].price}
              </div>
              <div className="service-unit">
                {services[currentService].unit}
              </div>
            </div>
{/* 
            <button className="get-started-button">
              Get Started
            </button> */}
          </div>
        </div>

        {/* Navigation */}
        <div className="service-navigation">
          <button 
            onClick={prevService}
            className="nav-button"
          >
            &lt; {/* ChevronLeft */}
          </button>
          
          {/* Dots */}
          <div className="nav-dots">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`nav-dot ${index === currentService ? 'active' : ''}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextService}
            className="nav-button"
          >
            &gt; {/* ChevronRight */}
          </button>
        </div>

        {/* Service Overview */}
        <div className="service-overview-grid">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`service-overview-card ${index === currentService ? 'active' : ''} ${service.disabled ? 'disabled' : ''}`}
            >
              <div className="service-overview-header">
                <div className="service-overview-icon">
                  {React.cloneElement(service.icon, { style: { width: '20px', height: '20px' } })}
                </div>
                <h3 className="service-overview-title">
                  {service.title}
                </h3>
              </div>
              {service.status && (
                <div className={`service-status-badge ${service.status.toLowerCase()}`}>
                  {service.status}
                </div>
              )}
              <div className="service-overview-pricing">
                {service.price} {service.unit}
              </div>
            </button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="footer-cta">
          <p className="footer-cta-text">
            Looking for a enterprise-grade solutions ?
          </p>
          <button className="view-docs-button">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;