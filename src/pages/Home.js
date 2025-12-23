import React, { useState } from 'react';

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const items = [
        {
            id: 1,
            type: 'video',
            src: process.env.PUBLIC_URL + "/assets/videos/fast_spiral.mp4",
            title: "Fast Spiral Dynamics",
            description: "Observation of spiral wave patterns emerging from bacterial interactions."
        },
        {
            id: 2,
            type: 'video',
            src: process.env.PUBLIC_URL + "/assets/videos/output.mp4",
            title: "Simulation of Non-Reciprocally Coupled Kuramoto Oscillators",
            description: "Analysis of coupled oscillator with phase lag."
        },
        {
            id: 3,
            type: 'image-grid',
            title: "Bacterial Biofilm Patterns and Neuronal Dynamics",
            description: "A collection of images showcasing experimental setups and observed patterns.",
            images: [
                { src: process.env.PUBLIC_URL + "/assets/photos/Picture1.png", caption: "Experimental Setup" },
                { src: process.env.PUBLIC_URL + "/assets/photos/1.jpg", caption: "Coexisting of Spiral, Planar and Target Patterns" },
                { src: process.env.PUBLIC_URL + "/assets/photos/Picture6.png", caption: "Temperature Gradient" },
                { src: process.env.PUBLIC_URL + "/assets/photos/Picture3.png", caption: " Dynamical Systems" }
            ]
        }
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setCurrentImageIndex(0);
    };

    const goToNextImage = (e, totalImages) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const goToPrevImage = (e, totalImages) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <div className="home-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
            <div className="content-container" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',    
                gap: '3rem', 
                padding: '0 2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                
                <div className="intro-section" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1><span className="highlight">Enes Talha Günay</span></h1>
                    <p className="subtitle" style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <span style={{ fontSize: '1rem', opacity: 0.9, display: 'block', marginBottom: '15px', color: '#8892b0' }}>
                            Koç University
                        </span>
                        Investigating how computational abilities emerge from physical interactions in biological systems.
                        <br/>
                        <span style={{ fontSize: '0.95rem', opacity: 0.8, display: 'block', marginTop: '15px', color: '#64ffda' }}>
                            The Physics of Intelligence
                        </span>
                    </p>
                </div>

                <div className="experiments-section" style={{ width: '100%' }}>
                    <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#ccd6f6', textAlign: 'center' }}>Experimental Observations</h2>
                    
                    <div className="video-grid" style={{ 
                        display: 'flex', 
                        flexWrap: 'nowrap', 
                        justifyContent: 'center', 
                        gap: '2rem',
                        overflowX: 'auto', 
                        paddingBottom: '1rem'
                    }}>
                        {items.map((item) => (
                            <div 
                                key={item.id} 
                                className="video-card" 
                                onClick={() => item.type === 'video' && handleItemClick(item)}
                                style={{ 
                                    cursor: item.type === 'video' ? 'pointer' : 'default', 
                                    background: '#112240', 
                                    padding: '1rem', 
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s ease',
                                    minWidth: '350px', 
                                    width: '400px', 
                                    maxWidth: '100%',
                                    flexShrink: 0 
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="video-thumbnail" style={{ height: '225px', background: '#000', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                    
                                    {item.type === 'video' ? (
                                        <>
                                            <video 
                                                muted 
                                                loop 
                                                autoPlay 
                                                playsInline
                                                preload="metadata"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                                            >
                                                <source src={item.src} type="video/mp4" />
                                            </video>
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                background: 'rgba(0,0,0,0.6)',
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '2px solid #64ffda'
                                            }}>
                                                <div style={{
                                                    width: 0, 
                                                    height: 0, 
                                                    borderTop: '8px solid transparent',
                                                    borderBottom: '8px solid transparent',
                                                    borderLeft: '16px solid #64ffda',
                                                    marginLeft: '4px'
                                                }}></div>
                                            </div>
                                        </>
                                    ) : (
                                        <div 
                                            style={{ 
                                                height: '100%', 
                                                width: '100%',
                                                position: 'relative'
                                            }}
                                        >
                                            <img 
                                                src={item.images[currentImageIndex].src} 
                                                alt={item.images[currentImageIndex].caption} 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }} 
                                            />
                                            
                                            {/* Left Arrow */}
                                            <button
                                                onClick={(e) => goToPrevImage(e, item.images.length)}
                                                style={{
                                                    position: 'absolute',
                                                    left: '5px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    background: 'rgba(0,0,0,0.6)',
                                                    color: '#64ffda',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '32px',
                                                    height: '32px',
                                                    cursor: 'pointer',
                                                    fontSize: '1.2rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    zIndex: 10
                                                }}
                                            >
                                                &#8249;
                                            </button>
                                            
                                            {/* Right Arrow */}
                                            <button
                                                onClick={(e) => goToNextImage(e, item.images.length)}
                                                style={{
                                                    position: 'absolute',
                                                    right: '5px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    background: 'rgba(0,0,0,0.6)',
                                                    color: '#64ffda',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '32px',
                                                    height: '32px',
                                                    cursor: 'pointer',
                                                    fontSize: '1.2rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    zIndex: 10
                                                }}
                                            >
                                                &#8250;
                                            </button>
                                            
                                            {/* Caption & Counter */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'rgba(0,0,0,0.7)',
                                                padding: '0.5rem',
                                                textAlign: 'center',
                                                color: '#fff',
                                                fontSize: '0.8rem'
                                            }}>
                                                {item.images[currentImageIndex].caption} ({currentImageIndex + 1}/{item.images.length})
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="video-info" style={{ marginTop: '0.8rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.4' }}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedItem && (
                <div 
                    className="video-modal" 
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem'
                    }}
                >
                    <div 
                        className="modal-content" 
                        onClick={(e) => e.stopPropagation()}
                        style={{ 
                            width: '100%', 
                            maxWidth: '900px', 
                            position: 'relative',
                            maxHeight: '90vh',
                            display: 'flex',
                            flexDirection: 'column',
                            background: '#112240',
                            padding: '1rem',
                            borderRadius: '8px',
                            boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)'
                        }}
                    >
                        <button 
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: '#fff',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </button>
                        
                        <div style={{ 
                            flex: 1, 
                            overflowY: 'auto', 
                            paddingRight: '0.5rem'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <video 
                                    controls 
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                    autoPlay 
                                    muted
                                    style={{ 
                                        width: '100%', 
                                        maxHeight: '60vh',
                                        borderRadius: '8px', 
                                        boxShadow: '0 0 20px rgba(0,0,0,0.5)' 
                                    }}
                                >
                                    <source src={selectedItem.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div style={{ padding: '0 0.5rem', color: '#fff' }}>
                                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#ccd6f6' }}>{selectedItem.title}</h3>
                                <p style={{ textAlign: 'center', lineHeight: '1.6', color: '#8892b0' }}>{selectedItem.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;