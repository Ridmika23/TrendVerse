import React from 'react';

const AboutScreen = () => {
  return (
    <div className='container'>
      <div className='page-header mt-3'>
        <h1>About TrendVerse</h1>
        <p>Discover the story behind your favorite fashion destination.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '3rem' }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="About TrendVerse" 
            style={{ borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-hover)' }}
          />
        </div>
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            At TrendVerse, we believe that fashion is a form of self-expression. Our mission is to provide high-quality, trendy, and sustainable fashion choices that empower individuals to feel confident and stylish every day.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
            Founded in 2024, we started as a small boutique and have grown into a global online destination. We carefully curate our collections to ensure you always have access to the latest styles.
          </p>
          <button className='btn btn-primary'>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
