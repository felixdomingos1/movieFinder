// components/movie/hero.tsx
import { Movie } from '@/lib/types/movie';
import { Button } from '@/components/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieHero({ movie }: { movie: Movie }) {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        className="object-cover"
        priority
        quality={100}
      />
      
      <div className="container relative z-20 flex h-full items-end pb-16">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            {movie.title}
          </h1>
          <p className="text-gray-300 line-clamp-3">
            {movie.overview}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href={`/movie/${movie.id}`}>
                View Details
              </Link>
            </Button>
            <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white/10">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}