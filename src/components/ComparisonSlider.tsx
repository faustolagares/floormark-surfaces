import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function ComparisonSlider({ beforeImage, afterImage }: ComparisonSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let x = 0;
    if ('touches' in e) {
      x = (e as any).touches[0].clientX;
    } else {
      x = (e as any).clientX;
    }
    
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-sm cursor-col-resize select-none border border-white"
      onMouseMove={(e) => handleMove(e as any)}
      onTouchMove={(e) => handleMove(e as any)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-6 right-6 bg-brand-orange text-white text-[10px] font-bold tracking-widest px-4 py-2 uppercase z-10">
        After
      </div>

      {/* Before Image (Clipping) */}
      <div 
        className="absolute inset-0 w-full h-full z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 bg-brand-dark/80 text-white text-[10px] font-bold tracking-widest px-4 py-2 uppercase z-10 border border-white/10">
          Before
        </div>
      </div>

      {/* Handle */}
      <div 
        className="absolute inset-y-0 z-30 transition-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white" />
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-brand-dark/5 shadow-xl">
          <div className="flex gap-1">
            <ChevronLeft className="w-4 h-4 text-brand-dark" />
            <ChevronRight className="w-4 h-4 text-brand-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
