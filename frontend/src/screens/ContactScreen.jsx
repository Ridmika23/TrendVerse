import React from 'react';

const ContactScreen = () => {
  return (
    <div className='container'>
      <div className='page-header mt-3'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
        <div style={{ background: 'var(--color-bg-secondary)', padding: '3rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-glass)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='mb-2'>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input type='text' style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid #e2e8f0' }} placeholder='Your name' />
            </div>
            <div className='mb-2'>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input type='email' style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid #e2e8f0' }} placeholder='Your email' />
            </div>
            <div className='mb-3'>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
              <textarea rows='5' style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid #e2e8f0', resize: 'vertical' }} placeholder='How can we help you?'></textarea>
            </div>
            <button type='submit' className='btn btn-primary' style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
        
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
            Whether you have a question about our products, need assistance with your order, or just want to say hi, we're here for you.
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Address</h4>
            <p style={{ color: 'var(--color-text-light)' }}>123 Fashion Street, Colombo 03, Sri Lanka</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Email</h4>
            <p style={{ color: 'var(--color-text-light)' }}>support@trendverse.lk</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Phone</h4>
            <p style={{ color: 'var(--color-text-light)' }}>+94 11 234 5678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
