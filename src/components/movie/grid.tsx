import { Movie } from '@/lib/types/movie';
import MovieCard from './card';

interface MovieGridProps {
  movies?: Movie[];
  error?: string;
}

export default function MovieGrid({ movies, error }: MovieGridProps) {
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-red-500 p-6 bg-red-50 rounded-lg max-w-md text-center">
          {error}
        </div>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-gray-500 p-6 bg-gray-50 rounded-lg max-w-md text-center">
          Nenhum filme encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}