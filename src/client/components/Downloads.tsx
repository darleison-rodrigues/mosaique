import React from 'react';
import LavaLamp from './Lava';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const Downloads: React.FC = () => {
  return (
    <div className="downloads-container relative">
      <LavaLamp className="absolute inset-0 z-0" />
      <div className="container relative z-10">
        <h1>Download mosaïque</h1>
        <p className="downloads-subtitle">
          Get the desktop application for your operating system.
        </p>
        <div className="downloads-buttons">
          <a href="#" className="download-button windows">
            <FaWindows size={36} />
            <span>Download for Windows</span>
          </a>
          <a href="#" className="download-button macos">
            <FaApple size={36} />
            <span>Download for macOS</span>
          </a>
          <a href="#" className="download-button linux">
            <FaLinux size={36} />
            <span>Download for Linux</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
