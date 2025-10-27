import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

// 🧠 Global variable for like count
let globalLikeCount = 0;

const LikeButton = ({ isOverlayOpen }) => {
  const [likes, setLikes] = useState(globalLikeCount);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Sync state with global variable when mounted
    setLikes(globalLikeCount);
  }, []);

  const handleLike = () => {
    globalLikeCount += 1;
    setLikes(globalLikeCount);

    // Show thank-you message for a moment
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 flex flex-col items-center ${
        isOverlayOpen ? 'hidden' : ''
      }`}
    >
      {/* Pop-up message */}
      <div
        className={`absolute bottom-full mb-3 px-4 py-2 bg-surface/90 border border-accent text-text-main text-sm rounded-lg shadow-lg transition-all duration-500
          ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
        `}
      >
        💖 Thank you for your support!
      </div>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className="relative flex items-center justify-center text-2xl text-white transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-primary hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 "
      >
        <FaHeart className="transition-transform duration-200 group-active:scale-125" />

        {/* Like Count */}
        {likes > 0 && (
          <span className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold border-2 rounded-full -top-2 -right-2 bg-accent border-surface">
            {likes}
          </span>
        )}
      </button>
    </div>
  );
};

export default LikeButton;
