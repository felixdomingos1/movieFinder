"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Home, Clapperboard, Tv2, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "../components/ui/input";


type Props = {
  search?: boolean;
};

export default function GlassNavbar({ search }: Props) {

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/search");
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Clapperboard className="w-6 h-6 text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            MovieFinder
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
          <Link href="/" className="hover:text-white flex items-center gap-1">
            <Home size={16} /> Início
          </Link>
          <Link href="/movie" className="hover:text-white flex items-center gap-1">
            <Clapperboard size={16} /> Filmes
          </Link>
          <Link href="/movie/top" className="hover:text-white flex items-center gap-1">
            <Star size={16} /> Top 10
          </Link>
        </div>

        {search && (
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            <Search className="w-4 h-4 text-white/60" />
            <Input
              type="text"
              placeholder="Buscar por filmes..."
              onClick={(e) => handleSearch(e)}
              aria-disabled
              className="bg-transparent text-white placeholder-white/60 border-none focus:outline-none focus:ring-0 text-sm"
            />
          </form>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 mt-2 text-white/90 text-sm">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <Home size={16} /> Início
            </Link>
            <Link href="/movie" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <Clapperboard size={16} /> Filmes
            </Link>
            <Link href="/movie/top" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <Star size={16} /> Top 10
            </Link>

            {search && (
              <form onSubmit={handleSearch} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                <Search className="w-4 h-4 text-white/60" />
                <Input
                  aria-disabled

                  type="text"
                  placeholder="Buscar por filmes..."
                  onClick={(e) => handleSearch(e)}
                  className="bg-transparent text-white placeholder-white/60 border-none focus:outline-none focus:ring-0 text-sm"
                />
              </form>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
}