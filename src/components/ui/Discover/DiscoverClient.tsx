// 'use client';
// import React, { useRef, useEffect, useState } from 'react';

// export const DiscoverClient = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
//   const [isHydrated, setIsHydrated] = useState(false);

//   const updateIndicator = () => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const containerRect = container.getBoundingClientRect();
//     let maxVisibleWidth = 0;
//     let activeCardIndex = 0;

//     cardRefs.current.forEach((card, index) => {
//       if (!card) return;
//       const cardRect = card.getBoundingClientRect();
//       const visibleWidth = Math.min(containerRect.right, cardRect.right) - Math.max(containerRect.left, cardRect.left);
//       if (visibleWidth > maxVisibleWidth) {
//         maxVisibleWidth = visibleWidth;
//         activeCardIndex = index;
//       }
//     });

//     const activeCard = cardRefs.current[activeCardIndex];
//     if (!activeCard || !container) return;

//     const activeRect = activeCard.getBoundingClientRect();
//     const containerScrollLeft = container.scrollLeft;
//     const left = activeRect.left - containerRect.left + containerScrollLeft;

//     setIndicatorStyle({
//       left,
//       width: activeCard.offsetWidth
//     });
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Find the carousel element that was server-rendered
//     const carousel = document.getElementById('carousel');
//     if (carousel) {
//       scrollRef.current = carousel as HTMLDivElement;
//     }

//     // Find all collection cards that were server-rendered
//     const cards = document.querySelectorAll('[data-collection-id]');
//     cardRefs.current = Array.from(cards) as HTMLDivElement[];

//     setIsHydrated(true);
//   }, []);

//   useEffect(() => {
//     if (!isHydrated) return;

//     const container = scrollRef.current;
//     if (!container) return;

//     container.addEventListener('scroll', updateIndicator);
//     updateIndicator();

//     const resizeObserver = new ResizeObserver(updateIndicator);
//     resizeObserver.observe(container);

//     return () => {
//       container.removeEventListener('scroll', updateIndicator);
//       resizeObserver.disconnect();
//     };
//   }, [isHydrated]);

//   // Don't render anything until hydrated to avoid hydration mismatches
//   if (!isHydrated) {
//     return null;
//   }

//   return (
//     <>
//       {/* Navigation arrows */}
//       <button 
//         className="carousel-arrow prev-arrow" 
//         onClick={scrollLeft}
//         aria-label="Previous items"
//       >
//         &#8249;
//       </button>
//       <button 
//         className="carousel-arrow next-arrow" 
//         onClick={scrollRight}
//         aria-label="Next items"
//       >
//         &#8250;
//       </button>

//       {/* Active indicator */}
//       <div
//         className="under-indicator"
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           height: '4px',
//           backgroundColor: 'yellow',
//           transition: 'left 0.3s ease, width 0.3s ease',
//           left: `${indicatorStyle.left}px`,
//           width: `${indicatorStyle.width}px`,
//           pointerEvents: 'none'
//         }}
//       />
//     </>
//   );
// };