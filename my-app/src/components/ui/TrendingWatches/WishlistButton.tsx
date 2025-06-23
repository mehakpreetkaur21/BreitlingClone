'use client';
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
export default function WishlistButton({ watchId }: { watchId: number }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  useEffect(() => {
    const savedWishlist = localStorage.getItem('watchWishlist');
    if (savedWishlist) {
      try {
        const parsed = JSON.parse(savedWishlist);
        setIsInWishlist(parsed.includes(watchId));
      } catch (error) {
        console.error('Error parsing wishlist:', error);
      }
    }
  }, [watchId]);
  const toggleWishlist = () => {
    const savedWishlist = localStorage.getItem('watchWishlist');
    let wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
    if (wishlist.includes(watchId)) {
      wishlist = wishlist.filter((id: number) => id !== watchId);
    } else {
      wishlist.push(watchId);
    }
    localStorage.setItem('watchWishlist', JSON.stringify(wishlist));
    setIsInWishlist(!isInWishlist);
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleWishlist();
      }}
      className="wishlist-button"
      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        size={20}
        className={`heart-icon ${isInWishlist ? 'heart-filled' : 'heart-empty'}`}
      />
    </button>
  );
}
