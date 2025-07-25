import React from 'react';

const LavaLamp = ({ 
  width = '100vw', 
  height = '100vh',
  backgroundColor = 'linear-gradient(-206deg, #FFFFFF 70%, #FFFFFF 80%)',
  blobCount = 7,
  animationSpeed = 1,
  className = ""
}) => {
  const isActive = true; // Always active for background

  // Colors extracted from the SVG
  const svgColors = [
    '#FACF27', // Golden yellow
    '#F89824', // Orange
    '#A7CC53', // Lime green
    '#D53031', // Red
    '#9E53B2', // Purple
  ];

  // Blob configurations with different sizes and animation timings
  const blobConfigs = [
    {
      size: { width: '200px', height: '200px' },
      position: { left: '35%', bottom: '-15%' },
      animations: {
        wobble: '4s',
        movement: 'blob-one 18s',
        transform: 'translatey(-600%)'
      }
    },
    {
      size: { width: '330px', height: '330px' },
      position: { right: '24%', bottom: '-65%' },
      animations: {
        wobble: '5s',
        movement: 'blob-two 22s',
        transform: 'translatey(-420%)'
      }
    },
    {
      size: { width: '150px', height: '150px' },
      position: { left: '34%', bottom: '-15%' },
      animations: {
        wobble: '6s',
        movement: 'blob-three 16s',
        transform: 'translatey(-305%)'
      }
    },
    {
      size: { width: '235px', height: '235px' },
      position: { left: '30%', bottom: '-19%' },
      animations: {
        wobble: '8s',
        movement: 'blob-four 16s',
        transform: 'translatey(-465%)'
      }
    },
    {
      size: { width: '55px', height: '55px' },
      position: { left: '34%', bottom: '-25%' },
      animations: {
        wobble: '9s',
        movement: 'blob-five 32s',
        transform: 'translatey(-700%)'
      }
    },
    {
      size: { width: '35px', height: '35px' },
      position: { right: '34%', bottom: '-25%' },
      animations: {
        wobble: '10s',
        movement: 'blob-six 12s',
        transform: 'translatey(-700%)'
      }
    },
    {
      size: { width: '435px', height: '435px' },
      position: { right: '40%', bottom: '-85%' },
      animations: {
        wobble: '11s',
        movement: 'blob-seven 32s',
        transform: 'translatey(-300%)'
      }
    }
  ].slice(0, blobCount);

  const generateKeyframes = () => {
    return blobConfigs.map((_, index) => {
      const blobName = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'][index];
      return `
        @keyframes blob-${blobName} {
          0%, 100% { transform: translatey(0); }
          50% { transform: ${blobConfigs[index].animations.transform}; }
        }
      `;
    }).join('\n');
  };

  const lampStyles = `
    .lava-lamp-container {
      position: relative;
      width: ${width};
      height: ${height};
      background: ${backgroundColor};
      overflow: hidden;
      margin: 0;
    }

    .lamp {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      z-index: 1;
    }

    .lava {
      filter: url("#goo");
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }

    .blob {
      border-radius: 50%;
      position: absolute;
      transition: all 0.3s ease;
    }

    .blob.top {
      width: 100%;
      height: 4%;
      top: -3%;
      left: 0;
      background: linear-gradient(-206deg, ${svgColors[0]} 0%, ${svgColors[1]} 100%);
    }

    .blob.bottom {
      width: 100%;
      height: 4.5%;
      bottom: -3%;
      left: 0;
      background: linear-gradient(-206deg, ${svgColors[2]} 0%, ${svgColors[3]} 100%);
    }

    ${blobConfigs.map((config, index) => {
      const blobName = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'][index];
      const colorIndex = index % svgColors.length;
      const nextColorIndex = (index + 1) % svgColors.length;
      return `
        .blob:nth-child(${index + 1}) {
          width: ${config.size.width};
          height: ${config.size.height};
          ${config.position.left ? `left: ${config.position.left};` : ''}
          ${config.position.right ? `right: ${config.position.right};` : ''}
          bottom: ${config.position.bottom};
          background: linear-gradient(-206deg, ${svgColors[colorIndex]} 0%, ${svgColors[nextColorIndex]} 100%);
          animation: ${isActive ? `wobble ${config.animations.wobble} ease-in-out alternate infinite, ${config.animations.movement} ease-in-out infinite` : 'none'};
          animation-duration: ${isActive ? `${parseFloat(config.animations.wobble) / animationSpeed}s, ${parseFloat(config.animations.movement.split(' ')[1]) / animationSpeed}s` : '0s'};
        }
      `;
    }).join('\n')}

    ${generateKeyframes()}

    @keyframes wobble {
      0% { border-radius: 50%; }
      50% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
      100% { border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%; }
    }

    .controls {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      gap: 10px;
    }

    .control-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    .control-btn.active {
      background: rgba(255, 255, 255, 0.4);
    }

    .info {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      z-index: 10;
      backdrop-filter: blur(10px);
      padding: 10px 20px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
    }
  `;

  return (
    <div className={`lava-lamp-wrapper ${className}`}>
      <style>{lampStyles}</style>
      
      {/* SVG Filter for gooey effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            <feColorMatrix 
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10" 
            />
            <feBlend in2="SourceGraphic" mode="normal" />
          </filter>
        </defs>
      </svg>

      <div className="lava-lamp-container">
        

        <div className="lamp">
          <div className="lava">
            {/* Top and bottom static blobs */}
            <div className="blob top"></div>
            <div className="blob bottom"></div>
            
            {/* Animated blobs */}
            {blobConfigs.map((_, index) => (
              <div key={index} className="blob"></div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LavaLamp;