'use client';

import { useEffect, useState } from 'react';
import { fetchPopularMoviesPage } from '@/lib/api/tmdb';
import { useInView } from 'react-intersection-observer';
import { Movie } from '@/lib/types/movie';
import MovieGrid from '@/components/movie/grid';
import { Skeleton } from '@/components/components/ui/skeleton';
import GlassNavbar from '@/components/navbar/glass';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';

export default function InfiniteMoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && !loading && hasMore) {
            loadMoreMovies();
        }
    }, [inView]);

    const loadMoreMovies = async () => {
        setLoading(true);
        try {
            const { results, total_pages } = await fetchPopularMoviesPage(page);
            setMovies(prev => [...prev, ...results]);
            setPage(prev => prev + 1);
            setHasMore(page < total_pages);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <ParticleBackground />
            <GlowEffects />
            <GlassNavbar search={true} />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-white mb-8">Todos os Filmes</h1>

                <MovieGrid movies={movies} />

                {/* Skeleton loader que aparece antes de carregar novos filmes */}
                {loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <Skeleton className="aspect-[2/3] w-full rounded-lg" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Elemento de observação para carregar mais filmes */}
                <div ref={ref} className="flex justify-center py-8">
                    {!loading && !hasMore && (
                        <p className="text-gray-400">Chegaste ao Fim</p>
                    )}
                </div>
            </div>
        </div>
    );
}