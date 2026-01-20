import React, { useState } from "react";

export const SmartImage = ({ 
  src, 
  alt, 
  fallbackIcon, 
  className = "", 
  variant = "default", // default | thumbnail
  width = 1200, // default width for query params
}) => {
  const [error, setError] = useState(false);

  // If no src or error, show fallback icon container
  if (!src || error) {
    return (
      <div className={`flex items-center justify-center text-slate-400 bg-slate-100 ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  // Use the src as-is since Unsplash URLs already have optimization parameters
  const optimizedSrc = src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
};
