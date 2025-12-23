import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Research = () => {
  const { colors } = useTheme();
  
  return (
    <div style={{ paddingTop: '120px', maxWidth: '1000px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '60px' }}>
      <h1 className="animate-section" style={{ fontSize: '3rem', marginBottom: '40px', color: colors.text }}>Research <span style={{ color: colors.accent }}>Interests</span></h1>
      
      <div className="animate-section delay-1" style={{ marginBottom: '60px', color: colors.textSecondary, fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          How does intelligence emerge in the brain? What makes individuals so different from one another? 
          My work explores the connection between physical interactions in bacterial biofilms and their 
          computational abilities, which can be mapped to fundamental processes of artificial intelligence.
        </p>
      </div>

      <div className="animate-section delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <div className="card-hover" style={{ background: colors.cardBg, padding: '30px', borderRadius: '8px', boxShadow: `0 10px 30px -15px ${colors.shadow}` }}>
          <h2 style={{ color: colors.accent, marginBottom: '20px' }}>01. Computational Abilities in Bacterial Biofilms</h2>
          <p style={{ color: colors.textSecondary, lineHeight: '1.8' }}>
            I investigate how computational abilities emerge in bacterial biofilms through their physical interactions. 
            Biofilms are mesmerizing systems: they generate striking wave patterns that resemble mechanical analogs 
            of brain activity. My research focuses on how these collective behaviors drive computational capabilities 
            in living systems.
          </p>
        </div>

        <div className="card-hover" style={{ background: colors.cardBg, padding: '30px', borderRadius: '8px', boxShadow: `0 10px 30px -15px ${colors.shadow}` }}>
          <h2 style={{ color: colors.accent, marginBottom: '20px' }}>02. The Physics of Intelligence</h2>
          <p style={{ color: colors.textSecondary, lineHeight: '1.8' }}>
            Motivated by the 2024 Nobel Prize in Physics (Hopfield & Hinton), We treat intelligence as a physical process. 
            In biofilms, local mechanical couplings shape an effective landscape; waves and synchronization act as 
            memory and retrieval—paralleling attractor dynamics in Hopfield-type models.
          </p>
        </div>

        <div className="card-hover" style={{ background: colors.cardBg, padding: '30px', borderRadius: '8px', boxShadow: `0 10px 30px -15px ${colors.shadow}` }}>
          <h2 style={{ color: colors.accent, marginBottom: '20px' }}>03. Dynamical Principles</h2>
          <p style={{ color: colors.textSecondary, lineHeight: '1.8' }}>
            I believe intelligence is not a mystery confined to any one substrate, but a set of dynamical principles. 
            By treating algorithms and experiments as two facets of the same dynamical system, I aim to uncover 
            how simple interaction rules can generate robust information processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;