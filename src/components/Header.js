import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle = (linkName) => ({
        color: hoveredLink === linkName ? '#64ffda' : '#ccd6f6',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        fontSize: '0.95rem'
    });

    return (
        <header className="main-header" style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0,
            right: 0,
            zIndex: 100, 
            background: 'rgba(10, 25, 47, 0.85)', 
            backdropFilter: 'blur(10px)',
            padding: '0 4rem',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)'
        }}>
            <div className="logo">
                <Link to="/" style={{ color: '#64ffda', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
                    ETG
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px',
                    zIndex: 101
                }}
                className="mobile-menu-btn"
            >
                <div style={{ width: '25px', height: '2px', background: '#64ffda', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                <div style={{ width: '25px', height: '2px', background: '#64ffda', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
                <div style={{ width: '25px', height: '2px', background: '#64ffda', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
            </button>

            <nav className="desktop-nav">
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0, padding: 0 }}>
                    <li>
                        <Link to="/" style={linkStyle('home')} onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/works" style={linkStyle('works')} onMouseEnter={() => setHoveredLink('works')} onMouseLeave={() => setHoveredLink(null)}>
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link to="/publications" style={linkStyle('publications')} onMouseEnter={() => setHoveredLink('publications')} onMouseLeave={() => setHoveredLink(null)}>
                            Publications
                        </Link>
                    </li>
                    <li>
                        <Link to="/research" style={linkStyle('research')} onMouseEnter={() => setHoveredLink('research')} onMouseLeave={() => setHoveredLink(null)}>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={linkStyle('contact')} onMouseEnter={() => setHoveredLink('contact')} onMouseLeave={() => setHoveredLink(null)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav Overlay */}
            {menuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '70%',
                    maxWidth: '300px',
                    height: '100vh',
                    background: '#112240',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    boxShadow: '-10px 0 30px -10px rgba(2,12,27,0.7)'
                }} className="mobile-nav">
                    <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
                    <Link to="/works" onClick={() => setMenuOpen(false)} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '1.2rem' }}>Works</Link>
                    <Link to="/publications" onClick={() => setMenuOpen(false)} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '1.2rem' }}>Publications</Link>
                    <Link to="/research" onClick={() => setMenuOpen(false)} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '1.2rem' }}>Research</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ color: '#ccd6f6', textDecoration: 'none', fontSize: '1.2rem' }}>Contact</Link>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                    .main-header { padding: 0 1.5rem !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;