import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#112240', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
            <p style={{ margin: 0 }}>
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
                <a href="/privacy-policy" style={{ color: '#64ffda', textDecoration: 'none' }}>Privacy Policy</a> | 
                <a href="/terms-of-service" style={{ color: '#64ffda', textDecoration: 'none', marginLeft: '0.5rem' }}>Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;