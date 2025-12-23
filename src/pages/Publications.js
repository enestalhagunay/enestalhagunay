import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Publications = () => {
  const { colors } = useTheme();
  
  const papers = [
    {
      year: "2025",
      title: "Controlling the synchronization and symmetry breaking of coupled bacterial pili on active biofilm carpets",
      journal: "bioRxiv (Preprint)",
      authors: "B. Altin, E. T. Gunay, A. Kocabas",
      link: "https://dx.doi.org/10.1101/2025.05.01.651758"
    },
    {
      year: "In Prep",
      title: "Emergence of Intelligence in Bacterial Biofilms",
      journal: "Manuscript in preparation",
      authors: "E. T. Gunay, A. Kocabas",
      link: "#"
    }
  ];

  const talks = [
    {
      year: "2025",
      title: "Coupled Nanofilaments Provide Computational Ability to Bacterial Biofilms",
      event: "19th International Nanoscience and Nanotechnology Conference (NanoTR-19)",
      location: "Middle East Technical University (METU), Ankara",
      type: "Oral Presentation"
    }
  ];

  return (
    <div style={{ paddingTop: '120px', maxWidth: '1000px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '60px' }}>
      <h1 className="animate-section" style={{ fontSize: '3rem', marginBottom: '40px', color: colors.text }}>Publications & <span style={{ color: colors.accent }}>Talks</span></h1>
      
      <h2 className="animate-section delay-1" style={{ color: colors.accent, marginBottom: '30px', fontSize: '1.5rem' }}>Publications</h2>
      <div className="publications-list animate-section delay-2" style={{ marginBottom: '60px' }}>
        {papers.map((paper, index) => (
          <div key={index} className="card-hover" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '1.3rem', color: colors.text, marginBottom: '10px' }}>{paper.title}</h3>
            <p style={{ color: colors.textSecondary, marginBottom: '5px' }}>{paper.authors}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <p style={{ color: colors.accent, fontStyle: 'italic' }}>{paper.journal}, {paper.year}</p>
              {paper.link !== "#" && (
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.85rem',
                    border: `1px solid ${colors.accent}`,
                    borderRadius: '4px',
                    color: colors.accent,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = `${colors.accent}20`}
                  onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  Read Paper →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="animate-section delay-3" style={{ color: colors.accent, marginBottom: '30px', fontSize: '1.5rem' }}>Scientific Talks</h2>
      <div className="talks-list animate-section delay-4">
        {talks.map((talk, index) => (
          <div key={index} style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '1.3rem', color: colors.text, marginBottom: '10px' }}>{talk.title}</h3>
            <p style={{ color: colors.textSecondary, marginBottom: '5px' }}>{talk.event} | {talk.location}</p>
            <p style={{ color: colors.accent, fontStyle: 'italic' }}>{talk.type}, {talk.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;