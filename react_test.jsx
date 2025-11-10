import React from 'react';
import './CompanyProject.css'; 

const CompanyProject = () => {
  return (
    <div
      className="company-project"
      style={{
        backgroundImage: 'url("https://test45/test-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        color: '#ffffff',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Our Project</h1>
      <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
        At Tech test Innovations, our flagship project focuses on developing eco-friendly smart devices that
        reduce energy consumption and promote sustainable living. We combine cutting-edge technology with
        environmental responsibility to create products that make a real impact.
      </p>
      <button
        onClick={() => window.location.href = '/products'}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#00b894',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Explore Our Products
      </button>
    </div>
  );
};

export default CompanyProject;
