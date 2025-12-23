import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { colors } = useTheme();
  
  return (
    <div style={{ 
      paddingTop: '120px', 
      maxWidth: '600px', 
      margin: '0 auto', 
      paddingLeft: '20px', 
      paddingRight: '20px',
      paddingBottom: '50px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center', color: colors.text }}>Get In <span style={{ color: colors.accent }}>Touch</span></h1>
      
      <p style={{ color: colors.textSecondary, textAlign: 'center', marginBottom: '40px' }}>
        I am always open to discussing new research opportunities, collaborations regarding bacterial biofilms and AI, or just chatting about physics.
      </p>

      {/* --- CONTACT FORM START --- */}
      {/* REPLACE THE URL BELOW WITH YOUR FORMSPREE URL */}
      <form action="https://formspree.io/f/xpwnangv" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ color: colors.accent, fontSize: '0.9rem' }}>Your Name</label>
          <input type="text" name="name" required style={{
            padding: '15px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '4px',
            color: colors.text,
            fontSize: '1rem',
            outline: 'none'
          }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ color: colors.accent, fontSize: '0.9rem' }}>Your Email</label>
          <input type="email" name="email" required style={{
            padding: '15px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '4px',
            color: colors.text,
            fontSize: '1rem',
            outline: 'none'
          }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ color: colors.accent, fontSize: '0.9rem' }}>Message</label>
          <textarea name="message" rows="5" required style={{
            padding: '15px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '4px',
            color: colors.text,
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical'
          }}></textarea>
        </div>

        <button type="submit" style={{
          padding: '20px',
          background: 'transparent',
          border: `1px solid ${colors.accent}`,
          borderRadius: '4px',
          color: colors.accent,
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '10px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = `${colors.accent}20`}
        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
        >
          Send Message
        </button>
      </form>
      {/* --- CONTACT FORM END --- */}

      <div style={{ marginTop: '60px', textAlign: 'center', color: colors.textSecondary, borderTop: `1px solid ${colors.border}`, paddingTop: '30px' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Or email me directly at:</p>
        <a href="mailto:egunay22@ku.edu.tr" style={{ color: colors.text, fontSize: '1.1rem', fontFamily: 'monospace', textDecoration: 'none' }}>
          egunay22@ku.edu.tr
        </a>
      </div>
    </div>
  );
};

export default Contact;