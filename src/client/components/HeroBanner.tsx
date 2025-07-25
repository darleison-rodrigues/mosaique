import React, { useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // We have two content blocks

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  // Manual navigation via dots
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      title: "Secure and Compliant API.",
      description: "In a world of complex data privacy regulations like Quebec's Law 25, RDL Techworks provides a robust AI Services API designed for security and compliance. Leverage our powerful endpoints for embeddings, transcription, and vision, knowing your data is handled responsibly and in accordance with the highest privacy standards.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1964&auto=format&fit=crop",
      ctaText: "Explore Our API",
      ctaLink: "#services",
    },
    {
      title: "Why Private RAG? ",
      description: "Uncompromised Data Control. In an era of increasing data breaches and privacy concerns, traditional cloud-based AI solutions can expose your most sensitive information. Our Private RAG system ensures your proprietary data remains entirely within your secure environment, giving you unparalleled control, peace of mind and true offline intelligence",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      ctaText: "Discover Private RAG",
      ctaLink: "#services",
    }
  ];

  return (
    <div className="hero-banner-slider-container">
      <div
        className="hero-banner-slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="hero-banner-slide">
            {/* The content wrapper now acts like your SideBySide section */}
            <div className={`hero-banner-slide-content-wrapper ${index % 2 === 0 ? '' : 'reverse'}`}>
              <div className="hero-banner-content-box">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
              {/* This is the image container, similar to side-by-side-image */}
              {slide.image && (
                <div className="hero-banner-image-container">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width={527}
                    height={297}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;