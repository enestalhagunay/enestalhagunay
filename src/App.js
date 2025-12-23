import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import Publications from './pages/Publications';
import Research from './pages/Research';
import Contact from './pages/Contact';
import './App.css';
import './styles/main.css';

function AppContent() {
  const { colors } = useTheme();
  
  return (
    <div className="app-container" style={{ 
      background: colors.background,
      color: colors.text,
      minHeight: '100vh',
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      <Header />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="main-footer" style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: `1px solid ${colors.border}`,
        marginTop: '4rem'
      }}>
        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a 
            href="https://www.linkedin.com/in/enes-talha-g%C3%BCnay-b93437318/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: colors.textSecondary, fontSize: '1.5rem', transition: 'color 0.2s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = colors.accent}
            onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <p style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Enes Talha Günay. Designed for Science.
        </p>
        <p style={{ color: colors.muted, fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Built with React
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;