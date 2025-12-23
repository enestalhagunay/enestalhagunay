import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ 
            background: '#112240', 
            padding: '1rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}>
            <div style={{ color: '#64ffda', fontSize: '1.5rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#64ffda' }}>Portfolio</Link>
            </div>
            <div>
                <Link to="/" style={{ margin: '0 1rem', textDecoration: 'none', color: '#ccd6f6' }}>Home</Link>
                <Link to="/about" style={{ margin: '0 1rem', textDecoration: 'none', color: '#ccd6f6' }}>About</Link>
                <Link to="/contact" style={{ margin: '0 1rem', textDecoration: 'none', color: '#ccd6f6' }}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;