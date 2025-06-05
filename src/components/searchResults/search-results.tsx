'use client';

import { Movie } from '@/lib/types/movie';
import MovieCard from '../movie/card';

interface SearchResultsProps {
  query: string;
  results: Movie[];
  isLoading: boolean;
}

export function SearchResults({ query, results, isLoading }: SearchResultsProps) {
  if (!query) return null;

  if (isLoading) {
    return (
      <div className="max-w-6xl w-full mx-auto mt-12 px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-white mb-6">
          Buscando por: "{query}"
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
              <div className="aspect-[2/3] bg-white/10 animate-pulse"></div>
              <div className="p-3">
                <div className="h-4 bg-white/10 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-white/10 rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full mx-auto mt-12 px-2 sm:px-4">
      <h2 className="text-2xl font-bold text-white mb-6">
        Resultados para: "{query}"
      </h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-white/60">Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}