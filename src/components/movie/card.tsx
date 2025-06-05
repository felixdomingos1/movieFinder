"use client";
import { Movie } from '@/lib/types/movie';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/no-poster.jpg';

  const releaseYear = movie.release_date 
    ? new Date(movie.release_date).getFullYear() 
    : 'N/A';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative group"
    >
      <Link href={`/movie/${movie.id}`} className="block">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={posterUrl}
            alt={movie.title || 'Movie poster'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rating badge */}
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-sm text-white">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{movie.vote_average ? movie.vote_average.toFixed(1) : 0}</span>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-medium text-white line-clamp-2">{movie.title}</h3>
          <p className="text-sm text-gray-400">{releaseYear}</p><p className="text-white/60 text-sm">
          {movie.genres?.map((g) => g.name).join(', ')}
        </p>
        </div>
      </Link>
    </motion.div>
  );
}