import React from 'react';
import { FaBrain, FaProjectDiagram, FaCogs, FaUsers, FaSearch, FaShieldAlt } from 'react-icons/fa';

const Product: React.FC = () => {
  return (
    <div className="product-page-container">

      {/* Section 2: Vector Search */}
      <section className="product-feature-section">
        <div className="container side-by-side-section">
          <div className="side-by-side-content">
            <FaSearch className="feature-icon" />
            <h2>Semantic Search at Your Fingertips</h2>
            <p>Go beyond keywords. Our vector-based search understands the meaning behind your queries, delivering highly relevant results from all your connected documents, notes, and web clippings instantly.</p>
          </div>
          <div className="side-by-side-image">
            <img src="/assets/product-image-1.webp" alt="Semantic Search" />
          </div>
        </div>
      </section>

      {/* Section 3: Knowledge Graphs */}
      <section className="product-feature-section alt-bg">
        <div className="container side-by-side-section reverse">
          <div className="side-by-side-content">
            <FaProjectDiagram className="feature-icon" />
            <h2>Visualize Connections, Uncover Insights</h2>
            <p>Our platform automatically builds knowledge graphs from your data, revealing hidden connections and patterns. Navigate your knowledge visually and discover insights you never knew existed.</p>
          </div>
          <div className="side-by-side-image">
            <img src="/assets/product-image-2.webp" alt="Knowledge Graph" />
          </div>
        </div>
      </section>

      {/* Section 4: Small Language Models */}
      <section className="product-feature-section">
        <div className="container side-by-side-section">
          <div className="side-by-side-content">
            <FaBrain className="feature-icon" />
            <h2>Powerful, Private On-Device AI</h2>
            <p>Leveraging state-of-the-art small language models (like a 3B parameter model from Hugging Face), all processing happens on your device. Your data stays private, secure, and always accessible, even offline.</p>
          </div>
          <div className="side-by-side-image">
            <img src="/assets/product-image-3.webp" alt="On-Device AI" />
          </div>
        </div>
      </section>

      {/* Section 5: Automation */}
      <section className="product-feature-section alt-bg">
        <div className="container side-by-side-section reverse">
          <div className="side-by-side-content">
            <FaCogs className="feature-icon" />
            <h2>Automate Your Knowledge Workflow</h2>
            <p>Let our system do the heavy lifting. From automatic tagging and categorization of new information to summarizing long documents, our intelligent automation saves you time and keeps your knowledge base organized.</p>
          </div>
          <div className="side-by-side-image">
            <img src="/assets/product-image-4.webp" alt="Automation" />
          </div>
        </div>
      </section>

      {/* Section 6: For Teams & Individuals */}
      <section className="product-feature-section">
        <div className="container text-center">
          <FaUsers className="feature-icon large" />
          <h2>From Solo Innovators to Thriving Teams</h2>
          <p className="section-subtitle">Whether you're a solo researcher organizing your thoughts or a team collaborating on a complex project, our flexible platform scales to your needs. Share knowledge, manage projects, and grow together.</p>
          <div className="product-team-image-container">
            <img src="/assets/product-image-5.webp" alt="Team Collaboration" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Product;
