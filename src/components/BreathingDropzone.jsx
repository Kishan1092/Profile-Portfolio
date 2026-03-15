import React, { useState } from 'react';
import { UploadCloud, CheckCircle } from 'lucide-react';
import './BreathingDropzone.css';

const BreathingDropzone = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    simulateUpload();
  };

  const simulateUpload = () => {
    if (isUploading || isComplete) return;
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsComplete(true);
          return 100;
        }
        // Random progress increments for realism
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);
  };

  const resetUpload = (e) => {
    e.stopPropagation(); // Prevent triggering another upload immediately
    setUploadProgress(0);
    setIsUploading(false);
    setIsComplete(false);
  };

  // Math for SVG Circle Path
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (uploadProgress / 100) * circumference;

  return (
    <div className="demo-canvas">
      <div 
        className={`dropzone-container ${isDragOver ? 'is-dragover' : ''} ${isUploading ? 'is-uploading' : ''} ${isComplete ? 'is-complete' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!isUploading && !isComplete ? simulateUpload : undefined}
      >
        {!isUploading && !isComplete && (
          <div className="dropzone-content">
            <UploadCloud className="dropzone-icon" size={48} />
            <h3 className="dropzone-title">Drag & Drop PAN Card</h3>
            <p className="dropzone-subtitle">or click to simulate</p>
          </div>
        )}

        {isUploading && (
          <div className="upload-progress-container">
            <svg className="progress-ring" width="100" height="100">
              <circle
                className="progress-ring-circle-bg"
                cx="50" cy="50" r={radius}
              />
              <circle
                className="progress-ring-circle"
                cx="50" cy="50" r={radius}
                style={{ strokeDasharray: circumference, strokeDashoffset }}
              />
            </svg>
            <div className="progress-text">{Math.min(uploadProgress, 100)}%</div>
          </div>
        )}

        {isComplete && (
          <div className="dropzone-success" onClick={resetUpload}>
            <CheckCircle className="success-icon" size={48} />
            <h3 className="success-title">Verification Complete</h3>
            <p className="success-subtitle">Click to restart demo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreathingDropzone;
