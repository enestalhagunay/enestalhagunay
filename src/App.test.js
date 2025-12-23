import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage', () => {
    render(<App />);
    const linkElement = screen.getByText(/The Physics of/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders the footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/Enes Talha Günay/i);
    expect(footerElement).toBeInTheDocument();
});