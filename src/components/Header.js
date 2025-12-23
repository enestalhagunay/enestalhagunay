import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { isDark, toggleTheme, colors } = useTheme();

    const handleThemeToggle = () => {
        setMenuOpen(false); // Close menu when toggling theme
        toggleTheme();
    };

    const linkStyle = (linkName) => ({
        color: hoveredLink === linkName ? colors.accent : colors.text,
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        fontSize: '0.95rem'
    });

    return (
        <header className="main-header" style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0,
            right: 0,
            zIndex: 100, 
            background: colors.headerBg, 
            backdropFilter: 'blur(10px)',
            padding: '0 4rem',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            boxShadow: `0 10px 30px -10px ${colors.shadow}`,
            transition: 'background 0.3s ease, box-shadow 0.3s ease'
        }}>
            <div className="logo">
                <Link to="/" style={{ color: colors.accent, fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
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
                <div style={{ width: '25px', height: '2px', background: colors.accent, marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                <div style={{ width: '25px', height: '2px', background: colors.accent, marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
                <div style={{ width: '25px', height: '2px', background: colors.accent, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
            </button>

            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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

                {/* Theme Toggle Button */}
                <button
                    onClick={handleThemeToggle}
                    style={{
                        background: 'none',
                        border: `1px solid ${colors.accent}`,
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.accent,
                        transition: 'all 0.3s ease',
                        marginLeft: '1rem'
                    }}
                    title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    onMouseOver={(e) => e.currentTarget.style.background = `${colors.accent}20`}
                    onMouseOut={(e) => e.currentTarget.style.background = 'none'}
                >
                    {isDark ? (
                        // Sun icon for dark mode (click to switch to light)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        // Moon icon for light mode (click to switch to dark)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            {menuOpen && (
                <>
                    {/* Dark backdrop */}
                    <div 
                        onClick={() => setMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 99
                        }}
                    />
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '70%',
                        maxWidth: '300px',
                        height: '100vh',
                        background: colors.backgroundSecondary,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                        boxShadow: `-10px 0 30px -10px ${colors.shadow}`,
                        zIndex: 100,
                        transition: 'all 0.3s ease'
                    }} className="mobile-nav">
                        <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease' }}>Home</Link>
                        <Link to="/works" onClick={() => setMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease' }}>Works</Link>
                        <Link to="/publications" onClick={() => setMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease' }}>Publications</Link>
                        <Link to="/research" onClick={() => setMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease' }}>Research</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease' }}>Contact</Link>
                        
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={handleThemeToggle}
                            style={{
                                background: 'none',
                                border: `1px solid ${colors.accent}`,
                                borderRadius: '25px',
                                padding: '0.5rem 1.5rem',
                                cursor: 'pointer',
                                color: colors.accent,
                                fontSize: '1rem',
                                marginTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isDark ? '☀️ Light' : '🌙 Dark'}
                        </button>
                    </div>
                </>
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