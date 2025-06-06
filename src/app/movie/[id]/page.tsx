
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/components/ui/button';
import { Calendar, Clock, Star, Play, Plus, Popcorn, Film } from 'lucide-react';
import { Badge } from '@/components/components/ui/badge';
import { fetchMovieDetails } from '@/lib/api/tmdb';
import { GlowEffects, ParticleBackground } from '@/components/effects/background';
import GlassNavbar from '@/components/navbar/glass';
import Footer from '@/components/footer/footer';
import { Skeleton } from '@/components/components/ui/skeleton';
import { Movie } from '@/lib/types/movie';


export default function MovieDetails({ params }: { params: { id: string } }) {
    const [movie, setMovie] = useState<Movie>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await fetchMovieDetails(params.id);
                setMovie(data);
            } catch (err) {
                setError('Failed to load movie details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [params.id]);
    console.log("O Filme", movie);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <GlassNavbar search={false} />
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <Skeleton className="aspect-[2/3] w-full rounded-lg" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <Skeleton className="h-12 w-3/4" />
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <GlassNavbar search={false} />
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold text-red-500">{error || 'Movie not found'}</h1>
                    <p className="text-gray-400 mt-4">Tente mais tarde por favor</p>
                </div>
            </div>
        );
    }

    const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.jpg";

    const backdropPath = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "/no-backdrop.jpg";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            <ParticleBackground />
            <GlowEffects />
            <GlassNavbar search={true} />

            {/* Hero Section */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />
                <Image
                    src={backdropPath}
                    alt={movie.title}
                    fill
                    className="object-cover opacity-50"
                    priority 
                />
                <div className="relative z-20 h-full flex items-end p-4 md:p-8 lg:p-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter drop-shadow-lg">
                            {movie.title}
                            <span className="text-gray-300 ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                ({new Date(movie.release_date).getFullYear()})
                            </span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8 md:py-12 relative z-30">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-800">

                    <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700 bg-gray-800">
                            {movie.poster_path ? (
                                <Image
                                    src={posterPath}
                                    alt={movie.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500">No image available</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button className="bg-red-600 hover:bg-red-700 gap-2 py-5 sm:py-6 text-base sm:text-lg font-bold">
                                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                                Watch Trailer
                            </Button>
                            <Button variant="ghost" className="gap-2 py-5 sm:py-6 text-base sm:text-lg">
                                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                                Add to Watchlist
                            </Button>
                        </div>
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1 space-y-4 sm:space-y-6">
                        {/* Genres */}
                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((genre: any) => (
                                <Badge
                                    key={genre.id}
                                    variant="secondary"
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm"
                                >
                                    {genre.name}
                                </Badge>
                            ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
                            <div className="flex items-center gap-1 sm:gap-2 text-yellow-400">
                                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400" />
                                <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
                                <span className="text-gray-400">({movie.vote_count} votes)</span>
                            </div>

                            <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                            </div>

                            {movie.runtime && (
                                <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                                </div>
                            )}

                            <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                                <Popcorn className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span>{movie.popularity.toFixed(0)} popularity</span>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="space-y-2 sm:space-y-3">
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-2">
                                <Film className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                                Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {movie.overview || 'No overview available.'}
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
                            <div className="space-y-1 sm:space-y-2">
                                <h3 className="font-semibold text-gray-400 text-sm sm:text-base">Status</h3>
                                <p className="text-sm sm:text-base">{movie.status}</p>
                            </div>

                            {movie.budget > 0 && (
                                <div className="space-y-1 sm:space-y-2">
                                    <h3 className="font-semibold text-gray-400 text-sm sm:text-base">Budget</h3>
                                    <p className="text-sm sm:text-base">${movie.budget.toLocaleString()}</p>
                                </div>
                            )}

                            {movie.revenue > 0 && (
                                <div className="space-y-1 sm:space-y-2">
                                    <h3 className="font-semibold text-gray-400 text-sm sm:text-base">Revenue</h3>
                                    <p className="text-sm sm:text-base">${movie.revenue.toLocaleString()}</p>
                                </div>
                            )}

                            {movie.production_companies.length > 0 && (
                                <div className="space-y-1 sm:space-y-2 sm:col-span-2">
                                    <h3 className="font-semibold text-gray-400 text-sm sm:text-base">Production</h3>
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {movie.production_companies.map((company: any) => (
                                            <span
                                                key={company.id}
                                                className="text-xs sm:text-sm bg-gray-800 px-2 py-1 rounded"
                                            >
                                                {company.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}