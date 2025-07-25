import React from 'react';
import HeroBanner from './HeroBanner';
import SideBySide from './SideBySide';

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'hero' | 'side-by-side' | 'code-execution' | 'default' | 'feature';
  data?: any;
  reverse?: boolean;
}
// --- CodeExecutionBanner Component ---
interface CodeExecutionBannerProps {
  title: string;
  description: string;
  code: string;
  language: string;
}


const CodeExecutionBanner: React.FC<CodeExecutionBannerProps> = ({ title, description, code, language }) => {
  // Removed typing animation logic for minimalist approach
  const lines = code.split('\n');

  return (
    <div className="code-execution-banner">
      <div className="container">
        <div className="code-execution-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="code-animation-container">
          <pre>
            <code className={`language-${language}`}>
              {lines.map((line, idx) => (
                <span key={idx} className="code-line"> {/* Removed animation-related style */}
                  {line.split(' ').map((word, wIdx) => {
                    // Basic syntax highlighting
                    if (['import', 'def', 'for', 'if', 'in', 'print', 'return'].includes(word)) {
                      return <span key={wIdx} className="keyword">{word} </span>;
                    }
                    if (word.startsWith('"') || word.startsWith("'")) {
                      return <span key={wIdx} className="string">{word} </span>;
                    }
                    if (word.startsWith('#')) {
                      return <span key={wIdx} className="comment">{word} </span>;
                    }
                    return <span key={wIdx}>{word} </span>;
                  })}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ type, data, className, children, reverse }) => {
  let content;

  switch (type) {
    case 'hero':
      content = <HeroBanner {...data} />;
      break;
    case 'side-by-side':
      content = <SideBySide {...data} reverse={reverse} />;
      break;
    case 'code-execution':
      content = <CodeExecutionBanner {...data} />;
      break;
    case 'feature':
      content = children;
      break;
    case 'default':
    default:
      content = children;
      break;
  }

  return (
    <section className={className}>
      <div className="container">
        {content}
      </div>
    </section>
  );
};

export default Section;
