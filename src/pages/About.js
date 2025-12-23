import React from 'react';

const About = () => {
    return (
        <div className="about-page" style={{ padding: '100px 2rem', textAlign: 'center', background: '#0a192f', color: '#fff' }}>
            <h1>About This Project</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '1.5rem 0' }}>
                This portfolio website showcases various experimental observations and simulations related to the physics of intelligence.
                The project aims to investigate how computational abilities emerge from physical interactions in biological systems.
            </p>
            <h2>Technologies Used</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <h2>Contact</h2>
            <p>If you have any questions or would like to collaborate, feel free to reach out!</p>
        </div>
    );
};

export default About;