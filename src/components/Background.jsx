import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <div className="bg-container">
            {/* Texture Overlay */}
            <div className="bg-noise"></div>

            {/* Animated Blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>
            <div className="bg-blob blob-4"></div>

            {/* Moving HUD/Vector Elements */}
            <div className="bg-vectors">
                <svg className="vector vector-1" width="200" height="200" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.2" strokeDasharray="4 4" opacity="0.1" />
                </svg>
                <svg className="vector vector-2" width="150" height="150" viewBox="0 0 120 120" fill="none">
                    <rect x="10" y="10" width="100" height="100" stroke="white" strokeWidth="0.2" strokeDasharray="6 2" opacity="0.1" />
                </svg>
                <svg className="vector vector-3" width="100" height="100" viewBox="0 0 80 80" fill="none">
                    <path d="M40 5L75 70H5L40 5Z" stroke="white" strokeWidth="0.2" strokeDasharray="2 2" opacity="0.1" />
                </svg>
            </div>

            {/* Tech Grid & Scanning Effect */}
            <div className="bg-grid"></div>
            <div className="bg-scanline"></div>
        </div>
    );
};

export default Background;
