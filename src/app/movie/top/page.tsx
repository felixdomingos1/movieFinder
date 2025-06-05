'use client';

import { useEffect, useState } from 'react';
import { fetchTopMoviesPage } from '@/lib/api/tmdb';
import MovieGrid from '@/components/movie/grid';
import PaginationControls from '@/components/PaginationControls/controls';
import GlassNavbar from '@/components/navbar/glass';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';
import Footer from '@/components/footer/footer';
import Loading from 'src/app/loading';

export default function TopMoviesPage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            setIsLoading(true);
            try {
                const { results, total_pages } = await fetchTopMoviesPage(currentPage);
                setMovies(results);
                setTotalPages(total_pages > 500 ? 500 : total_pages);
            } catch (error) {
                console.error('Error loading movies:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMovies();
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black   relative overflow-hidden">

            <ParticleBackground />
            <GlowEffects />
            <GlassNavbar search={true} />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <h1 className="text-4xl font-bold text-white mb-8">Filmes Top 10</h1>
                
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <MovieGrid movies={movies} />

                        <div className="mt-8">
                            <PaginationControls
                                currentPage={currentPage}
                                totalPages={totalPages}
                                hasNextPage={currentPage < totalPages}
                                hasPrevPage={currentPage > 1}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </>
                )}
            </div>
            <Footer/>
        </div>
    );
}