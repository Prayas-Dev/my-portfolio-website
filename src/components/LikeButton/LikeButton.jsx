import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = ({ isOverlayOpen }) => {
  const [likes, setLikes] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      setShowMessage(false); // Hide message if overlay opens
      return; // Do not run timers if overlay is open
    }

    const timer = setTimeout(() => {
      setShowMessage(true);
      const hideTimer = setTimeout(() => setShowMessage(false), 3000); // Show for 3 seconds
      return () => clearTimeout(hideTimer);
    }, 5000); // Show message after 5 seconds initially

    const interval = setInterval(() => {
      setShowMessage(true);
      const hideTimer = setTimeout(() => setShowMessage(false), 3000); // Show for 3 seconds
      return () => clearTimeout(hideTimer);
    }, 15000); // Repeat every 15 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isOverlayOpen]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className={`fixed bottom-8 left-8 z-50 flex flex-col items-center ${isOverlayOpen ? 'hidden' : ''}`}>
      <div
        className={`absolute bottom-full mb-2 px-4 py-2 bg-surface/80 text-text-main text-sm rounded-lg shadow-lg transition-opacity duration-500
          ${showMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          border border-accent backdrop-blur-sm
        `}
      >
        If you loved this website ❤️
      </div>
      <button
        onClick={handleLike}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white text-2xl shadow-lg
          hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75
          group
        "
      >
        <FaHeart className="group-active:animate-pulse" />
        {likes > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-surface">
            {likes}
          </span>
        )}
      </button>
    </div>
  );
};

export default LikeButton;
