"use client";

import { Movie } from "@/lib/types/movie";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  movie: Movie;
}

interface HeroImageProps {
  posterPath: string;
  alt: string;
}

interface HeroContentProps {
  title: string;
  overview: string;
}

interface HeroButtonsProps {
  onWatchNow: () => void;
  onAddToList: () => void;
}

// Single Responsibility: Handles only the hero image
const HeroImage = ({ posterPath, alt }: HeroImageProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y }}
    >
      <Image
        src={posterPath}
        alt={alt}
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
    </motion.div>
  );
};

// Single Responsibility: Handles only the hero content
const HeroContent = ({ title, overview }: HeroContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6 max-w-2xl lg:max-w-3xl"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-gray-300 line-clamp-3 sm:line-clamp-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {overview}
      </motion.p>
    </motion.div>
  );
};

// Single Responsibility: Handles only the hero buttons
const HeroButtons = ({ onWatchNow, onAddToList }: HeroButtonsProps) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2"
        onClick={onWatchNow}
      >
        <span className="text-lg">▶️</span>
        <span>Watch Now</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
        onClick={onAddToList}
      >
        <span className="text-lg">+</span>
        <span>My List</span>
      </motion.button>
    </motion.div>
  );
};

// Open/Closed Principle: Component is open for extension but closed for modification
export default function CinematicHero({ movie }: HeroProps) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/img/default-poster.png";

  const handleWatchNow = () => {
    // Implementation for watching now
    console.log("Watch now clicked");
  };

  const handleAddToList = () => {
    // Implementation for adding to list
    console.log("Add to list clicked");
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      <HeroImage posterPath={posterPath} alt={movie.title} />
      
      <div className="container relative z-20 h-full flex flex-col justify-center px-4 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <HeroContent title={movie.title} overview={movie.overview} />
          <HeroButtons 
            onWatchNow={handleWatchNow} 
            onAddToList={handleAddToList} 
          />
        </div>
      </div>

      {/* Floating elements for cinematic effect */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-purple-500 blur-xl opacity-70"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0.4, 0.7]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-pink-500 blur-xl opacity-50"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}