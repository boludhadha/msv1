'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HorizontalCategories({ categories }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left arrow if scrolled to the right
      setShowLeftArrow(scrollLeft > 10);
      
      // Show right arrow if not at the end
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Check arrow visibility on mount
      handleScroll();
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div 
        className="overflow-x-auto hide-scrollbar" 
        ref={scrollContainerRef}
      >
        <div className="flex space-x-5 pb-6 pl-2 pr-12">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={`/categories/${category.name.replace(' & ', '-').replace(' ', '-')}`}
              className="flex flex-col items-center shrink-0"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition mb-3 border border-gray-100">
                {category.icon}
              </div>
              <span className="text-xs lowercase text-center whitespace-nowrap font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {showLeftArrow && (
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md p-3 hover:shadow-lg transition border border-gray-100"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      {showRightArrow && (
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md p-3 hover:shadow-lg transition border border-gray-100"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}