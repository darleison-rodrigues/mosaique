
import React from 'react';

interface SideBySideProps {
  title?: string;
  description: string;
  image?: string;
  reverse?: boolean;
}

const SideBySide: React.FC<SideBySideProps> = ({ title, description, image, reverse }) => {
  return (
    <div className={`side-by-side-section ${reverse ? 'reverse' : ''}`}>
      <div className="side-by-side-content">
        {title && <h2>{title}</h2>}
        <p>{description}</p>
      </div>
      {image && (
        <div className="side-by-side-image">
          <img src={image} alt={title || description} onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = "https://placehold.co/600x400/E0E0E0/555555?text=Image+Not+Found"; 
          }} />
        </div>
      )}
    </div>
  );
};

export default SideBySide;
