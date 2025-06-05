"use client";
import { Movie } from '@/lib/types/movie';
import MovieCard from './card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  categoryId?: string;
}

export default function MovieCarousel({ title, movies, categoryId }: MovieCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-12" id={categoryId}>
      <div className="flex justify-between items-center mb-6 px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-6 px-4 sm:px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
            <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}