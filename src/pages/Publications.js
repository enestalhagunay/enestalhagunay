import React from 'react';

const Publications = () => {
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
      <h1 className="animate-section" style={{ fontSize: '3rem', marginBottom: '40px' }}>Publications & <span className="highlight">Talks</span></h1>
      
      <h2 className="animate-section delay-1" style={{ color: '#64ffda', marginBottom: '30px', fontSize: '1.5rem' }}>Journal Publications</h2>
      <div className="publications-list animate-section delay-2" style={{ marginBottom: '60px' }}>
        {papers.map((paper, index) => (
          <div key={index} className="card-hover" style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#e6f1ff', marginBottom: '10px' }}>{paper.title}</h3>
            <p style={{ color: '#8892b0', marginBottom: '5px' }}>{paper.authors}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <p style={{ color: '#64ffda', fontStyle: 'italic' }}>{paper.journal}, {paper.year}</p>
              {paper.link !== "#" && <a href={paper.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Read Paper →</a>}
            </div>
          </div>
        ))}
      </div>

      <h2 className="animate-section delay-3" style={{ color: '#64ffda', marginBottom: '30px', fontSize: '1.5rem' }}>Scientific Talks</h2>
      <div className="talks-list animate-section delay-4">
        {talks.map((talk, index) => (
          <div key={index} style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#e6f1ff', marginBottom: '10px' }}>{talk.title}</h3>
            <p style={{ color: '#8892b0', marginBottom: '5px' }}>{talk.event} | {talk.location}</p>
            <p style={{ color: '#64ffda', fontStyle: 'italic' }}>{talk.type}, {talk.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;