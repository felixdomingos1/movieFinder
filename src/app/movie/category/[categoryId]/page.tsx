// app/movie/category/[categoryId]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MovieGrid from '@/components/movie/grid';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { Skeleton } from '@/components/components/ui/skeleton';
import { fetchMoviesByGenre } from '@/lib/api/tmdb';

export default function CategoryPage() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (!params.categoryId) {
          throw new Error('Categoria não encontrada');
        }

        const categoryIdStr = Array.isArray(params.categoryId) 
          ? params.categoryId[0] 
          : params.categoryId;

        const [categoryId, ...nameParts] = categoryIdStr.split('-');
        const nameFromUrl = nameParts.join(' ');

        if (!categoryId) {
          throw new Error('ID da categoria inválido');
        }

        const data = await fetchMoviesByGenre(categoryId);
        setMovies(data.results);
        setCategoryName(nameFromUrl || 'Categoria Desconhecida');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar filmes da categoria');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [params.categoryId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleBackground />
        <GlowEffects />
        <GlassNavbar search={true} />
        <section className="py-16 relative z-10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="aspect-[2/3] w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleBackground />
        <GlowEffects />
        <GlassNavbar search={true} />
        <section className="py-16 relative z-10">
          <div className="container px-4 mx-auto">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">{error}</h2>
              <p>Por favor, tente novamente mais tarde.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <ParticleBackground />
      <GlowEffects />
      <GlassNavbar search={true} />
      <section className="py-16 relative z-10">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Filmes de {categoryName}
          </h1>
          <MovieGrid movies={movies} />
        </div>
      </section>
      <Footer />
    </div>
  );
}