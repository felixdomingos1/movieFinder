"use client";

import { Movie } from "@/lib/types/movie";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicHero({ movie }: { movie: Movie }) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/img/default-poster.png";

  return (
    <div className="relative h-[100vh] sm:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      <Image
        src={posterPath}
        alt={movie.title}
        fill
        className="object-cover"
        priority
      />

      {/* Hero Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-2xl sm:max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {movie.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 line-clamp-4 sm:line-clamp-3">
            {movie.overview}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-xl transition-all text-sm sm:text-base">
              ▶️ Assistir agora
            </button>
            <button className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all text-sm sm:text-base">
              + Minha lista
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
