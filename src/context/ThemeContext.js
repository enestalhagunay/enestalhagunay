import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        // Default to dark theme
        return true;
    });

    useEffect(() => {
        // Save preference to localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // Update document class for CSS variables
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        const bgColor = isDark ? '#0a192f' : '#f8fafc';
        const textColor = isDark ? '#ccd6f6' : '#1e293b';
        
        // Update html element
        document.documentElement.style.backgroundColor = bgColor;
        
        // Update body background directly
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        
        // Also set on #root if it exists
        const root = document.getElementById('root');
        if (root) {
            root.style.backgroundColor = bgColor;
            root.style.minHeight = '100dvh';
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const theme = {
        isDark,
        toggleTheme,
        colors: isDark ? {
            // Dark theme colors
            background: '#0a192f',
            backgroundSecondary: '#112240',
            text: '#ccd6f6',
            textSecondary: '#8892b0',
            accent: '#64ffda',
            headerBg: 'rgba(10, 25, 47, 0.85)',
            cardBg: '#112240',
            border: 'rgba(255, 255, 255, 0.1)',
            shadow: 'rgba(2, 12, 27, 0.7)',
            muted: '#495670'
        } : {
            // Light theme colors
            background: '#f8fafc',
            backgroundSecondary: '#ffffff',
            text: '#1e293b',
            textSecondary: '#64748b',
            accent: '#0891b2',
            headerBg: 'rgba(248, 250, 252, 0.9)',
            cardBg: '#ffffff',
            border: 'rgba(0, 0, 0, 0.1)',
            shadow: 'rgba(0, 0, 0, 0.1)',
            muted: '#94a3b8'
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
